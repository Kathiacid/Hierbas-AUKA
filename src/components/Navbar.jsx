import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useCart } from './CartContext'; 
import './Navbar.css';

export default function Navbar() {
  const { cartItems, removeFromCart } = useCart(); 
  const [isCartOpen, setIsCartOpen] = useState(false); 
  
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleConsultarStock = () => {
    const hora = new Date().getHours();
    const saludo = hora >= 6 && hora < 20 ? "Buenos días ☀️" : "Buenas noches 🌙";
    const total = cartItems.reduce((acc, item) => acc + Number(item.precio_prod || 0), 0);

    const listaProductos = cartItems.map(item => 
      `🌱 *${item.nombre_prod}*\n   Valor: $${Number(item.precio_prod || 0).toLocaleString('es-CL')}`
    ).join('\n\n');

    const mensajeTexto = 
      `${saludo}, espero que se encuentre muy bien.\n\n` +
      `Le escribo para consultar la disponibilidad de los siguientes productos seleccionados en la web *AUKA*:\n\n` +
      `${listaProductos}\n\n` +
      `----------------------------\n` +
      `💰 *Total estimado:* $${total.toLocaleString('es-CL')}\n\n` +
      `Quedo atento a su confirmación para coordinar. ¡Muchas gracias! 🍃`;

    const numeroTelefono = "+56985125667"; 
    const mensajeCodificado = encodeURIComponent(mensajeTexto);
    const url = `https://api.whatsapp.com/send?phone=${numeroTelefono}&text=${mensajeCodificado}`;
    
    window.open(url, '_blank');
  };


  const handleSearch = (e) => {
    if ((e.type === 'keydown' && e.key === 'Enter') || e.type === 'click') {
        if (searchTerm.trim() !== "") {
            navigate(`/busqueda?q=${encodeURIComponent(searchTerm)}`);
            setSearchTerm(""); 
            setIsCartOpen(false); 
        }
    }
  };

  return (
    <div className="navbar-container">
      <div className="navbar-logo">
        <Link to="/">
          🍃 <h2>AUKA</h2>
        </Link>
      </div>

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

      <div className="navbar-right">

        <div className="navbar-search">
          <input 
            type="text" 
            placeholder="Buscar productos..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={handleSearch}
          />
          <i 
            className="fas fa-search" 
            onClick={handleSearch} 
            style={{cursor: 'pointer'}}
          ></i>
        </div>

        <div 
            className="navbar-cart-btn" 
            onClick={() => setIsCartOpen(!isCartOpen)} 
        >
          <i className="fas fa-shopping-cart"></i>
          {cartItems.length > 0 && <span className="cart-badge">{cartItems.length}</span>}
        </div>

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
                      <img 
                        src={item.img_prod} 
                        alt="mini" 
                        className="cart-thumb"
                        onError={(e) => e.target.src = 'https://via.placeholder.com/40'}
                      />
                      <div className="cart-item-info">
                          <span>{item.nombre_prod}</span>
                          <small>{item.tipo || "Producto"}</small>
                      </div>
                      <button onClick={() => removeFromCart(index)} className="btn-remove">
                          <i className="fas fa-trash"></i>
                      </button>
                    </li>
                  ))}
                </ul>
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