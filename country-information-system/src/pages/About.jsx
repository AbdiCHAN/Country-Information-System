import "./About.css";

// src/pages/About.jsx
export default function About() {
  return (
    <section className="about-page">
      {/* Your original About content */}
      <div className="about-container">
        <h1>About Stitch</h1>
        <p>
          Stitch is a Country Information System that lets you view, add, and manage country data.
          You can explore countries by region, see detailed statistics, and contribute new entries.
        </p>
        <p>
          This project is built using React, Vite, and modern frontend practices.
        </p>
      </div>

      {/* Additional main branch enhancements */}
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
