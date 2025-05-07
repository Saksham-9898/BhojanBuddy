import React from 'react';
import './rescard.css';

function Rescard({ image, name, description,  }) {
  return (
    <div className="coffee-card">
      <img src={image} alt={name} className="coffee-image" />
      <div className="coffee-info">
        <h3>{name}</h3>
        <p>{description}</p>
        {/* <h4>${price}</h4> */}
        <button className="order-now-btn">Book Now</button>
      </div>
    </div>
  );
}

export default Rescard;