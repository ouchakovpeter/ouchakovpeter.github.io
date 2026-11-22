
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

// Cache scripts so they aren't downloaded again.
const scriptCache = new Map();

function loadScript(src) {
  if (scriptCache.has(src)) {
    return scriptCache.get(src);
  }

  const promise = new Promise((resolve, reject) => {
    const script = document.createElement("script");

    // Preserve execution order while downloading in parallel.
    script.async = false;
    script.src = src;

    script.onload = resolve;

    script.onerror = () => {
      scriptCache.delete(src);
      reject(new Error(`Failed to load ${src}`));
    };

    document.head.appendChild(script);
  });

  scriptCache.set(src, promise);
  return promise;
}

export default function XMBBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    let cancelled = false;
    let animationId;
    let resizeHandler;

    async function initialize() {
      try {
        // Download all scripts concurrently.
        // They will still execute in their original order.
        await Promise.all(scripts.map(loadScript));

        if (cancelled) return;

        const canvas = canvasRef.current;
        if (!canvas) return;

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
          const dpr = Math.min(
            window.devicePixelRatio || 1,
            2
          );

          canvas.width = Math.floor(
            window.innerWidth * dpr
          );

          canvas.height = Math.floor(
            window.innerHeight * dpr
          );

          gl.viewport(
            0,
            0,
            canvas.width,
            canvas.height
          );
        }

        resizeHandler = resize;
        window.addEventListener("resize", resize);
        resize();

        // Initialize the original XMB animations.
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

          // Reveal the canvas after its first frame.
          canvas.classList.add("xmb-ready");

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
