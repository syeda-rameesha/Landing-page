import React from "react";
import "./App.css";
import ContactForm from "./ContactForm";
function App() {
  return (
    <div className="page">
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="nav-left">
          <div className="logo">Orbitly</div>
        </div>

        <div className="nav-links">
          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>
          <a href="#faq">FAQ</a>
        </div>

        <button className="nav-button">Get Started</button>
      </nav>

      {/* HERO SECTION */}
      <header className="hero">
        <div className="hero-text">
         <h1>
           Learn React
           <span className="gradient-text"> without getting stuck.</span>
         </h1>

         <p className="tagline">
           Step-by-step lessons, live previews, and real projects — made for beginners.
         </p>

          <div className="hero-buttons">
            <button className="primary-btn">Start Free Trial</button>
            <button className="ghost-btn">View Demo →</button>
          </div>

          <p className="note">
            No credit card required · 14-day free trial
          </p>
        </div>

        {/* dashboard preview card */}
        <div className="hero-card">
          <div className="card-header">
            <div className="dot red" />
            <div className="dot yellow" />
            <div className="dot green" />
          </div>
          <div className="card-body">
            <h3>Live Dashboard</h3>
            <ul>
              <li>
               🎓 New students today: <strong>37</strong>
              </li>
              <li>
               ⭐ Course rating: <strong>4.9/5</strong>
              </li>
              <li>
                ⏱ Average study time: <strong>42 min</strong>
              </li>
            </ul>
          </div>
        </div>
      </header>

      {/* FEATURES SECTION */}
      <section className="features" id="features">
        <div className="features-header">
          <h2>Why teams switch to Acme</h2>
          <p>
            Everything you need to launch, measure, and iterate — all in one
            clean dashboard.
          </p>
        </div>

        <div className="feature-grid">
          <div className="feature-card">
            <div className="feature-icon">📈</div>
            <h3>Actionable Insights</h3>
            <p>
              Understand what’s working in seconds with real-time funnels,
              cohort tracking, and growth scorecards.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">⚡</div>
            <h3>Automated Outreach</h3>
            <p>
              Trigger emails, in-app nudges, and winback campaigns without
              touching code.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🔒</div>
            <h3>Secure & Private</h3>
            <p>
              GDPR-ready, SOC2-friendly, and built with role-based access so
              your data stays yours.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <ContactForm />

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-top">
          <div>
            <div className="logo footer-logo">Rameesha Analytics</div>
            <p className="footer-tagline">Understand your users. Grow smarter.</p>
            <p className="copyright">
              © {new Date().getFullYear()} Acme Inc.
            </p>
          </div>

          <div className="footer-links">
            <div>
              <h4>Product</h4>
              <a href="#features">Features</a>
              <a href="#pricing">Pricing</a>
              <a href="#faq">FAQ</a>
            </div>
            <div>
              <h4>Company</h4>
              <a href="#about">About</a>
              <a href="#jobs">Careers</a>
              <a href="#contact">Contact</a>
            </div>
            <div>
              <h4>Legal</h4>
              <a href="#privacy">Privacy</a>
              <a href="#terms">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;