import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // --- FUNCIÓN MODIFICADA ---
  const addToCart = (product) => {
    // 1. Buscamos si ya existe un producto con el mismo ID
    const existe = cartItems.some((item) => item.id === product.id);

    // 2. Si existe, avisamos y NO lo agregamos
    if (existe) {
      alert("¡Este producto ya está en tu lista de consulta!");
      return; // Detiene la función aquí
    }

    // 3. Si no existe, lo agregamos normal
    setCartItems((prev) => [...prev, product]);
    // Opcional: puedes quitar este alert si prefieres que solo cambie el botón
    // alert(`${product.nombre_prod} agregado al carrito 🍃`);
  };

  const removeFromCart = (index) => {
    setCartItems((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};