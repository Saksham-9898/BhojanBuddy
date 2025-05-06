import React from 'react';
import './yourStyles.css'; 
import { FaCoffee } from 'react-icons/fa';
import { FaTags, FaGift, FaMoneyBillWave, FaShoppingBag, FaStar } from "react-icons/fa";
import {  FaUtensils} from "react-icons/fa";
import { FaCheckCircle } from 'react-icons/fa';


function WhyChooseUs() {
  return (
    <section className="why-choose-us">
      <h2 className="section-title">Why Choose Us?</h2>
      <p className="section-subtitle">
        We're not just about coffee — we're about bringing you the best experience every day!
      </p>

      <div className="features-grid">
        <div className="feature-card">
        <FaCoffee size={50} color="black" />
          <h3>Best Coffee</h3>
          <p>Only the finest beans, roasted to perfection for you.</p>
        </div>
        <div className="feature-card">
        <FaGift size={50}  color='black'/>  
          <h3>Exciting Offers</h3>
          <p>Unbeatable deals and exclusive combos daily!</p>
        </div>
        <div className="feature-card">
          <FaUtensils size={50} color='black'/>
          <h3>Explore Menus</h3>
          <p>Diverse menus curated for every coffee lover's taste.</p>
        </div>
      </div>

      <p className="call-to-action">
        Your perfect cup of coffee is just a click away. Dive into the rich world of flavors!
      </p>

      <button className="join-btn">Explore More</button>
    </section>
  );
}

export default WhyChooseUs;
