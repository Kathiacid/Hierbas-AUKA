import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import './Cosmetica.css'; 

const productosCosmetica = [
  {
    id: 1,
    nombre: 'Manzanilla Orgánica',
    precio: 12500,
    imagen: 'https://www.conasi.eu/blog/wp-content/uploads/2021/07/aceite-oliva-piel-121.jpg',
    offer: true,
    beneficios: 'Relajante, Energizante, para la digestion'
  },
  {
    id: 2,
    nombre: 'Raíz de Valeriana',
    precio: 15000,
    imagen: 'https://borinquennatural.net/cdn/shop/products/raiz-valeriana-liquido-gotas-1oz-252601_240x.jpg?v=1724201693',
    offer: false,
    beneficios: 'Relajante, Energizante, para la digestion'
  },
  {
    id: 3,
    nombre: 'Menta Piperita',
    precio: 10000,
    imagen: 'https://m.media-amazon.com/images/I/718CyR2ruRL._AC_UF1000,1000_QL80_.jpg',
    offer: true,
    beneficios: 'Relajante, Energizante, para la digestion'
  },
  {
    id: 4,
    nombre: 'Lavanda',
    precio: 14000,
    imagen: 'https://image.tuasaude.com/media/article/le/uq/oleo-essencial-de-lavanda_61273.jpg?width=686&height=487',
    offer: false,
    beneficios: 'Relajante, Energizante, para la digestion'
  },
  {
    id: 5,
    nombre: 'Ginseng',
    precio: 22000,
    imagen: 'https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/nrt/nrt11932/l/66.jpg',
    offer: false,
    beneficios: 'Relajante, Energizante, para la digestion'
  },
  {
    id: 6,
    nombre: 'Jengibre',
    precio: 9500,
    imagen: 'https://images.ecestaticos.com/I8WcoeASNvK9AJRLktH8YLQQQ84=/126x48:1085x588/1440x810/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2Fceb%2F354%2Fa21%2Fceb354a214bd32fecd3a363ce4f06c69.jpg',
    offer: false,
    beneficios: 'Relajante, Energizante, para la digestion'
  },
  {
    id: 7,
    nombre: 'Cúrcuma',
    precio: 11500,
    imagen: 'https://www.cosmeticosalpormayor.com/cdn/shop/files/preview_images/27693b991f024a549596b9b6e0e4e684.thumbnail.0000000000_600x.jpg?v=1743628943',
    offer: false,
    beneficios: 'Relajante, Energizante, para la digestion'
  },
  {
    id: 8,
    nombre: 'Equinácea',
    precio: 18000,
    imagen: 'https://attura.shop/cdn/shop/files/CremaEquinacea.jpg?v=1707210411',
    offer: false,
    beneficios: 'Relajante, Energizante, para la digestion'
  },
];

export default function Cosmetica() {
  const [filtroActivo, setFiltroActivo] = useState('Todo');

  return (
    <div>
      <main className="catalogo-cosmetica">
        
        {/* Banner */}
        <div className="cosmetica-banner-container">
            <div className="cosmetica-banner-content">
                <img src='https://sinsinsin-ecotienda.com/wp-content/uploads/2023/07/banner-cosmetica-natural-Tienda-NaturaLi.jpg' alt="Banner Cosmetica" />
            </div>
        </div>

        <nav className="cosmetica-filter-bar">
          <ul>
            <li><button onClick={() => setFiltroActivo('Todo')} className={filtroActivo === 'Todo' ? 'active' : ''}>Todo</button></li>
            <li><button onClick={() => setFiltroActivo('Relajantes')} className={filtroActivo === 'Spray' ? 'active' : ''}>Spray</button></li>
            <li><button onClick={() => setFiltroActivo('Energizantes')} className={filtroActivo === 'Roll-on' ? 'active' : ''}>Roll-on</button></li>
            <li><button onClick={() => setFiltroActivo('Digestión')} className={filtroActivo === 'Serum' ? 'active' : ''}>Serum</button></li>
            <li><button onClick={() => setFiltroActivo('Estrés')} className={filtroActivo === 'Barra' ? 'active' : ''}>Barra</button></li>
            <li><button onClick={() => setFiltroActivo('Estrés')} className={filtroActivo === 'Ungüento' ? 'active' : ''}>Ungüento</button></li>
          </ul>
        </nav>
        
        <div className="cosmetica-grid">
          
          {productosCosmetica.map((producto) => (
            <div className="cosmetica-card" key={producto.id}>
              
              {producto.offer && <div className="cosmetica-offer-tag">OFERTA</div>}

              <div className="cosmetica-image-container">
                <img 
                  src={producto.imagen} 
                  alt={producto.nombre} 
                  className="cosmetica-image"
                />
              </div>

              <div className="cosmetica-info">
                <div>
                    <h3 className="cosmetica-name">
                        <a href="#">{producto.nombre}</a>
                    </h3>
                </div>
                
                <div>
                    <span className="cosmetica-beneficios">
                        <a href="#">{producto.beneficios}</a>
                    </span>
                </div>

                <div>
                    <div className="cosmetica-prices">
                        <p className="cosmetica-price">
                            ${producto.precio.toLocaleString('es-CL')}
                        </p>
                    </div>
                </div>

                <button className="cosmetica-btn">
                  <i className="fa-solid fa-cart-shopping"></i> Lo quiero
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