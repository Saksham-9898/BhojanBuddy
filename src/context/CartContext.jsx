
import React, { useState } from 'react';
import { CartContext } from './CartContextObject';

/**
 * CartProvider manages the cart state and provides cart operations to children via context.
 * @param {object} props
 * @param {React.ReactNode} props.children
 */


/**
 * CartProvider manages the cart state and provides cart operations to children via context.
 * @param {object} props
 * @param {React.ReactNode} props.children
 */
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  /**
   * Add an item to the cart or increase its quantity if it already exists.
   */
  const addToCart = (item) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(i => i.id === item.id);
      if (existingItem) {
        return prevItems.map(i =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prevItems, { ...item, quantity: 1 }];
    });
  };

  /**
   * Remove an item from the cart by its id.
   */
  const removeFromCart = (itemId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== itemId));
  };

  /**
   * Update the quantity of an item in the cart by delta (positive or negative).
   */
  const updateQuantity = (itemId, delta) => {
    setCartItems(prevItems => {
      return prevItems.map(item => {
        if (item.id === itemId) {
          const newQuantity = item.quantity + delta;
          return newQuantity > 0 ? { ...item, quantity: newQuantity } : null;
        }
        return item;
      }).filter(Boolean);
    });
  };


  /**
   * Get the total quantity of all items in the cart.
   */
  const getCartCount = () => cartItems.reduce((total, item) => total + item.quantity, 0);

  /**
   * Get the number of unique items in the cart.
   */
  const getUniqueItemCount = () => cartItems.length;


  /**
   * Get the subtotal price of all items in the cart.
   */
  const getSubtotal = () => cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);

  /**
   * Get the total price (alias for getSubtotal, for compatibility).
   */
  const getCartTotal = () => getSubtotal();
  /**
   * Remove all items from the cart.
   */
  const clearCart = () => {
    setCartItems([]);
  };

  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    getCartCount,
    getUniqueItemCount,
    getSubtotal,
    getCartTotal,
    clearCart
  };
  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};
