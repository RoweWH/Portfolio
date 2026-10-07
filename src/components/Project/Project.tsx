import { FaGithub } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';

import type { ProjectData } from '../../data/projects';

import './Project.css';

type ProjectProps = {
  project: ProjectData;
};

function Project({ project }: ProjectProps) {
  return (
    <article className="project">
      <div className="project__content">
        <h2 className="project__name">{project.name}</h2>

        <p className="project__description">
          {project.description}
        </p>

        <div className="project__technologies">
          {project.technologies.map((technology) => (
            <span key={technology}>{technology}</span>
          ))}
        </div>

        <div className="project__links">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
              <span>GitHub</span>
            </a>
          )}

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
            >
              <FiExternalLink />
              <span>Visit</span>
            </a>
          )}
        </div>
      </div>

      <div className="project__image">
        <img
          src={project.image}
          alt={`${project.name} preview`}
        />
      </div>
    </article>
  );
}

export default Project;