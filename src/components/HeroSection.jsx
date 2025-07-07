
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './herosection.css';


function HeroSection() {
  const navigate = useNavigate();
  return (
    <section className="hero-section glow-bg animate-fadeInUp">
      <div className="overlay"></div>
      <div className="hero-content">
        <h4 className="animate-fadeInLeft"> We've Got Your Next Meal Covered</h4>
        <h1 className="animate-popIn"><span style={{ color: '#ff8000' }}>Restaurants</span></h1>
        <br/>
        <h1 className="animate-pop">Welcome to BhojanBuddy</h1>
        <p className="animate-fadeInUp">
          Craving something delicious? Discover top-rated restaurants near you, from cozy cafes to fine dining. Flavors from around the world — all in one place. We bring the best options right to your screen.
        </p>
        <p className="animate-fadeInUp" style={{fontSize: '20px', marginTop: 0}}>
          🍽️ Enjoy exclusive deals and fast delivery.<br/>
          ⭐ Read trusted reviews and ratings.<br/>
          📍 Find restaurants by cuisine, location, or mood.<br/>
          🛒 Order with a single click and track your meal in real time.<br/>
        </p>
        <p className="animate-fadeInUp" style={{fontSize: '18px', marginTop: 0, color: '#ffb366'}}>
          Your next great meal is waiting. Start exploring now!
        </p>
        <button className="order-now-button animate-popIn" onClick={() => navigate('/explore')}>
          Find Your Table
        </button>
      </div>
    </section>
  );
}

export default HeroSection;
