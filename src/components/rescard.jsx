import React from 'react';
import './rescard.css';

function Rescard({ image, name, description }) {
  return (
    <div className="rescard">
      <div className="rescard-content">
        <img src={image} alt={name} />
        <div className="rescard-title heading">{name}</div>
        {/* <p>{description}</p> */}
        <button className="rescard-btn">Book Now</button>
      </div>
    </div>
  );
}

export default Rescard;