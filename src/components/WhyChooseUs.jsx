import React from 'react';
import './yourStyles.css'; 
import { FaCoffee } from 'react-icons/fa';
import { FaTags, FaGift, FaMoneyBillWave, FaShoppingBag, FaStar } from "react-icons/fa";
import {  FaUtensils} from "react-icons/fa";
import { FaCheckCircle } from 'react-icons/fa';


function WhyChooseUs() {
  return (
    <section className="why-choose-us glow-bg animate-fadeInUp">
      <h2 className="section-title animate-popIn">Why Choose Us?</h2>
      <p className="section-subtitle animate-fadeInLeft">
        We're not just finding restaurants, we're helping you discover your next favorite meal, tailored to your taste and location!
      </p>

      <div className="features-grid animate-fadeInUp">
        <div className="feature-card animate-fadeInLeft">
          <h3>📍 Nearby & Personalized</h3>
          <p>We use your location to find<br/> top-rated restaurants around you.</p>
        </div>
        <div className="feature-card animate-fadeInUp">
          <h3>🍜 Cuisine Your Way</h3>
          <p>Filter by what you're craving — Indian, Korean, Italian, Vegan & more!</p>
        </div>
        <div className="feature-card animate-fadeInRight">
          <h3>⭐ Top-Rated Picks</h3>
          <p>Find the best-reviewed restaurants near you.</p>
        </div>
      </div>

      <p className="call-to-action animate-fadeInUp">
        Your perfect meal is just a click away. Explore flavors you will love.
      </p>

      <button className="join-btn animate-popIn">Pick Your Craving : Explore More</button>
    </section>
  );
}

export default WhyChooseUs;
