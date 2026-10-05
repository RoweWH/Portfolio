import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="hero__content">
        <p className="hero__eyebrow">Software Engineer</p>

        <h1 className="hero__title">
          Rowe
          <br />
          Hessler
        </h1>

        <p className="hero__description">
          I love building software, solving problems, and learning new things.
        </p>

        <div className="hero__actions">
          <Link className="hero__primary" to="/projects">
            View my work
            <span aria-hidden="true">→</span>
          </Link>

          <div className="hero__socials">
            <a
              href="https://github.com/RoweWh"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/rowe-hessler-4b9680181/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://www.instagram.com/rowe_hessler/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;