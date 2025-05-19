import React from 'react';
import './rescard.css';

function Rescard({ image, name, description }) {
  return (
    <div className={"rescard glow-bg animate-fadeInUp"}>
      <div className="rescard-content">
        <img src={image} alt={name} className="animate-popIn" />
        <div className="rescard-title heading animate-fadeInLeft">{name}</div>
        {/* <p>{description}</p> */}
        <button className="rescard-btn animate-fadeInRight">Book Now</button>
      </div>
    </div>
  );
}

export default Rescard;