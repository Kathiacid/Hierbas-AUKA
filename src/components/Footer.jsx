// src/components/Footer.jsx

import React from 'react';
import { Link } from 'react-router-dom';
// Asegúrate de que los estilos sean importados
import './Footer.css'; 

const Footer = () => {
    return (
        <footer>
            <div className="footer-main-content">
                
                {/* Columna 1: Logo y Marca */}
                <div className="footer-column logo-column">
                    {/* Reemplaza con tu imagen o usa texto */}
                    <div className="footer-logo">
                        <img src="/ruta/a/mundo-fungi-logo.png" alt="Mundo Fungi Logo" />
                        {/* Si usas tu logo de AUKA: <img src={AukaLogo} alt="AUKA Terapias" /> */}
                    </div>
                </div>

                {/* Columna 2: Información al Cliente */}
                <div className="footer-column links-column">
                    <h3>INFORMACIÓN AL CLIENTE</h3>
                    <ul>
                        <li><i className="fas fa-circle icon-bullet"></i> <Link to="/despachos">Despachos</Link></li>
                        <li><i className="fas fa-circle icon-bullet"></i> <Link to="/glosario">Glosario</Link></li>
                        <li><i className="fas fa-circle icon-bullet"></i> <Link to="/faqs">Preguntas Frecuentes</Link></li>
                        <li><i className="fas fa-circle icon-bullet"></i> <Link to="/terminos">Términos y Condiciones</Link></li>
                        <li><i className="fas fa-circle icon-bullet"></i> <Link to="/catalogoinfo">Catálogo Informativo</Link></li>
                    </ul>
                </div>

                {/* Columna 3: Contáctenos */}
                <div className="footer-column contact-column">
                    <h3>CONTÁCTENOS</h3>
                    <div className="contact-item">
                        <i className="fas fa-map-marker-alt contact-icon"></i>
                        <p>El Molino 115, Lote A17 La Cruz <br/> Valparaíso, Chile</p>
                    </div>
                    <div className="contact-item">
                        <i className="fas fa-phone contact-icon"></i>
                        <p>+569 854 70193</p>
                    </div>
                    <div className="contact-item">
                        <i className="fas fa-envelope contact-icon"></i>
                        <p>contacto@apiyerbas.cl</p>
                    </div>
                </div>
            </div>
            
            {/* Barra Inferior de Derechos de Autor */}
            <div className="footer-bottom-bar">
                <p>AUKATERAPIAS © 2025 | TODOS LOS DERECHOS RESERVADOS | DESARROLLADO POR KAAL </p>
            </div>
        </footer>
    );
};

export default Footer;