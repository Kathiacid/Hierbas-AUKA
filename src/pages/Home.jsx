import "./Home.css"; 
import { Link } from 'react-router-dom';
import ProductCarrusel from '../components/ProductCarrusel';
import ReelsCarrusel from '../components/ReelsCarrusel'; 
export default function Home() {
    return (
        <div>
            <div className="ofertas-barra">
                <div className="marquee-content">
                    <span>🛒 ¡Pregunta ya por la disponibilidad de tu producto favorito!</span>
                    <span>🔥 5% de descuento en compras sobre $30.000</span>
                    <span>🎉 Nuevos productos ya disponibles en Cosmetica.</span>
                    <span>🛒 ¡Pregunta ya por la disponibilidad de tu producto favorito!</span>
                    <span>🔥 5% de descuento en compras sobre $30.000</span>
                    <span>🎉 Nuevos productos ya disponibles en Cosmetica.</span>
                </div>
            </div>
            

            <div className="home-hero-section"> 
                
                <div className="hero-content">
                    <h1>Bienvenido a AUKA terapias</h1>
                    <p>Hierbas medicinales y cosmética natural para tu bienestar.</p>
                    <div className="button-group">
                        <button className="primary-button">Ver Cosmética</button>
                        <button className="secondary-button">Ver Medicinal</button>
                    </div>
                </div>
            </div>


            <section className="home-content">
                <h1>Conoce nuestros productos</h1>
                
                <section className='tarjetas'>
                    <div className='tarjeta-categoria' id="tarjeta1">
                        <i class="fas fa-seedling fa-2x"></i>
                        <h2>Cosmetica</h2>
                        <p>Redescubre tu belleza con el poder de la naturaleza. Nuestra línea cosmética, libre de químicos, utiliza ingredientes puros y orgánicos.</p>
                        <Link to="/catalogo-completo?categoria=cosmetica">Ver más</Link>
                    </div>
                    <div className='tarjeta-categoria' id="tarjeta2">
                        <i class="fas fa-leaf fa-2x"></i>
                        <h2>Medicinal</h2>
                        <p>Conecta con la sabiduría ancestral de la tierra. Nuestra selección medicinal ofrece remedios herbales puros, tinturas e infusiones.</p>
                        <Link to="/catalogo-completo?categoria=medicinal">Ver más</Link>
                    </div>
                    <div className='tarjeta-categoria' id="tarjeta3">
                        <i class="fas fa-users fa-2x"></i>
                        <h2>Servicios</h2>
                        <p>Tu bienestar es integral. Te invitamos a descubrir nuestros servicios terapéuticos, desde masajes descontracturantes hasta sesiones de reiki.</p>
                        <Link to="/catalogo-completo?categoria=masajes">Ver más</Link>
                    </div> 
                </section>
                
            </section>
            <section className='section2'>
                
                <div className='instagram'>

                    <div className="instagram-profile-block">
                        <a 
                            href="https://www.instagram.com/auka_terapias/?hl=es" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="instagram-button"
                        >
                            Síguenos en Instagram
                        </a>

                    </div>

                    <div className="reels-mover"> 
                        <ReelsCarrusel />
                    </div>
                </div>
                <div className='blog'>
                    <h2>Blog</h2>
                    <p>Explora nuestros últimos posts, consejos sobre bienestar, las propiedades de la cosmética natural y las hierbas medicinales.</p>
                    <Link to="/blog">Ver todo</Link>
                    
                    <div className='grid-blog'>
                        <div className='tarjeta-blog'><img src="https://totemg.cl/wp-content/uploads/2020/06/El_precio_de_la_miel_multifloral_a_granel_bajo_un_21_en_la_campana_2018_19_19420_0_1559118695.jpg" alt="Post de blog 1" /><p>Más que un simple endulzante, la miel es un botiquín natural. Es un potente antibacteriano y antiséptico, ideal para aliviar la tos o ayudar a sanar pequeñas heridas en la piel. Está cargada de antioxidantes y es una fuente de energía inmediata, siendo el combustible perfecto para tu cuerpo y un aliado para un cutis radiante.</p><Link to="/blog/post1">Ver más</Link></div>
                        <div className='tarjeta-blog'><img src="https://www.thespruce.com/thmb/BW18_nTKsHX5Sd_dm7S_ir88tjk=/4090x0/filters:no_upscale():max_bytes(150000):strip_icc()/how-to-grow-chamomile-1402627-02-crop-9b5069a36d234b089b4a8d51be686493.jpg" alt="Post de blog 2" /><p>La manzanilla es el sinónimo de calma. Es la infusión estrella para relajar el sistema nervioso, combatir la ansiedad y ayudarte a conciliar el sueño. Sus propiedades antiinflamatorias la hacen perfecta para aliviar dolores estomacales y calmar la digestión. Tópicamente, es un milagro para desinflamar la piel irritada.</p><Link to="/blog/post2">Ver más</Link></div>
                        <div className='tarjeta-blog'><img src="https://assets1.farmaciasanpablo.com.mx/landings/_blog/natural/para-que-sirve-el-poleo.jpg" alt="Post de blog 3" /><p>El poleo es el gran aliado de tu digestión. Esta hierba mentolada es un remedio tradicionalmente usado por su increíble capacidad carminativa, es decir, ayuda a eliminar gases y a reducir la hinchazón abdominal. Es la infusión perfecta después de una comida pesada para sentir una sensación inmediata de alivio y frescura.</p><Link to="/blog/post3">Ver más</Link></div>
                        <div className='tarjeta-blog'><img src="https://spacionatural.cl/cdn/shop/files/co_CC_81mo-hacer-velas-de-masaje--scaled.jpg?v=1711908220&width=2560" alt="Post de blog 4" /><p>Un masaje no es un lujo, es una necesidad para el bienestar. Más allá de la relajación profunda, sus propiedades terapéuticas son reales: descontractura los músculos, reduce los niveles de cortisol (la hormona del estrés) y mejora la circulación sanguínea. Esto ayuda a oxigenar tu cuerpo, eliminar toxinas y liberar la tensión física y mental acumulada.</p><Link to="/blog/post4">Ver más</Link></div>
                    </div>
                </div>
            </section>
                
                
            <section className='destacados'>
                <div className="carousel-destacados">
                    <ProductCarrusel/>
                </div>
            </section>
        </div>
    );
}