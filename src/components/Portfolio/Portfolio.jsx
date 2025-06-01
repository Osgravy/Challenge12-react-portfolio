// src/components/Portfolio/Portfolio.jsx
import Project from '../Project/Project';
import projectData from '../../data/projects.json';

export default function Portfolio() {
  return (
    <section id="portfolio">
      <h2>My Work</h2>
      <div className="projects-grid">
        {projectData.map((project) => (
          <Project key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
}