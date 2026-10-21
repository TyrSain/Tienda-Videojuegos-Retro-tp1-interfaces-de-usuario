import { Link } from 'react-router-dom';

export const Nosotros = () => {
  return (
    <section>
      <h1>Sobre Nosotros</h1>

      <div>
        <h3>En Retro Gaming vivimos el gaming como vos.</h3>
        <p>
          Somos un grupo de apasionados por los videojuegos retro que decidió acompañar a la comunidad gamer ofreciendo consolas, videojuegos, accesorios, y coleccionables de las décadas de los 80, 90 y 2000 a todos los gamers de Argentina.
        </p>
      </div>
<br />
      <div>
        <h3>Nuestra Misión</h3>
        <p>
          Buscamos revivir la nostalgia y preservar la historia de los videojuegos, garantizando productos probados y de excelente calidad. Sabemos que para vos es mucho más que un hobby:es una pasión. Por eso trabajamos con compromiso, asesoramiento personalizado y la confianza de quienes buscan comprar con tranquilidad. 
        </p>
      </div>
<br />
      <div>
        <h3>¿Por qué elegirnos?</h3>
        <ul>
          <li>Productos 100% probados y garantizados.</li>
          <li>Envíos seguros a todo el país.</li>
          <li>Atención personalizada hecha por fanáticos del retro gaming.</li>
        </ul>
        <p>No solo vendemos productos; compatimos la misma pasión que nuestros clientes. </p>
      </div>
<br />
      <div>
        <Link to="/productos">Explorá nuestro  Catálogo</Link>
      </div>
    </section>
  );
};

export default Nosotros;