// src/components/About/About.jsx
import avatar from "/images/Headshot.jpg";

export default function About() {
  return (
    <section id="about">
      <h2>About Me</h2>
      <img src={avatar} alt="Your Name" className="avatar" />
      <p>Hi! I'm Mark Osgood. Here's a little about me.</p>
    </section>
  );
}