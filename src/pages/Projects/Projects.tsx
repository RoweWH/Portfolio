import Project from '../../components/Project/Project';
import { projects } from '../../data/projects';

import './Projects.css';

function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="projects__heading">
        <h1 className="page__title projects__title">Projects</h1>
      </div>

      <div className="projects__list">
        {projects.map((project) => (
          <Project key={project.name} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;