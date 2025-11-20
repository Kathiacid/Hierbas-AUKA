import React from 'react';
import './Servicios.css';

const servicesData = [
  {
    id: 1,
    title: "Sesiones de Reiki",
    description: "Restaura tu equilibrio energético y encuentra la paz interior. Nuestras sesiones de Reiki canalizan la energía vital universal para reducir el estrés, aliviar dolores emocionales y promover una sanación profunda desde el alma.",
    image: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&q=80&w=600", 
  },
  {
    id: 2,
    title: "Masajes Terapéuticos",
    description: "Libera la tensión acumulada y revitaliza tu cuerpo. Combinamos técnicas descontracturantes y relajantes con aceites naturales para aliviar dolores musculares, mejorar la circulación y regalarte un momento de desconexión total.",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=600", 
  },
  {
    id: 3,
    title: "Aromaterapia",
    description: "Sumérgete en el poder curativo de los aromas. Utilizamos aceites esenciales puros extraídos de plantas y flores para armonizar tu estado de ánimo, mejorar el sueño y potenciar tu bienestar físico y mental de forma natural.",
    image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&q=80&w=600", 
  }
];

const Servicios = () => {
  return (
    <section className="servicios-page">
      <div className="servicios-container">
        <div className="page-header">
          <h1>Nuestros Servicios</h1>
          <p>Bienestar natural para cuerpo y alma</p>
        </div>

        <div className="servicios-list">
          {servicesData.map((service, index) => (
            <div key={service.id} className={`servicio-card ${index % 2 !== 0 ? 'reverse' : ''}`}>
              
              {/* Columna de Texto */}
              <div className="servicio-content">
                <h2 className="servicio-title">{service.title}</h2>
                <div className="servicio-divider"></div>
                <p className="servicio-text">
                  {service.description}
                </p>
                
                <button className="btn-contactar">
                  <i className="fa-regular fa-envelope"></i> Contactar
                </button>
              </div>

              <div className="servicio-image-wrapper">
                <div className="circle-bg"></div>
                <img src={service.image} alt={service.title} className="img-circle" />
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Servicios;