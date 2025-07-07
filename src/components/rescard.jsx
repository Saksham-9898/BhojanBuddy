
import React from 'react';
import './rescard.css';


function Rescard({ image, name, description }) {
  // Placeholder for Book Now action (e.g., open modal, show toast, etc.)
  const handleBookNow = () => {
    // Add your booking logic here
    alert('Booking functionality coming soon!');
  };
  return (
    <div className={"rescard glow-bg animate-fadeInUp"}>
      <div className="rescard-content">
        <img src={image} alt={name} className="animate-popIn" />
        <div className="rescard-title heading animate-fadeInLeft">{name}</div>
        {/* <p>{description}</p> */}
        <button className="rescard-btn animate-fadeInRight" onClick={handleBookNow}>Book Now</button>
      </div>
    </div>
  );
}

export default Rescard;