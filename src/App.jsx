import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Projects from "./components/Projects";
import ProjectPage from "./pages/ProjectPage";
// import Aurora from "./components/Aurora";
import XMBbackground from "./components/XMBbackground";

function App() {
    return (
        <BrowserRouter>
            <XMBbackground />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects/:projectId" element={<ProjectPage />} />
            </Routes>
        </BrowserRouter>
    );
}

function Home() {
    return (
        <>
            {/* <Aurora /> */}

            <header>
                <nav className="navbar">
                    <div className="logo">Peter Ouchakov</div>

                    <ul className="nav-links">
                        <li><a href="#about">About</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#skills">Skills</a></li>
                    </ul>
                </nav>
            </header>

            <section className="hero">
                <div className="hero-text">
                    <h1>
                        Hello, I'm <span>Peter Ouchakov</span>
                    </h1>

                    <p>
                        Computer Science Student & Software Developer
                    </p>

                    <div className="social-links">
                        <a
                            href="https://github.com/ouchakovpeter"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src="/assets/icons/github.webp"
                                alt="GitHub"
                            />
                        </a>

                        <a
                            href="https://www.linkedin.com/in/peterouchakov/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src="/assets/icons/linkedin.webp"
                                alt="LinkedIn"
                            />
                        </a>

                        <a
                            href="https://x.com/peterdotZIP"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src="/assets/icons/x.webp"
                                alt="X"
                            />
                        </a>

                        <a href="mailto:ouchakovpeter@gmail.com">
                            <img
                                src="/assets/icons/mail.webp"
                                alt="Email"
                            />
                        </a>
                    </div>
                </div>
            </section>

            <section id="about" class="section">
                <h2>About Me</h2>

                <p>
                I'm a Computer Science student at Carleton University focused on Software Engineering.
                </p>

                <p>
                I enjoy designing and creating software that solves real problems, makes something easier, 
                or is simply interesting to build. I'm interested in software engineering, backend development, 
                systems, graphics, and anything else that sparks my curiosity.
                </p>

            </section>

            <section id="skills" class="section">
                <h2>Skills Compiled</h2>

                <div class="skills-grid">

                    <div class="skill">
                        <h3>Languages</h3>
                        <p className = "skill-list">Python, Java, C++, JavaScript, HTML, CSS, JSX, GDscript, SQLite, GLSL</p>
                    </div>

                    <div class="skill">
                        <h3>Tools</h3>
                        <p className = "skill-list">Git, Docker, Linux, VS Code, React, Node.js, OpenGL/WebGL, WireGuard, SSH, TCP/IP, Flask</p>
                    </div>

                    <div class="skill">
                        <h3>Concepts</h3>
                        <p className = "skill-list">Data Structures, Algorithms, OOP, APIs, UML, UI Design & Asset Art, Web Hosting/Networking, Server Administration, Team Collaboration</p>
                    </div>

                </div>
            </section>
            
            <section id="projects" class="section">
                <h2>Projects</h2>

                <Projects />

            </section>

            <footer>
                <p>© 2026 Peter Ouchakov</p>
            </footer>
        </>
    );
}

export default App;
