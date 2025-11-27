import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useCart } from './CartContext'; // Asegúrate de importar el contexto
import './Navbar.css';

export default function Navbar() {
  const { cartItems, removeFromCart } = useCart(); // Traemos los productos del carrito
  const [isCartOpen, setIsCartOpen] = useState(false); // Para abrir/cerrar el desplegable

  // --- LÓGICA DE WHATSAPP ---
 const handleConsultarStock = () => {
    // 1. Saludo
    const hora = new Date().getHours();
    const saludo = hora >= 6 && hora < 20 ? "Buenos días" : "Buenas noches";

    // 2. Lista de productos
    // Usamos \n para saltos de línea normales
    const listaProductos = cartItems.map(item => `- ${item.nombre_prod}`).join('\n');

    // 3. Texto completo SIN codificar todavía
    const mensajeTexto = `${saludo}, me gustaría consultar el stock de:\n\n${listaProductos}`;

    // 4. Tu número (CÁMBIALO)
    const numeroTelefono = "+56984038859"; 

    // 5. CODIFICACIÓN SEGURA
    // encodeURIComponent convierte los espacios y enters en símbolos que el navegador entiende
    const mensajeCodificado = encodeURIComponent(mensajeTexto);

    // 6. USAR "api.whatsapp.com" EN LUGAR DE "wa.me"
    // Este formato es mucho más confiable para la App de escritorio
    const url = `https://api.whatsapp.com/send?phone=${numeroTelefono}&text=${mensajeCodificado}`;
    
    window.open(url, '_blank');
  };
  return (
    <div className="navbar-container">
      {/* Logo */}
      <div className="navbar-logo">
        <Link to="/">
          🍃 <h2>AUKA</h2>
        </Link>
      </div>

      {/* Menú de navegación */}
      <nav className="navbar-links">
        <ul>
          <li><NavLink to="/" end>Inicio</NavLink></li>
          <li><NavLink to="/cosmetica">Cosmetica</NavLink></li>
          <li><NavLink to="/medicinal">Medicinal</NavLink></li>
          <li><NavLink to="/servicios">Servicios</NavLink></li>
          <li><NavLink to="/blog">Blog</NavLink></li>
          <li><NavLink to="/sobrenosotros">Sobre Nosotros</NavLink></li>
        </ul>
      </nav>

      {/* Parte derecha: Buscador + Carrito */}
      <div className="navbar-right">
        
        {/* Buscador */}
        <div className="navbar-search">
          <input type="text" placeholder="Buscar productos..." />
          <i className="fas fa-search"></i>
        </div>

        {/* Icono del Carrito */}
        <div 
            className="navbar-cart-btn" 
            onClick={() => setIsCartOpen(!isCartOpen)} // Abre/Cierra al hacer clic
        >
          <i className="fas fa-shopping-cart"></i>
          {/* Numerito rojo contador */}
          {cartItems.length > 0 && <span className="cart-badge">{cartItems.length}</span>}
        </div>

        {/* --- DESPLEGABLE DEL CARRITO --- */}
        {isCartOpen && (
          <div className="cart-dropdown">
            <h4>Tu selección de consulta</h4>
            
            {cartItems.length === 0 ? (
              <p>No has seleccionado nada aún.</p>
            ) : (
              <>
                <ul className="cart-items-list">
                  {cartItems.map((item, index) => (
                    <li key={index} className="cart-item">
                      {/* Imagen pequeña */}
                      <img 
                        src={item.img_prod} 
                        alt="mini" 
                        className="cart-thumb"
                        onError={(e) => e.target.src = 'https://via.placeholder.com/40'}
                      />
                      
                      {/* Info del producto */}
                      <div className="cart-item-info">
                          <span>{item.nombre_prod}</span>
                          <small>{item.tipo || "Producto"}</small>
                      </div>

                      {/* Botón borrar uno */}
                      <button onClick={() => removeFromCart(index)} className="btn-remove">
                          <i className="fas fa-trash"></i>
                      </button>
                    </li>
                  ))}
                </ul>
                
                {/* BOTÓN WHATSAPP */}
                <button className="btn-whatsapp-consultar" onClick={handleConsultarStock}>
                    <i className="fab fa-whatsapp"></i> Ir a Consultar
                </button>
              </>
            )}
          </div>
        )}

      </div>
    </div>
  );
}