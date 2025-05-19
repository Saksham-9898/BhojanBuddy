import React from 'react';
import './herosection.css';

function HeroSection() {
  return (
    <section className="hero-section glow-bg animate-fadeInUp">
      <div className="overlay"></div>
      <div className="hero-content">
        <h4 className="animate-fadeInLeft"> We've Got Your Next Meal Covered</h4>
        <h1 className="animate-popIn">Restaurants</h1>
        <br/>
        <h1 className="animate-popIn">Just a Click Away</h1>
        <p className="animate-fadeInUp">Craving something delicious? 
        Discover top-rated restaurants near you, 
        from cozy cafes to fine dining. Explore flavors from around the world — 
        all in one place. We bring the best options right to your screen.
        </p>
        <button className="order-now-button animate-popIn">Find Your Table Now</button>
      </div>
    </section>
  );
}

export default HeroSection;
