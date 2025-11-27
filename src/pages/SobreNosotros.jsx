import React from 'react';
import './SobreNosotros.css'; // Conexión con el archivo de estilos

const AboutUs = () => {
  
  // Iconos (usando emojis por simplicidad, reemplazables por componentes SVG o FontAwesome)
  const icons = {
    leaf: "🌿",
    harvest: "🌾",
    flask: "⚗️",
    bulkHerbs: "🍃",
    teaMix: "☕",
    tincture: "🧴",
    workshop: "📖",
    personalCare: "🪮",
    gift: "🎁"
  };

  return (
    <div className="about-us-container">
      <section className="intro-section">
        <div className="intro-content">
          <h1 className="intro-title">¿Quiénes somos Auka?</h1>
          <p className="intro-text">
            En Auka, celebramos el poder ancestral de la naturaleza. 
            Somos un puente entre la sabiduría botánica y tu 
            búsqueda de un bienestar genuino, ofreciendo hierbas 
            puras y orgánicas que nutren cuerpo y espíritu.
          </p>
          <p className="intro-text">
            Nuestra misión es simple: conectar a las personas con la 
            tierra a través de productos que son tan honestos y vitales 
            como la naturaleza misma. Cada hierba cuenta una 
            historia de origen, cuidado y respeto.
          </p>
        </div>
        <div className="intro-image-wrapper">
          <img 
            src="https://placehold.co/600x500/e0c090/FFFFFF?text=Flores+y+Madera" 
            alt="Flores y hierbas secas sobre una mesa de madera" 
            className="intro-image" 
          />
        </div>
      </section>


      <section className="how-we-work-section">
        <div className="centered-header-block">
          <h2 className="centered-title">¿Cómo trabaja Auka?</h2>
          <p className="centered-subtitle">
            Desde la semilla hasta tu taza, seguimos un proceso consciente y respetuoso con la Tierra
            para garantizar la máxima pureza y potencia en cada hierba.
          </p>
        </div>

        <div className="process-cards-grid">
          {/* Tarjeta 1 */}
          <div className="process-card">
            <div className="process-icon-circle">
              <span>{icons.leaf}</span>
            </div>
            <h3 className="process-card-title">Cultivo Orgánico</h3>
            <p className="process-card-text">
              Colaboramos con agricultores locales que practican métodos de cultivo 
              orgánicos y sostenibles, sin pesticidas ni químicos.
            </p>
          </div>
          {/* Tarjeta 2 */}
          <div className="process-card">
            <div className="process-icon-circle">
              <span>{icons.harvest}</span>
            </div>
            <h3 className="process-card-title">Cosecha Consciente</h3>
            <p className="process-card-text">
              Cada planta es cosechada a mano en su punto óptimo de madurez para 
              preservar sus propiedades medicinales y aromáticas.
            </p>
          </div>
          {/* Tarjeta 3 */}
          <div className="process-card">
            <div className="process-icon-circle">
              <span>{icons.flask}</span>
            </div>
            <h3 className="process-card-title">Secado y Empaque</h3>
            <p className="process-card-text">
              Utilizamos técnicas de secado natural y empacamos cuidadosamente 
              para mantener la frescura e integridad de cada hierba.
            </p>
          </div>
        </div>
      </section>


      {/* ================== SECCIÓN 3: QUÉ HACE AUKA ================== */}
      <section className="what-we-do-section">
        <div className="centered-header-block">
          <h2 className="centered-title">¿Qué hace Auka?</h2>
          <p className="centered-subtitle">
            Ofrecemos una selección curada de hierbas naturales para enriquecer tu vida, promoviendo
            el equilibrio y el bienestar integral.
          </p>
        </div>

        <div className="offerings-grid">
          {/* Fila 1 */}
          <div className="offering-card">
            <div className="offering-icon-wrapper"><span>{icons.bulkHerbs}</span></div>
            <div className="offering-content">
              <h3 className="offering-card-title">Hierbas a Granel</h3>
              <p className="offering-card-text">Selección pura para tus infusiones y remedios.</p>
            </div>
          </div>
          <div className="offering-card">
            <div className="offering-icon-wrapper"><span>{icons.teaMix}</span></div>
            <div className="offering-content">
              <h3 className="offering-card-title">Mezclas de Infusiones</h3>
              <p className="offering-card-text">Combinaciones expertas para cada momento del día.</p>
            </div>
          </div>
          
          {/* Fila 2 */}
          <div className="offering-card">
            <div className="offering-icon-wrapper"><span>{icons.tincture}</span></div>
            <div className="offering-content">
              <h3 className="offering-card-title">Tinturas y Extractos</h3>
              <p className="offering-card-text">El poder concentrado de las plantas en cada gota.</p>
            </div>
          </div>
          <div className="offering-card">
            <div className="offering-icon-wrapper"><span>{icons.workshop}</span></div>
            <div className="offering-content">
              <h3 className="offering-card-title">Talleres y Educación</h3>
              <p className="offering-card-text">Compartimos el conocimiento sobre el uso de las hierbas.</p>
            </div>
          </div>

          {/* Fila 3 */}
          <div className="offering-card">
            <div className="offering-icon-wrapper"><span>{icons.personalCare}</span></div>
            <div className="offering-content">
              <h3 className="offering-card-title">Cuidado Personal</h3>
              <p className="offering-card-text">Productos botánicos para nutrir tu piel y cabello.</p>
            </div>
          </div>
          <div className="offering-card">
            <div className="offering-icon-wrapper"><span>{icons.gift}</span></div>
            <div className="offering-content">
              <h3 className="offering-card-title">Kits de Regalo</h3>
              <p className="offering-card-text">Regala bienestar con nuestras selecciones especiales.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================== SECCIÓN 4: DÓNDE ENCONTRARNOS ================== */}
      <section className="locations-section">
        <div className="centered-header-block">
          <h2 className="centered-title">¿Dónde encontrarnos?</h2>
          <p className="centered-subtitle">
            Visítanos en nuestras tiendas y sumérgete en el mundo de Auka. Un espacio para conectar,
            aprender y descubrir el poder de las hierbas.
          </p>
        </div>

        <div className="locations-grid">
          {/* TIENDA 1: PALERMO */}
          <div className="location-card">
            <img 
              src="https://placehold.co/600x400/2e4a3d/FFFFFF?text=Hojas+Menta" 
              alt="Hojas verdes frescas" 
              className="location-image" 
            />
            <div className="location-details">
              <h3 className="location-name">Tienda Palermo</h3>
              
              <div className="location-info-row">
                <span>📍</span>
                <p>Av. Santa Fe 3253, CABA</p>
              </div>
              
              <div className="location-info-row">
                <span>🕒</span>
                <p>Lunes a Sábado: 10am - 8pm</p>
              </div>

              <a href="#mapa-palermo" className="map-link">Ver en mapa</a>
            </div>
          </div>

          {/* TIENDA 2: SAN TELMO */}
          <div className="location-card">
            <img 
              src="https://placehold.co/600x400/4a4a6a/FFFFFF?text=Lavanda" 
              alt="Flores de lavanda" 
              className="location-image" 
            />
            <div className="location-details">
              <h3 className="location-name">Tienda San Telmo</h3>
              
              <div className="location-info-row">
                <span>📍</span>
                <p>Defensa 961, CABA</p>
              </div>
              
              <div className="location-info-row">
                <span>🕒</span>
                <p>Martes a Domingo: 11am - 7pm</p>
              </div>

              <a href="#mapa-santelmo" className="map-link">Ver en mapa</a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutUs;