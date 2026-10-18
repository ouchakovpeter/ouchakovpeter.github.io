import { Link } from "react-router-dom";
import { projects } from "../data/projects";

function Projects() {
  return (
    <div className="projects-list">
      {Object.entries(projects).map(([id, project]) => (
        <article className="project-card" key={id}>
          <h3>{project.title}</h3>

          <div>
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
          </div>

          {project.images?.[0] && (
            <img
              className="project-image"
              src={project.images[0]}
              alt={project.title}
              loading="lazy"
            />
          )}
        </article>
      ))}
    </div>
  );
}

export default Projects;