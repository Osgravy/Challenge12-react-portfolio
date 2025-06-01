// src/components/Project/Project.jsx
export default function Project({ title, image, deployedUrl, githubUrl }) {
    return (
      <div className="project">
        <img src={image} alt={title} />
        <h3>{title}</h3>
        <div className="project-links">
          <a href={deployedUrl}>Deployed App</a>
          <a href={githubUrl}>GitHub Repo</a>
        </div>
      </div>
    );
  }