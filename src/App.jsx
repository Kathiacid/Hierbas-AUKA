
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home.jsx';
import Blog from './pages/Blog.jsx';
import Medicinal from './pages/Medicinal.jsx';
import SobreNosotros from './pages/SobreNosotros.jsx';
import Cosmetica from './pages/Cosmetica.jsx'; 
import ProductoDetalle from './pages/DetalleProducto.jsx'; 
import Servicios from './pages/Servicios.jsx';
import Navbar from './components/Navbar.jsx'; 
import Footer from './components/Footer.jsx'; 
import Busqueda from './pages/Busqueda.jsx';
import { CartProvider } from './components/CartContext.jsx';
import ScrollToTop from './components/ScrollToTop.jsx'

function App() {
  return (
    <CartProvider>
    <BrowserRouter>
    <ScrollToTop />
    <Navbar/>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/medicinal" element={<Medicinal />} />
          <Route path="/cosmetica" element={<Cosmetica />} />
          <Route path="/sobrenosotros" element={<SobreNosotros />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/producto/:id" element={<ProductoDetalle />} /> 
          <Route path="*" element={<h1>404: Página no encontrada</h1>} />
          <Route path="/busqueda" element={<Busqueda />}/>
        </Routes>
      </main>
      <Footer /> 
    </BrowserRouter>
    </CartProvider>
  );
}

export default App;