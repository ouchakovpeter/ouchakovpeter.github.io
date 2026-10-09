
import { useEffect, useRef } from "react";

const scripts = [
  "/xmb/background-gradients-night.js",
  "/xmb/background-gradients-day.js",
  "/xmb/spline-settings.js",
  "/xmb/particles-settings.js",
  "/xmb/spline-reverse.js",
  "/xmb/spline.js",
  "/xmb/particles.js",
]; 

function loadScript(src) {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = resolve;
    script.onerror = () =>
      reject(new Error(`Failed to load ${src}`));

    document.head.appendChild(script);
  });
}

export default function XMBBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    let cancelled = false;
    let animationId;
    let resizeHandler;

    async function initialize() {
      try {
        // Load the original XMB JavaScript files in order.
        for (const src of scripts) {
          await loadScript(src);
        }

        if (cancelled) return;

        const canvas = canvasRef.current;

        const gl = canvas.getContext("webgl2", {
          antialias: true,
          alpha: false,
          powerPreference: "high-performance",
        });

        if (!gl) {
          console.error("WebGL2 is not supported.");
          return;
        }

        gl.getExtension("OES_texture_float_linear");
        gl.getExtension("EXT_color_buffer_float");

        function resize() {
            const dpr = Math.min(window.devicePixelRatio || 1, 2);

            canvas.width = Math.floor(window.innerWidth * dpr);
            canvas.height = Math.floor(window.innerHeight * dpr);

            gl.viewport(0, 0, canvas.width, canvas.height);
        }

        resizeHandler = resize;
        window.addEventListener("resize", resize);
        resize();

        // Create the animated layers.
        const spline = window.createSplineLayer(gl, canvas);
        const particles = window.createParticlesLayer(gl, canvas);

        let previousTime = performance.now();
        let splineTime = 0;
        let particlesTime = Math.random() * 1000;

        function frame(now) {
          if (cancelled) return;

          const delta = Math.max(
            0,
            (now - previousTime) / 1000
          );

          previousTime = now;
          splineTime += delta;
          particlesTime += delta;

          spline.render(splineTime);
          particles.render(particlesTime);

          animationId = requestAnimationFrame(frame);
        }

        animationId = requestAnimationFrame(frame);
      } catch (error) {
        console.error("XMB initialization failed:", error);
      }
    }

    initialize();

    return () => {
      cancelled = true;
      cancelAnimationFrame(animationId);

      if (resizeHandler) {
        window.removeEventListener("resize", resizeHandler);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="xmb-canvas"
      aria-hidden="true"
    />
  );
}