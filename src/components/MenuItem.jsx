import React from 'react';
import { useCart } from '../hooks/useCart';
import './MenuItem.css';
import { FaPlus } from 'react-icons/fa';

function MenuItem({ item }) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(item);
  };

  return (
    <div className="menu-item">
      <img src={item.image} alt={item.name} className="menu-item-image" />
      <div className="menu-item-content">
        <h3>{item.name}</h3>
        <p className="menu-item-description">{item.description}</p>
        <div className="menu-item-footer">
          <span className="menu-item-price">₹{item.price.toFixed(2)}</span>
          <button onClick={handleAddToCart} className="add-to-cart-btn">
            <FaPlus /> Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default MenuItem;
