// IMPORTACIONES:
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { productos } from "./data/productos";

// Componentes estructurales y globales
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from "./components/ScrollToTop";

// Páginas de la aplicación
import Inicio from './pages/Inicio';
import Productos from './pages/Productos';
import DetalleProducto from './pages/DetalleProducto';
import Carrito from './pages/Carrito';
import Contacto from './pages/Contacto';
import Nosotros from './pages/Nosotros';

// COMPONENTE PRINCIPAL:
function App() {

  // Estado global de carrito
  const [carrito, setCarrito] = useState([]);

  // Logica del carrito
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

  const eliminarDelCarrito = (id) => {
    setCarrito(carrito.filter(item => item.id !== id))
  }

  const vaciarCarrito = () => {
    setCarrito([])
  }

  const [productosState, setProductosState] = useState(productos)

  // Logica de compra y stock
  const confirmarCompra = () => {
    const productosActualizados = productosState.map(prod => {
      const itemEnCarrito = carrito.find(item => item.id === prod.id)
      if (itemEnCarrito) {
        return {
          ...prod,
          stock: Math.max(0, prod.stock - itemEnCarrito.cantidad)
        }
      }
      return prod
    })

    setProductosState(productosActualizados)

    vaciarCarrito()
  }

  // Rutas
  return (
    <BrowserRouter>

    {/* Componente para asegurar que la vista suba al top al cambiar de ruta */}
    <ScrollToTop />

      {/* Barra de navegacion con contador de articulos en tiempo real */}
      <Navbar cantidadCarrito={cantidadTotalCarrito}/>
      <Routes>
        <Route path="/" element={<Inicio />}/>
        <Route path="/productos" element={<Productos productos={productosState} onAgregar={agregarAlCarrito} />}/>
        <Route path="/producto/:id" element={<DetalleProducto productos={productosState} onAgregar={agregarAlCarrito} />}/>
        <Route path="/carrito" element={<Carrito carrito={carrito} onEliminar={eliminarDelCarrito} onVaciar={vaciarCarrito}/>}/>
        <Route path="/Nosotros" element={<Nosotros />}/>

        {/* Rutas unificadas de contacto con la validacion del carrito vacio */}
        <Route path="/contacto" element={<Contacto 
            carritoVacio={carrito.length === 0}
            onConfirmar={confirmarCompra}
          />
        }/>
        <Route path="/compra"   element={<Contacto 
            carritoVacio={carrito.length === 0}
            onConfirmar={confirmarCompra}
          />
        }
      />
      </Routes>

      {/* Pie de pagina */}
      <Footer />
    </BrowserRouter>
  );
}

// EXPORTACION:
export default App;