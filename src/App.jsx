import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Inicio from './pages/Inicio';
import Productos from './data/productos';
import DetalleProducto from './pages/DetalleProducto';
import Carrito from './pages/Carrito';
import Contacto from './pages/Contacto';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Inicio />}/>
        <Route path="/productos" element={<Productos />}/>
        <Route path="/producto/:id" element={<DetalleProducto />}/>
        <Route path="/carrito" element={<Carrito />}/>
        <Route path="/contacto" element={<Contacto />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;