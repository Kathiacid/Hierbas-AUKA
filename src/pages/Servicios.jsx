import React from 'react';
import { useCart } from '../components/CartContext'; // 1. Importar el carrito
import './Servicios.css';

const servicesData = [
  {
    // 2. CAMBIAMOS LOS IDS para que no se confundan con los productos (ej: 1, 2, 3)
    id: 'serv-1', 
    title: "Sesiones de Reiki",
    description: "Restaura tu equilibrio energético y encuentra la paz interior. Nuestras sesiones de Reiki canalizan la energía vital universal para reducir el estrés.",
    image: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&q=80&w=600", 
  },
  {
    id: 'serv-2',
    title: "Masajes Terapéuticos",
    description: "Libera la tensión acumulada y revitaliza tu cuerpo. Combinamos técnicas descontracturantes y relajantes con aceites naturales.",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=600", 
  },
  {
    id: 'serv-3',
    title: "Aromaterapia",
    description: "Sumérgete en el poder curativo de los aromas. Utilizamos aceites esenciales puros extraídos de plantas y flores.",
    image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&q=80&w=600", 
  }
];

const Servicios = () => {
  // 3. Traer funciones del carrito
  const { addToCart, cartItems } = useCart(); 

  // Función auxiliar para agregar formateando los datos
  const handleAddService = (service) => {
    // Creamos un objeto que el Navbar entienda (con nombre_prod, img_prod, etc.)
    const itemParaCarrito = {
        id: service.id,
        nombre_prod: service.title,    // Mapeamos title -> nombre_prod
        img_prod: service.image,       // Mapeamos image -> img_prod
        tipo: 'Servicio',              // Le ponemos una etiqueta
        precio_prod: 0,                // Precio 0 o "A consultar" si quisieras
        stock: true                    // Asumimos que siempre hay stock de servicios
    };
    
    addToCart(itemParaCarrito);
  };

  return (
    <section className="servicios-page">
      <div className="servicios-container">
        <div className="page-header">
          <h1>Nuestros Servicios</h1>
          <p>Bienestar natural para cuerpo y alma</p>
        </div>

        <div className="servicios-list">
          {servicesData.map((service, index) => {
            
            // 4. Verificar si este servicio ya está en el carrito
            const yaEnCarrito = cartItems.some(item => item.id === service.id);

            return (
              <div key={service.id} className={`servicio-card ${index % 2 !== 0 ? 'reverse' : ''}`}>
                
                {/* Columna de Texto */}
                <div className="servicio-content">
                  <h2 className="servicio-title">{service.title}</h2>
                  <div className="servicio-divider"></div>
                  <p className="servicio-text">
                    {service.description}
                  </p>
                  
                  {/* 5. BOTÓN MODIFICADO */}
                  <button 
                    className="btn-contactar"
                    disabled={yaEnCarrito} // Se bloquea si ya está
                    style={{ 
                        opacity: yaEnCarrito ? 0.7 : 1,
                        backgroundColor: yaEnCarrito ? '#555' : '' // Cambia color si quieres
                    }} 
                    onClick={() => handleAddService(service)}
                  >
                    <i className={yaEnCarrito ? "fas fa-check" : "fa-regular fa-calendar-check"}></i> 
                    {yaEnCarrito ? ' Agregado a la consulta' : ' Agendar Cita'}
                  </button>
                </div>

                <div className="servicio-image-wrapper">
                  <div className="circle-bg"></div>
                  <img src={service.image} alt={service.title} className="img-circle" />
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Servicios;