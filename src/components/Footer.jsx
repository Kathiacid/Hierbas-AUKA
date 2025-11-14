import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'; 

const Footer = () => {
    return (
        <footer>
            <div className="footer-main-content">
                
                <div className="footer-column logo-column">
                    
                    <div className="footer-logo">
                        <img src="./src/assets/profileauka.jpg" alt="Mundo Fungi Logo"/>
                        
                    </div>
                </div>

                
                <div className="footer-column links-column">
                    <h3>INFORMACIÓN AL CLIENTE</h3>
                    <ul>
                        <li><i className="fas fa-circle icon-bullet"></i> <Link to="/despachos">Entregas</Link></li>
                        <li><i className="fas fa-circle icon-bullet"></i> <Link to="/glosario">Glosario</Link></li>
                        <li><i className="fas fa-circle icon-bullet"></i> <Link to="/faqs">Preguntas Frecuentes</Link></li>
                        <li><i className="fas fa-circle icon-bullet"></i> <Link to="/terminos">Términos y Condiciones</Link></li>
                    </ul>
                </div>

                <div className="footer-column contact-column">
                    <h3>CONTÁCTENOS</h3>
                    <div className="contact-item">
                        <i className="fas fa-map-marker-alt contact-icon"></i>
                        <p>Concepción <br/> Chile</p>
                    </div>
                    <div className="contact-item">
                        <i className="fas fa-phone contact-icon"></i>
                        <p>+569 875 635</p>
                    </div>
                    <div className="contact-item">
                        <i className="fas fa-envelope contact-icon"></i>
                        <p>Aukaterapias@gmail.com</p>
                    </div>
                </div>
            </div>
            
            
            <div className="footer-bottom-bar">
                <p>AUKATERAPIAS © 2025 | TODOS LOS DERECHOS RESERVADOS | DESARROLLADO POR KAAL </p>
            </div>
        </footer>
    );
};

export default Footer;