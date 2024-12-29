"use client"
import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  
 

  
  //  const addToCart = (item) => { 
  //   setCartItems((prevItems) =>
  //          [...prevItems, item]);
  //  };
  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, { ...item, quantity: 1 }]);
  };
  // const addToCart = (item) => {
  //   setCartItems((prevItems) => {
  //     // Check if the item already exists in the cart
  //     const existingItem = prevItems?.find((cartItem) => cartItem.id === item.id);
  //     console.log('Existing item:', existingItem);
  //     if (existingItem) {
  //       // If the item exists, update its quantity
  //       return prevItems.map((cartItem) =>
  //         cartItem.id === item.id
  //           ? { ...cartItem, quantity: cartItem.quantity + 1 }
  //           : cartItem
  //       );
  //     } else {
  //       // If the item doesn't exist, add it with a quantity of 1
  //          [...prevItems, item];
       
  //     }
  //   });
  // };
  
  
  const increaseCartQuantity = (id) => {
    setCartItems((currentItems) => {
      const updatedItems = currentItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      );
      return updatedItems;
    });
  };

  const decreaseCartQuantity = (id) => {
    setCartItems((currentItems) => {
      const updatedItems = currentItems.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(item.quantity - 1, 0) } : item
      );
      return updatedItems;
    });
  };

  const removeFromCart = (id) => {
    setCartItems((currentItems) => currentItems.filter((item) => item.id !== id));
  };
  
  return (
    <CartContext.Provider value={{ cartItems, addToCart, increaseCartQuantity, decreaseCartQuantity, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
