import { useParams } from "react-router-dom";
import { projects } from "../data/projects";


function ProjectPage() {
    const { projectId } = useParams();
    const project = projects[projectId];

    if (!project) {
        return (
            <main className="project-page">
                <h1>Project not found</h1>
            </main>
        );
    }

    return (
        <>
            <main className="project-page">
                <section className="project-header">
                    <h1>{project.title}</h1>
                    <p>{project.description}</p>
                </section>

                <section className="project-content">
                    <h2>Technologies</h2>

                    <div className="project-technologies">
                        {project.technologies.map((technology) => (
                            <span key={technology}>
                                {technology}
                            </span>
                        ))}
                    </div>

                    <h2>Status</h2>
                    <p>{project.status}</p>

                    {project.github && (
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            View on GitHub
                        </a>
                    )}
                </section>
            </main>
        </>
    );
}

export default ProjectPage;