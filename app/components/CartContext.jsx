'use client';
import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // 🧩 Add product to cart
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(
        (item) => item.product_id === product.product_id
      );

      if (existingItem) {
        // increase quantity if already in cart
        return prevCart.map((item) =>
          item.product_id === product.product_id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // add new product with quantity 1
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  // ➕ Increase quantity
  const increaseQuantity = (product_id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.product_id === product_id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  // ➖ Decrease quantity
  const decreaseQuantity = (product_id) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.product_id === product_id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // ❌ Remove product completely
  const removeFromCart = (product_id) => {
    setCart((prevCart) =>
      prevCart.filter((item) => item.product_id !== product_id)
    );
  };

  // 🧹 Clear the entire cart
  const clearCart = () => {
    setCart([]);
  };

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = cart.reduce(
    (acc, item) => acc + item.pd_price * item.quantity,
    0
  );
  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
        totalItems,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
