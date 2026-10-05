import Project from '../../components/Project/Project';
import { projects } from '../../data/projects';

import './Projects.css';

function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="projects__heading">
        <h2 className="projects__title">Projects</h2>
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