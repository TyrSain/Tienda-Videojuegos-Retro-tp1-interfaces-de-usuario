import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Inicio from './pages/Inicio';
import Productos from './pages/Productos'
import DetalleProducto from './pages/DetalleProducto';
import Carrito from './pages/Carrito';
import Contacto from './pages/Contacto';
import Nosotros from './pages/Nosotros';
import { useState } from "react";
import { productos } from "./data/productos";
import ScrollToTop from "./components/ScrollToTop";
import FormularioCompra from "./pages/FormularioCompra";

function App() {
  const [carrito, setCarrito] = useState([]);
  const agregarAlCarrito = (producto) => {
    const productoExistente = carrito.find(item => item.id === producto.id);

    if (productoExistente) {
      setCarrito(
        carrito.map(item =>
          item.id === producto.id
            ? {...item, cantidad: item.cantidad + 1}
            : item
        )
      );
    } else {
      setCarrito([...carrito, {...producto, cantidad: 1}])
    }
  }

  const cantidadTotalCarrito = carrito.reduce((total, item) => total + item.cantidad, 0)

  return (
    <BrowserRouter>
    <ScrollToTop />
      <Navbar cantidadCarrito={cantidadTotalCarrito}/>
      <Routes>
        <Route path="/" element={<Inicio />}/>
        <Route path="/productos" element={<Productos onAgregar={agregarAlCarrito} />}/>
        <Route path="/producto/:id" element={<DetalleProducto />}/>
        <Route path="/carrito" element={<Carrito />}/>
        <Route path="/contacto" element={<Contacto />}/>
        <Route path="/Nosotros" element={<Nosotros />}/>
        <Route path="/compra"   element={<FormularioCompra 
            carritoVacio={false} // Estamos simulando que el carrito no está vacío para poder mostrar el formulario
            onConfirmar={() => console.log("Confirmado")} // deberiamos pasarle el carrito y vaciarlo, pero por ahora solo mostramos un mensaje en consola
          />
        } 
      />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;