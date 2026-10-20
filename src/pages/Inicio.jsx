import { Link } from 'react-router-dom';

export const Inicio = () => {
  return (
    <section>
      <div>
        <h1>TIENDA DE VIDEOJUEGOS</h1>
      </div>
      {/* Este es el carrousel de imágenes pero las agrego después, lo pongo para tener la estructura pero NO TIENE NADA*/}
      <div>
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
      </div>

      <div>
        <h1>Tienda de juegos y consolas retro en Argentina</h1>
        <p>Somos una tienda en línea de juegos, consolas, accesorios retro y mucho más siempre brindando la mejor atención y servicio a todos nuestros clientes que además se benefician de promociones cada mes!
        </p>
      </div>

      <div>
        <img src="" alt="" /> {/* Esta es la imagen que va del lado izquierdo y dice este texto*/}
          <p>ELEGÍ, PAGÁ Y RECIBÍ TUS JUEGOS SIN MOVERTE DE TU CASA.</p>
      </div>

      <div>
        <h2>CONSEGUÍ LOS JUEGOS QUE SIEMPRE BUSCASTE</h2>
        <p>
            En Tienda de Videojuegos, vas a encontrar todos los juegos, consolas y accesorios retro y de colección que siempre buscaste a precios accesibles y desde la comodidad de tu casa. 
        </p>
        {/* Este va a ser el botón*/}
        <Link to="/productos">  
            Ver catálogo
          </Link>
      </div>
    </section>
  );
};

export default Inicio;