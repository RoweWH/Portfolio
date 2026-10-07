import codingPhoto from '../../assets/about/coding.jpeg';
import './About.css';

const technologies = {
  Frontend: ['React', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Vite'],
  Backend: ['C#', '.NET', 'Node.js', 'Express'],
  Data: ['SQL', 'MongoDB', 'Dapper', 'Dexie.js'],
  Tools: ['Git', 'GitHub', 'Vercel', 'Postman', 'SSMS', 'GitHub Copilot'],
};

function About() {
  return (
    <div className="about">
      <section className="about__intro">
        <div className="about__intro-copy">
          <h1 className="page__title about__title">About Me</h1>

          <div className="page__body about__body">
            <p>
              I enjoy designing and building software from the ground up,
              solving difficult problems, and finding creative ways to design
              successful systems. I like working across both the technical and
              creative sides of development, from backend APIs and databases to
              designing an interface from scratch. AI-assisted development is
              something I fully embrace, and I use it to explore unfamiliar
              problems, deepen my understanding, and continuously improve as a
              developer.
            </p>

            <p>
              Outside of software, I'm a competitive speedcuber and enjoy
              bowling and CrossFit. I also spend much of my free time writing
              scifi and fantasy.
            </p>
          </div>
        </div>

        <div className="about__photos">
          <img
            className="about__photo about__photo--coding"
            src={codingPhoto}
            alt="Rowe with a laptop"
          />
        </div>
      </section>

      <section className="about__section">
        <div className="about__section-heading">
          <p className="page__eyebrow">Technology</p>
          <h2 className="page__title">What I Work With</h2>
        </div>

        <div className="about__tech-grid">
          {Object.entries(technologies).map(([category, items]) => (
            <div className="about__tech-group" key={category}>
              <h3>{category}</h3>

              <div className="about__tech-list">
                {items.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="about__section">
        <div className="about__section-heading">
          <p className="page__eyebrow">Background</p>
          <h2 className="page__title">Work & Education</h2>
        </div>

        <div className="about__background-grid">
          <div className="about__background-group">
            <h3>Work</h3>

            <div className="about__background-item">
              <p className="about__background-title">Production Manager</p>
              <p className="about__background-detail">
                Cubicle Enterprises LLC
              </p>
              <p className="about__background-meta">2015–Present</p>
            </div>
          </div>

          <div className="about__background-group">
            <h3>Education</h3>

            <div className="about__background-item">
              <p className="about__background-title">
                St. Joseph's University - BS in Mathematics
              </p>
            </div>

            <div className="about__background-item">
              <p className="about__background-title">
                Empire State College - BS in Computer Science
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;