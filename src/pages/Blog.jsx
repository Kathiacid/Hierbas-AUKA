import React, { useState } from 'react'; // [NUEVO] Importamos useState
import './Blog.css';

const Blog = () => {

const [selectedPost, setSelectedPost] = useState(null);

// DATOS DE EJEMPLO ACTUALIZADOS
// He añadido un campo 'fullContent' con texto de relleno largo.
const mockPosts = [
{
    id: 1,
    title: "Jengibre y Cúrcuma: El Dúo Antiinflamatorio",
    description: "La naturaleza nos ofrece poderosos aliados para combatir la inflamación. Aprende a combinar el jengibre y la cúrcuma...",
    fullContent: `
    <p>La inflamación crónica es la raíz de muchas enfermedades modernas. Afortunadamente, la naturaleza nos brinda herramientas poderosas para combatirla. El jengibre y la cúrcuma, dos raíces primas de la familia Zingiberaceae, han sido utilizadas durante siglos en la medicina ayurvédica y china.</p>
    <h3>¿Por qué funcionan?</h3>
    <p>La cúrcuma contiene curcumina, un compuesto con efectos antiinflamatorios comparables a algunos medicamentos farmacéuticos, pero sin los efectos secundarios. El jengibre, por su parte, contiene gingerol, que ayuda a reducir el estrés oxidativo y posee potentes propiedades medicinales.</p>
    <h3>Cómo consumirlos juntos</h3>
    <p>La clave para la cúrcuma es consumirla con pimienta negra, que aumenta su absorción hasta en un 2000%. Un té caliente de jengibre fresco, cúrcuma en polvo, una pizca de pimienta y miel es la forma perfecta de empezar el día.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    `,
    image: "https://placehold.co/600x800/8e9d73/FFFFFF?text=Jengibre+y+Curcuma",
    alt: "Decoración de plantas colgantes"
},
{
    id: 2,
    title: "Beneficios del Té Matcha",
    description: "Descubre por qué esta antigua bebida japonesa se ha convertido en el superalimento favorito de muchos.",
    fullContent: `
    <p>El té matcha no es solo una tendencia pasajera; es una tradición milenaria con beneficios respaldados por la ciencia. A diferencia del té verde regular, donde infusionas las hojas y luego las desechas, con el matcha estás consumiendo la hoja entera pulverizada.</p>
    <h3>Energía Calma (Zenergy)</h3>
    <p>Gracias a la combinación de cafeína y L-teanina, el matcha proporciona un estado de alerta relajado que puede durar hasta 6 horas, sin los picos y caídas asociados con el café.</p>
    <p>Además, está cargado de antioxidantes, especialmente EGCG, conocido por sus propiedades protectoras contra el daño celular.</p>
    `,
    image: "https://placehold.co/600x800/f9f6e8/8e9d73?text=Te+Matcha",
    alt: "Taza de té matcha"
},
{
    id: 3,
    title: "Mindfulness para Principiantes",
    description: "En un mundo lleno de distracciones, aprender a estar presente es una habilidad vital. Te enseñamos 5 ejercicios simples.",
    fullContent: `
    <p>Mindfulness, o atención plena, es simplemente el acto de prestar atención al momento presente sin juzgar. Suena fácil, pero en nuestra cultura de hiperconexión, es un desafío radical.</p>
    <h3>Empieza por la respiración</h3>
    <p>No necesitas 30 minutos. Empieza con 3 respiraciones conscientes antes de comer, o al despertarte. Siente el aire entrar y salir. Eso es todo. Eso es mindfulness.</p>
    <p>La práctica constante reduce el estrés, mejora la concentración y aumenta la inteligencia emocional. Es el gimnasio de la mente.</p>
    `,
    image: "https://placehold.co/600x800/dcdcdc/333333?text=Mindfulness",
    alt: "Persona meditando"
}
];

// [NUEVO] Función para manejar el clic en "Leer Más"
const handleReadMore = (post) => {
setSelectedPost(post);
// Opcional: hacer scroll hacia arriba suavemente al abrir
window.scrollTo({ top: 0, behavior: 'smooth' });
};

// [NUEVO] Función para cerrar el artículo
const handleCloseArticle = () => {
setSelectedPost(null);
};


return (
// [MODIFICADO] El contenedor principal cambia de clase si hay un post seleccionado
<div className={`main-blog-wrapper ${selectedPost ? 'split-mode-active' : ''}`}>
    
    {/* Título principal (se oculta en modo dividido para ganar espacio) */}
    {!selectedPost && <h1 className="blog-title-main">Nuestro Blog</h1>}


    <div className="content-area-flex">
    
    {/* --- SECCIÓN IZQUIERDA: VISOR DEL ARTÍCULO COMPLETO --- */}
    {/* Solo se renderiza si selectedPost NO es null */}
    {selectedPost && (
        <main className="full-article-container left-panel-animation">
        <button className="close-btn" onClick={handleCloseArticle}>
            ← Volver a la lista
        </button>
        
        <article className="full-article-content">
            <img 
            src={selectedPost.image} 
            alt={selectedPost.alt} 
            className="full-article-hero-image" 
            />
            <h1 className="full-article-title">{selectedPost.title}</h1>
            {/* Usamos dangerouslySetInnerHTML para renderizar los párrafos HTML del mock data */}
            <div 
            className="article-body-text"
            dangerouslySetInnerHTML={{ __html: selectedPost.fullContent }}
            />
        </article>
        </main>
    )}


    {/* --- SECCIÓN DERECHA: LISTA DE POSTS --- */}
    {/* Esta sección siempre está presente, pero su estilo cambia en el CSS cuando está en modo sidebar */}
    <aside className={`posts-list-wrapper ${selectedPost ? 'sidebar-mode' : ''}`}>
        {mockPosts.map((post) => {
            // Opcional: Marcar visualmente el post activo en la lista derecha
            const isActive = selectedPost && selectedPost.id === post.id;

            return (
        <article key={post.id} className={`blog-card ${isActive ? 'active-card-in-list' : ''}`}>
            <div className="card-image-wrapper">
            <div className="image-background-effect">
                <img src={post.image} alt={post.alt} className="card-image" />
            </div>
            </div>
            <div className="card-content">
            <h2 className="card-title">{post.title}</h2>
            <div className="title-divider"></div>
            <p className="card-description">{post.description}</p>
            
            {/* [MODIFICADO] El botón ahora llama a handleReadMore */}
            <button 
                className="read-more-btn"
                onClick={() => handleReadMore(post)}
            >
                Leer Más
            </button>
            </div>
        </article>
        )})}
    </aside>

    </div>
</div>
);
};

export default Blog;