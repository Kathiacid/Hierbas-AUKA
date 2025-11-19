import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import './Cosmetica.css'; 

const productosCosmetica = [
  {
    id: 1,
    nombre: 'Manzanilla Orgánica',
    precio: 12500,
    imagen: 'https://www.conasi.eu/blog/wp-content/uploads/2021/07/aceite-oliva-piel-121.jpg',
    offer: true
  },
  {
    id: 2,
    nombre: 'Raíz de Valeriana',
    precio: 15000,
    imagen: 'https://i.imgur.com/L1n7Y9q.png',
    offer: false
  },
  {
    id: 3,
    nombre: 'Menta Piperita',
    precio: 10000,
    imagen: 'https://i.imgur.com/W2Cq4A3.jpeg',
    offer: true
  },
  {
    id: 4,
    nombre: 'Lavanda',
    precio: 14000,
    imagen: 'https://i.imgur.com/T0bS1mB.jpeg',
    offer: false
  },
  {
    id: 5,
    nombre: 'Ginseng',
    precio: 22000,
    imagen: 'https://i.imgur.com/rX8oY9f.jpeg',
    offer: false
  },
  {
    id: 6,
    nombre: 'Jengibre',
    precio: 9500,
    imagen: 'https://i.imgur.com/7YfG9Y9.jpeg',
    offer: false
  },
  {
    id: 7,
    nombre: 'Cúrcuma',
    precio: 11500,
    imagen: 'https://i.imgur.com/qO4Y4Yn.jpeg',
    offer: false
  },
  {
    id: 8,
    nombre: 'Equinácea',
    precio: 18000,
    imagen: 'https://i.imgur.com/pYqO4G8.jpeg',
    offer: false
  },
];

export default function Cosmetica() {
  const [filtroActivo, setFiltroActivo] = useState('Todo');

  return (
    <div>
      {/* Contenedor principal con clase única */}
      <main className="catalogo-cosmetica">
        
        {/* Banner */}
        <div className="cosmetica-banner-container">
            <div className="cosmetica-banner-content">
                <img src='https://sinsinsin-ecotienda.com/wp-content/uploads/2023/07/banner-cosmetica-natural-Tienda-NaturaLi.jpg' alt="Banner Cosmetica" />
            </div>
        </div>

        {/* Filtros */}
        <nav className="cosmetica-filter-bar">
          <ul>
            <li><button onClick={() => setFiltroActivo('Todo')} className={filtroActivo === 'Todo' ? 'active' : ''}>Todo</button></li>
            <li><button onClick={() => setFiltroActivo('Relajantes')} className={filtroActivo === 'Relajantes' ? 'active' : ''}>Relajantes</button></li>
            <li><button onClick={() => setFiltroActivo('Energizantes')} className={filtroActivo === 'Energizantes' ? 'active' : ''}>Energizantes</button></li>
            <li><button onClick={() => setFiltroActivo('Digestión')} className={filtroActivo === 'Digestión' ? 'active' : ''}>Para la digestión</button></li>
            <li><button onClick={() => setFiltroActivo('Estrés')} className={filtroActivo === 'Estrés' ? 'active' : ''}>Para el estrés</button></li>
          </ul>
        </nav>
        
        {/* Grid de Productos */}
        <div className="cosmetica-grid">
          
          {productosCosmetica.map((producto) => (
            <div className="cosmetica-card" key={producto.id}>
              
              {/* Etiqueta de Oferta */}
              {producto.offer && <div className="cosmetica-offer-tag">OFERTA</div>}

              {/* Imagen */}
              <div className="cosmetica-image-container">
                <img 
                  src={producto.imagen} 
                  alt={producto.nombre} 
                  className="cosmetica-image"
                />
              </div>

              {/* Info del Producto */}
              <div className="cosmetica-info">
                <div>
                    <h3 className="cosmetica-name">
                        <a href="#">{producto.nombre}</a>
                    </h3>
                </div>

                <div>
                    <div className="cosmetica-prices">
                        <p className="cosmetica-price">
                            ${producto.precio.toLocaleString('es-CL')}
                        </p>
                    </div>
                </div>

                <button className="cosmetica-btn">
                  <i className="fa-solid fa-cart-shopping"></i> Añadir al Carrito
                </button>
              </div>

            </div>
          ))}

        </div>

        {/* Paginación */}
        <nav className="cosmetica-pagination">
          <ul>
            <li><button aria-label="Página anterior"><i className="fas fa-chevron-left"></i></button></li>
            <li><button className="active">1</button></li>
            <li><button>2</button></li>
            <li><button>3</button></li>
            <li><span>...</span></li>
            <li><button>8</button></li>
            <li><button aria-label="Página siguiente"><i className="fas fa-chevron-right"></i></button></li>
          </ul>
        </nav>

      </main>
    </div>
  );
}