// src/App.jsx

import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Importar tus componentes de Página
import Home from './pages/home.jsx';
import Blog from './pages/Blog.jsx';
import Medicinal from './pages/Medicinal.jsx';
import SobreNosotros from './pages/SobreNosotros.jsx';
import Cosmetica from './pages/Cosmetica.jsx'; 
import ProductoDetalle from './pages/ProductoDetalle.jsx'; 

// 🚨 Asegúrate de que Navbar y Footer existan en tu carpeta components
import Navbar from './components/Navbar.jsx'; 
import Footer from './components/Footer.jsx'; 

function App() {
  return (
    <BrowserRouter>

      <main>
        <Routes>
          {/* Todas tus rutas van aquí */}
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/medicinal" element={<Medicinal />} />
          <Route path="/cosmetica" element={<Cosmetica />} />
          <Route path="/sobrenosotros" element={<SobreNosotros />} />
          <Route path="/producto/:id" element={<ProductoDetalle />} /> 
          <Route path="*" element={<h1>404: Página no encontrada</h1>} />
        </Routes>
      </main>

      {/* 2. FOOTER: Visible en todas las páginas (va después de <main>) */}
      <Footer /> 
    </BrowserRouter>
  );
}

export default App;