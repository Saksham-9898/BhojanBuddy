import React from 'react';
import './about.css';

function About() {
  return (
    <div className="about-section about-card animate-about-fadeIn">
      <div className="about-icon-bar animate-about-slideIn">
        <span className="about-main-icon">🍽️</span>
      </div>
      <h2 className="about-title animate-about-slideIn">About Us – <span className="about-accent">Your Trusted Food Companion</span> 🙏</h2>
      <hr className="about-hr animate-about-fadeIn" />
      <h3 className="about-subtitle animate-about-slideIn">Bhojan Buddy – <span className="about-accent">Your Trusted Guide for Every Meal</span> 😇🍛</h3>
      <p className="about-intro animate-about-fadeIn">
        <b>Have you ever thought – <span className="about-accent">"Where should I eat today?"</span> and found it hard to decide?</b> 🤔<br/>
        <b>Bhojan Buddy</b> is your <span className="about-accent">simple and smart solution</span> to that confusion! 🙌
      </p>
      <hr className="about-hr thin animate-about-fadeIn" />
      <h3 className="about-section-title animate-about-slideIn">✨ What Do We Do?</h3>
      <p className="about-desc animate-about-fadeIn">
        <b>Bhojan Buddy is a <span className="about-accent">smart restaurant finder platform</span></b> where you can <b>search for restaurants using filters based on:</b>
      </p>
      <ul className="about-list animate-about-fadeIn">
        <li>📍 <b>Location</b></li>
        <li>🍲 <b>Cuisine</b></li>
        <li>⭐ <b>Ratings</b></li>
      </ul>
      <p className="about-desc animate-about-fadeIn">
        <b>With just a few clicks, the <span className="about-accent">best restaurants</span> around you are right in front of you!</b><br/>
        Whether you're a street food lover, looking for a quiet cafe, or searching for a special dinner spot – <b>Bhojan Buddy</b> is always by your side. 🍴
      </p>
      <hr className="about-hr thin animate-about-fadeIn" />
      <h3 className="about-section-title animate-about-slideIn">🎯 Our Vision</h3>
      <p className="about-desc animate-about-fadeIn">
        <b>Our mission is to give you a platform that is <span className="about-accent">trusted, simple</span>, and only shows the <span className="about-accent">best options</span>.</b><br/>
        <b>Bhojan Buddy</b> was created so that you can confidently make the right choice – without wasting time or feeling confused.
      </p>
      <hr className="about-hr thin animate-about-fadeIn" />
      <h3 className="about-section-title animate-about-slideIn">🚀 Let's Begin the Journey of Taste</h3>
      <p className="about-desc animate-about-fadeIn">
        <b>Every meal can be a <span className="about-accent">memorable experience</span>, if you find the right place.</b><br/>
        With <b>Bhojan Buddy</b>, you can explore new flavors, new places – and turn every dine-out moment into something special.
      </p>
      <hr className="about-hr thin animate-about-fadeIn" />
      <h3 className="about-highlight animate-about-slideIn">💬 Bhojan Buddy – <span className="about-accent">Because You Deserve Not Just Food, But a Great Experience.</span></h3>
    </div>
  );
}

export default About;