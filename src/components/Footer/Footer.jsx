// src/components/Footer/Footer.jsx
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer>
      <div className="social-links">
        <a href="https://github.com/Osgravy"><FaGithub /></a>
        <a href="https://www.linkedin.com/in/mark-osgood-a313b9230/"><FaLinkedin /></a>
        <a href="https://bsky.app/profile/osgravy.bsky.social"><FaTwitter /></a>
      </div>
      <p>&copy; {new Date().getFullYear()} Your Name</p>
    </footer>
  );
}