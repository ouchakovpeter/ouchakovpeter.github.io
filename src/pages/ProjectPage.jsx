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
                <h1 className="project-title">{project.title}</h1>

                <p className="project-description">{project.description}</p>

                <h2>Technologies</h2>

                <ul className="tech-list">
                    {project.technologies.map((technology) => (
                        <li key={technology}>{technology}</li>
                    ))}
                </ul>

                <a className="project-github" href={project.github} target="_blank" rel="noopener noreferrer">
                    View on GitHub
                </a>
            </main>
        </>
    );
}

export default ProjectPage;