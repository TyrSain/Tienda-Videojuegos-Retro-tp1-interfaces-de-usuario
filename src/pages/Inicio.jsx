import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

export const Inicio = () => {
  return (
    <section>
      <div style={{ backgroundColor: '#1a1f29', minHeight: '100vh', color: '#fff' }}>
        <h1>Retro gaming</h1>

        <Carousel >
        <Carousel.Item>
          <img src="/images/CrashBandicoot3Warped.png" alt="Crash Bandicoot 3" style={{ objectFit: 'cover' }}/>
        </Carousel.Item>
      
        <Carousel.Item>
          <img src="/images/SuperMario64.jpg"alt="Super Mario 64"style={{ objectFit: 'cover' }}/>
        </Carousel.Item>
  
        <Carousel.Item>
          <img src="/images/TheLegendofZeldaOcarinaofTime.jpg" alt="Zelda Ocarina of Time"style={{ objectFit: 'cover' }}/>
        </Carousel.Item>
      </Carousel>
      </div>
    
      
      <div>
        <h2>Tienda de juegos y consolas retro en Argentina</h2>
        <p>Somos una tienda en línea de juegos, consolas, accesorios retro y mucho más siempre brindando la mejor atención y servicio a todos nuestros clientes que además se benefician de promociones cada mes!
        </p>
      </div>

      <Container>
        <Row>
          <Col md={6}>
            <div>
              <img 
                src="/images/DonkeyKongCountry.jpg" 
                alt="Donkey Kong Country" 
                style={{ width: '100%', height: 'auto' }}
              />
              <p>Elegí, pagá y recibí tus juegos sin moverte de tu casa.</p>
            </div>
          </Col>

          <Col md={6}>
            <h2>Conseguí los juegos que siempre buscaste</h2>
            <p>
              En Tienda de Videojuegos, vas a encontrar todos los juegos, consolas y accesorios retro y de colección que siempre buscaste a precios accesibles y desde la comodidad de tu casa.
            </p>

            <div>
              <img src="/images/pacman.png" alt="Pacman" style={{ width: '30px', height: '30px' }} />
              <Link to="/productos">Ver catálogo</Link>
              <img src="/images/blue-pacman-ghost.png" alt="Fantasma" style={{ width: '30px', height: '30px' }} />
              <img src="/images/blue-pacman-ghost.png" alt="Fantasma" style={{ width: '30px', height: '30px' }} />
            </div>
          </Col>
        </Row>
      </Container>

        

      
    </section>
  );
};

export default Inicio;