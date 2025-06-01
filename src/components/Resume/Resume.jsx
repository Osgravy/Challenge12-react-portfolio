// src/components/Resume/Resume.jsx
import resumePDF from "/files/resume.pdf";

export default function Resume() {
  const skills = [
    'JavaScript', 'React', 'HTML/CSS', 'Node.js', 'Git', 'Responsive Design'
  ];

  return (
    <section id="resume">
      <h2>Resume</h2>
      <a href={resumePDF} download className="download-btn">
        Download My Resume
      </a>
      <div className="skills">
        <h3>Skills</h3>
        <ul>
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}