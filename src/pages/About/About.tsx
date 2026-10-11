
import codingPhoto from '../../assets/about/coding.jpeg';
import funPhoto from '../../assets/about/fun.jpeg';

import './About.css';

function About() {
  return (
    <div className="about">
      <section className="about__intro">
        <div className="about__intro-copy">
          <h1 className="page__title about__title">About Me</h1>

          <div className="page__body about__body">
            <p>
              I enjoy designing and building software from the ground up,
              solving difficult problems, and finding creative solutions.
              I like working across both the technical and creative sides
              of development, from backend APIs and databases to designing
              an interface from scratch.
            </p>

            <p>
              My journey into software started with speedcubing. I began
              writing simple training applications for myself using C# and
              .NET, and quickly discovered how much I enjoyed programming.
              I became particularly interested in working with SQL,
              designing databases, and building backend systems.
            </p>

            <p>
              Eventually, I wanted to build complete web applications,
              so I learned the MERN stack (MongoDB, Express, React, and
              Node.js), expanding my experience into frontend development.
              I've been hooked ever since. My growing interest in software
              also led me to return to school to pursue a second bachelor's
              degree in Computer Science.
            </p>

            <p>
              Today, I enjoy working across the full stack with technologies
              like React, TypeScript, C#, .NET, Node.js, and SQL. I'm always
              looking to learn new things, explore unfamiliar technologies,
              and improve as a developer. I also embrace AI-assisted
              development as a tool for learning and solving problems.
            </p>

            <p>
              Outside of software, I'm a competitive speedcuber and enjoy
              bowling and CrossFit. I also spend much of my free time
              writing science fiction and fantasy.
            </p>

            <p>
              I'm currently looking for opportunities to break into the
              software engineering field, apply what I've learned, and
              gain hands-on professional experience. I'm excited to
              collaborate with other developers, contribute to meaningful
              projects, and continue growing as a software engineer.
            </p>
          </div>
        </div>

        <div className="about__photos">
          <img
            className="about__photo"
            src={codingPhoto}
            alt="Rowe working on a laptop"
          />

          <img
            className="about__photo"
            src={funPhoto}
            alt="Rowe holding a puzzle"
          />
        </div>
      </section>

      <section className="about__section">
        <div className="about__section-heading">
          <p className="page__eyebrow">Professional Background</p>
          <h2 className="page__title">Work Experience</h2>
        </div>

        <div className="page__body about__body">
          <p>
            I currently work at TheCubicle, a company specializing
            in speedcubes and other twisty puzzle products. I manage
            the company's puzzle customization and production
            department, the Cubicle ProShop, which I've overseen since
            its inception in 2015.
          </p>

          <p>
            My work involves overseeing production operations, developing
            efficient processes, managing workflows, and solving problems
            to ensure our products meet the expectations of competitive
            cubers around the world.
          </p>

          <p>
            My experience at TheCubicle has taught me a great deal about
            leadership, organization, and problem-solving. Those skills
            have carried over naturally into software development,
            particularly when designing systems and finding practical
            solutions to complex challenges.
          </p>
        </div>
      </section>

      <section className="about__section">
        <div className="about__section-heading">
          <p className="page__eyebrow">Academic Background</p>
          <h2 className="page__title">Education</h2>
        </div>

        <div className="page__body about__body">
          <p>
            Bachelor of Science in Mathematics
            <br />
            St. Joseph's University
          </p>

          <p>
            Bachelor of Science in Computer Science
            <br />
            Empire State College
          </p>
        </div>
      </section>
    </div>
  );
}

export default About;
