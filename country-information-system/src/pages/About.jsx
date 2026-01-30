import "./About.css";

export default function About() {
  return (
    <section className="about-page">
      <header className="about-header">
        <h1>
          About the <span>Country Information System</span> Project
        </h1>
        <p>
         This is country information system which allows users to explore detailed information about countries worldwide. And it is built using React and the REST Countries API.
        </p>
      </header>

      <div className="mission-card">
        <div>
          <h2>Purpose of this System</h2>
          <p>
          The purpose of this system is to provide users with a comprehensive and user-friendly platform to access accurate and up-to-date information about countries around the globe. It aims to facilitate learning, research, and exploration of global geography and cultures.
          </p>
        </div>
        <ul>
          <li>✔ Transparency First</li>
          <li>✔ Data Accuracy</li>
          <li>✔ Universal Accessibility</li>
        </ul>
      </div>

      <section className="tech-stack">
        <h2>Tools & Tech Stack</h2>
        <div className="tech-grid">
          <div>React 18+</div>
          <div>REST Countries API</div>
          <div>Fetch API</div>
          <div>Modern CSS</div>
        </div>
      </section>
    </section>
  );
}
