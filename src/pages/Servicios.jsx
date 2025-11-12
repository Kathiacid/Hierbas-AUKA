import React, { useState } from 'react';
import './Servicios.css'; // Un CSS nuevo para esta página

// --- Datos de Ejemplo (basados en tu imagen) ---
const productosMedicinales = [
  {
    id: 1,
    nombre: 'Manzanilla Orgánica',
    precio: '12.50',
    imagen: 'https://i.imgur.com/gPjYQZp.jpeg',
    badge: { texto: 'Nuevo', tipo: 'nuevo' }
  },
  {
    id: 2,
    nombre: 'Raíz de Valeriana',
    precio: '15.00',
    imagen: 'https://i.imgur.com/L1n7Y9q.png',
    badge: null
  },
  {
    id: 3,
    nombre: 'Menta Piperita',
    precio: '10.00',
    imagen: 'https://i.imgur.com/W2Cq4A3.jpeg',
    badge: { texto: 'En Oferta', tipo: 'oferta' }
  },
  {
    id: 4,
    nombre: 'Lavanda',
    precio: '14.00',
    imagen: 'https://i.imgur.com/T0bS1mB.jpeg',
    badge: null
  },
  {
    id: 5,
    nombre: 'Ginseng',
    precio: '22.00',
    imagen: 'https://i.imgur.com/rX8oY9f.jpeg',
    badge: null
  },
  {
    id: 6,
    nombre: 'Jengibre',
    precio: '9.50',
    imagen: 'https://i.imgur.com/7YfG9Y9.jpeg',
    badge: null
  },
  {
    id: 7,
    nombre: 'Cúrcuma',
    precio: '11.50',
    imagen: 'https://i.imgur.com/qO4Y4Yn.jpeg',
    badge: null
  },
  {
    id: 8,
    nombre: 'Equinácea',
    precio: '18.00',
    imagen: 'https://i.imgur.com/pYqO4G8.jpeg',
    badge: null
  },
];

export default function Medicinal() {
  const [filtroActivo, setFiltroActivo] = useState('Todo');

  return (

    <div class="servicios-container">
        <div class="servicio-card">
        <img src="https://i.imgur.com/f39FBrE.jpeg" alt="Sesiones de Reiki" class="servicio-img" />
        <div class="servicio-body">
            <h3>Sesiones de Reiki</h3>
            <p>Encuentra tu equilibrio energético y reduce el estrés a través de la canalización de energía universal.</p>
        </div>
        <button class="contactar-btn">
            <i class="fas fa-envelope"></i> Contactar
        </button>
        </div>

        <div class="servicio-card">
        <img src="https://i.imgur.com/McB4fjK.png" alt="Masajes Terapéuticos" class="servicio-img" />
        <div class="servicio-body">
            <h3>Masajes Terapéuticos</h3>
            <p>Libera tensiones musculares y promueve la relajación profunda con nuestras técnicas de masaje personalizadas.</p>
        </div>
        <button class="contactar-btn">
            <i class="fas fa-envelope"></i> Contactar
        </button>
        </div>

        <div class="servicio-card">
        <img src="https://i.imgur.com/N6lfU2z.jpeg" alt="Aromaterapia" class="servicio-img" />
        <div class="servicio-body">
            <h3>Aromaterapia</h3>
            <p>Experimenta el poder de los aceites esenciales para mejorar tu estado de ánimo y bienestar general.</p>
        </div>
        <button class="contactar-btn">
            <i class="fas fa-envelope"></i> Contactar
        </button>
        </div>
    </div>

  );
}
