import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home.jsx';
import Blog from './pages/Blog.jsx';
import Medicinal from './pages/Medicinal.jsx';
import SobreNosotros from './pages/SobreNosotros.jsx';
import Cosmetica from './pages/Cosmetica.jsx'; 
import ProductoDetalle from './pages/ProductoDetalle.jsx'; 

function App() {
  return (
    <BrowserRouter>
      {/* El Navbar se muestra en TODAS las páginas */}
      

      <main>
        <Routes>
          {/* PATHS SIMPLES */}
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/medicinal" element={<Medicinal />} />
          <Route path="/cosmetica" element={<Cosmetica />} />
          <Route path="/sobrenosotros" element={<SobreNosotros />} />

          {/* PATH DINÁMICO */}
          <Route path="/producto/:id" element={<ProductoDetalle />} /> 

          {/* Ruta 404 */}
          <Route path="*" element={<h1>404: Página no encontrada</h1>} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;