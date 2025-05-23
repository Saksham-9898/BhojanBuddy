import React from "react";
import "./howitworks.css";

const steps = [
  {
    icon: (
      <svg width="48" height="48" fill="none" stroke="#FF6B35" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
    ),
    title: "Search",
    description: "Enter your location to find restaurants near you"
  },
  {
    icon: (
      <svg width="48" height="48" fill="none" stroke="#FF6B35" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><polygon points="22 2 16 22 11 13 2 9 22 2"/></svg>
    ),
    title: "Filter",
    description: "Refine your search by cuisine, price range, and ratings"
  },
  {
    icon: (
      <svg width="48" height="48" fill="none" stroke="#FF6B35" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
    ),
    title: "Choose",
    description: "Browse menus, photos, and reviews to find your perfect spot"
  },
  {
    icon: (
      <svg width="48" height="48" fill="none" stroke="#FF6B35" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
    ),
    title: "Book",
    description: "Reserve your table with just a few clicks"
  }
];

const HowItWorks = () => (
  <section className="howitworks-section">
    <h2 className="howitworks-title">How It Works</h2>
    <p className="howitworks-subtitle">Finding and booking your next dining experience has never been easier</p>
    <div className="howitworks-steps">
      {steps.map((step, idx) => (
        <div className="howitworks-card" key={idx}>
          <div className="howitworks-icon">{step.icon}</div>
          <h3 className="howitworks-step-title">{step.title}</h3>
          <p className="howitworks-step-desc">{step.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default HowItWorks;
