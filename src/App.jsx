import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./index.css";
import ProjectPage from "./pages/ProjectPage";
import Aurora from "./components/Aurora";

function App() {
    return (
        <BrowserRouter>
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
            <Aurora />

            <header>
                <nav className="navbar">
                    <div className="logo">Peter Ouchakov</div>

                    <ul className="nav-links">
                        {/* Navigation links can go here later */}
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

            <div className="introduction">
                <p>A proper introduction is coming soon.</p>

                <Link to="/projects/game">
                    {/* Game Project */}
                </Link>

            </div>

            <footer>
                <p>© 2026 Peter Ouchakov</p>
            </footer>
        </>
    );
}

export default App;
