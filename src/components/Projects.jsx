import { Link } from "react-router-dom";
import { projects } from "../data/projects";

function Projects() {
  return (
    <div className="projects-list">
      {Object.entries(projects).map(([id, project]) => (
        <article className="project-card" key={id}>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <p className="project-skills">{project.technologies.join(" · ")}</p>

          <div className="project-links">
            {project.page && <Link to={project.page}>Details</Link>}
            {project.github && (
              <a href={project.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
            )}
          </div>
        </article>
      ))}
    </div>
  );
}

export default Projects;