import { useParams } from "react-router-dom";
import { projects } from "../data/projects";
import Aurora from "../components/Aurora";

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
            <Aurora />

            <main className="project-page">
                <h1>{project.title}</h1>

                <p>{project.description}</p>

                <p>{project.status}</p>

                <h2>Technologies</h2>

                <ul>
                    {project.technologies.map((technology) => (
                        <li key={technology}>{technology}</li>
                    ))}
                </ul>

                <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    View on GitHub
                </a>
            </main>
        </>
    );
}

export default ProjectPage;