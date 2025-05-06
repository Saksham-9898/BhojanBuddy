import React from 'react';
import './herosection.css';

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="overlay"></div>
      <div className="hero-content">
        <h4> We've Got Your Next Meal Covered</h4>
        <h1>Restaurants</h1>
        <br></br>
        <h1>Just a Click Away</h1>
        <p>Craving something delicious? 
        Discover top-rated restaurants near you, 
        from cozy cafes to fine dining. Explore flavors from around the world — 
        all in one place. We bring the best options right to your screen.
        </p>
        <button className="order-now-button">Find Your Table Now</button>
      </div>
    </section>
  );
}

export default HeroSection;
