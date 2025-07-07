import React from 'react';
import { useCart } from '../hooks/useCart';
import './cart.css';
import { FaTrash, FaMinus, FaPlus } from 'react-icons/fa';

function Cart() {
  const { cartItems, removeFromCart, updateQuantity, getCartTotal, clearCart } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="cart-container empty-cart">
        <h2>Your Cart is Empty</h2>
        <p>Add some delicious items to your cart!</p>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      <div className="cart-items">
        {cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} className="cart-item-image" />
            <div className="cart-item-details">
              <h3>{item.name}</h3>
              <p>₹{item.price}</p>
            </div>
            <div className="cart-item-actions">
              <div className="quantity-controls">
                <button 
                  onClick={() => updateQuantity(item.id, -1)}
                  className="quantity-btn"
                  disabled={item.quantity === 1}
                  style={item.quantity === 1 ? { opacity: 0.5, cursor: 'not-allowed' } : {}}
                >
                  <FaMinus />
                </button>
                <span className="quantity">{item.quantity}</span>
                <button 
                  onClick={() => updateQuantity(item.id, 1)}
                  className="quantity-btn"
                >
                  <FaPlus />
                </button>
              </div>
              <button 
                onClick={() => removeFromCart(item.id)}
                className="remove-btn"
              >
                <FaTrash />
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-summary">
        <div className="cart-total">
          <h3>Total:</h3>
          <h3>₹{getCartTotal().toFixed(2)}</h3>
        </div>
        <div className="cart-actions">
          <button onClick={clearCart} className="clear-cart-btn">
            Clear Cart
          </button>
          <button className="checkout-btn">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;