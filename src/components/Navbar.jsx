import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useCart } from './CartContext'; 
import './Navbar.css';

export default function Navbar() {
  // Traemos los nuevos valores del contexto
  const { cartItems, removeFromCart, cartTotal, totalAhorro } = useCart(); 
  
  const [isCartOpen, setIsCartOpen] = useState(false); 
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleConsultarStock = () => {
    const hora = new Date().getHours();
    const saludo = hora >= 6 && hora < 20 ? "Buenos días ☀️" : "Buenas noches 🌙";
    
    // Generamos la lista para WhatsApp con detalles de oferta
    const listaProductos = cartItems.map(item => {
        const cantidadStr = item.cantidad > 1 ? ` (x${item.cantidad})` : '';
        
        // Determinamos qué precio mostrar en el mensaje
        let precioTexto = "";
        let precioUnitario = 0;

        if (item.tiene_descuento && item.precio_actual) {
            precioUnitario = Number(item.precio_actual);
            precioTexto = `$${precioUnitario.toLocaleString('es-CL')} (Oferta 🔥)`;
        } else {
            precioUnitario = Number(item.precio_prod);
            precioTexto = `$${precioUnitario.toLocaleString('es-CL')}`;
        }

        const subtotal = precioUnitario * item.cantidad;

        return `🌱 *${item.nombre_prod}*${cantidadStr}\n   Valor un.: ${precioTexto}\n   Subtotal: $${subtotal.toLocaleString('es-CL')}`;
    }).join('\n\n');

    // Construimos el mensaje final con el ahorro
    let resumenEconomico = `💰 *Total a pagar:* $${cartTotal.toLocaleString('es-CL')}`;
    
    if (totalAhorro > 0) {
        resumenEconomico += `\n🎉 *¡Ahorro total:* $${totalAhorro.toLocaleString('es-CL')}!*`;
    }

    const mensajeTexto = 
      `${saludo}, espero que se encuentre muy bien.\n\n` +
      `Le escribo para consultar disponibilidad de mi pedido en *AUKA*:\n\n` +
      `${listaProductos}\n\n` +
      `----------------------------\n` +
      `${resumenEconomico}\n\n` +
      `Quedo atento a su confirmación. ¡Gracias! 🍃`;

    const numeroTelefono = "+56954714573"; 
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

  const cantidadTotalItems = cartItems.reduce((acc, item) => acc + item.cantidad, 0);

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
          {cantidadTotalItems > 0 && <span className="cart-badge">{cantidadTotalItems}</span>}
        </div>

        {isCartOpen && (
          <div className="cart-dropdown">
            <h4>Tu selección de consulta</h4>
            {cartItems.length === 0 ? (
              <p>No has seleccionado nada aún.</p>
            ) : (
              <>
                <ul className="cart-items-list">
                  {cartItems.map((item, index) => {
                    // Calculamos precio a mostrar en la lista visual
                    const precioFinal = item.tiene_descuento ? item.precio_actual : item.precio_prod;
                    
                    return (
                        <li key={index} className="cart-item">
                        <img 
                            src={item.img_prod} 
                            alt="mini" 
                            className="cart-thumb"
                            onError={(e) => e.target.src = 'https://via.placeholder.com/40'}
                        />
                        <div className="cart-item-info">
                            <span>
                                {item.nombre_prod} 
                                {item.cantidad > 1 && <strong style={{color: '#28a745'}}> x{item.cantidad}</strong>}
                            </span>
                            
                            <small>
                                {item.tiene_descuento ? (
                                    <>
                                        <span style={{textDecoration:'line-through', color:'#999', marginRight:'5px'}}>
                                            ${Number(item.precio_prod).toLocaleString('es-CL')}
                                        </span>
                                        <span style={{color:'#e74c3c', fontWeight:'bold'}}>
                                            ${Number(item.precio_actual).toLocaleString('es-CL')}
                                        </span>
                                    </>
                                ) : (
                                    `$${Number(item.precio_prod).toLocaleString('es-CL')}`
                                )}
                            </small>
                        </div>
                        <button onClick={() => removeFromCart(index)} className="btn-remove">
                            <i className="fas fa-trash"></i>
                        </button>
                        </li>
                    );
                  })}
                </ul>
                
                {/* RESUMEN DE TOTALES EN EL DROPDOWN */}
                <div className="cart-total-preview">
                     <div style={{display:'flex', justifyContent:'space-between', fontWeight:'bold', fontSize:'1.1rem'}}>
                        <span>Total:</span>
                        <span>${cartTotal.toLocaleString('es-CL')}</span>
                     </div>
                     
                     {totalAhorro > 0 && (
                         <div style={{display:'flex', justifyContent:'space-between', color:'#e74c3c', fontSize:'0.9rem', marginTop:'5px'}}>
                            <span>¡Estás ahorrando!</span>
                            <span>- ${totalAhorro.toLocaleString('es-CL')}</span>
                         </div>
                     )}
                </div>

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