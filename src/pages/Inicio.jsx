import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

export const Inicio = () => {
  return (
    <div className="text-light min-vh-100 py-4" style={{ backgroundColor: '#1e1f1e', color: '#fff' }}>
      <h1 className="text-center fw-bold text-warning mb-4"> 🎮 Retro gaming </h1>

        <Carousel className="mb-5 shadow rounded overflow-hidden">
        <Carousel.Item>
          <img src="/images/banners/mario.jpg" alt="Crash Bandicoot 3" style={{ objectFit: 'contain', width: '100%', height: '400px'}}/>
        </Carousel.Item>
      
        <Carousel.Item>
          <img src="/images/banners/zelda.jpg"alt="Super Mario 64"style={{ objectFit: 'contain',width: '100%', height: '400px' }}/>
        </Carousel.Item>
  
        <Carousel.Item>
          <img src="/images/banners/crash.jpg" alt="Zelda Ocarina of Time"style={{ objectFit: 'contain', width: '100%', height: '400px' }}/>
        </Carousel.Item>
      </Carousel>
      {/*Acá capaz poner más imágenes????*/}

      <Container>
      <div className="text-center my-5">
        <h2 className="fw-bold text-light text-uppercase mb-3">La mejor tienda de juegos retro en Argentina</h2>
        <p className="text-secondary mx-auto" style={{ maxWidth: '800px' }}>
          Somos una tienda en línea de juegos, consolas, accesorios retro ¡y mucho más! Siempre brindando la mejor atención y servicio a todos nuestros clientes, que además se benefician de promociones cada mes.
        </p>
      </div>

      <Row className="align-items-center g-4 my-5">
        <Col md={6}>
            <div style={{ 
                position: 'relative', 
                width: '100%', 
                height: '320px', 
                borderRadius: '12px', 
                overflow: 'hidden', 
                boxShadow: '0 4px 10px rgba(0,0,0,0.5)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <img src="/images/games/DonkeyKongCountry.jpg" alt="Donkey Kong Country" style={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'cover'
                  }}
                />
              <div style={{ 
                  position: 'absolute', 
                  backgroundColor: 'rgba(0, 0, 0, 0.58)', 
                  padding: '1rem 1.5rem', 
                  borderRadius: '10px',
                  maxWidth: '85%',
                  textAlign: 'center',
                  border: '1px solid rgba(0, 0, 0, 0.38)',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.38)' 
              }}>
                {/*Este capaz ponerle alguna fuente de google fonts que sea como de pixeles*/}
              <p className="text-white fw-bold text-uppercase fs-5 m-0"> 
                Elegí, pagá, y recibí tus juegos sin moverte de tu casa.
              </p>
            </div>
          </div>
        </Col>

        <Col md={6} className="d-flex flex-column align-items-center justify-content-center text-center gap-3">
          <h2 className="fw-bold text-uppercase fs-4 text-light m-0">Conseguí los juegos que siempre buscaste</h2>
            <p className="text-secondary m-0" style={{ lineHeight: '1.6' }}>
              En Retro Gaming vas a encontrar todos los juegos, consolas, y accesorios retro y de colección que siempre buscaste a precios accesibles y desde la comodidad de tu casa.
            </p>

            <div className='d-flex align-items-center justify-content-center gap-2 mt-3'>
              <img src="/images/misc/pacman-gif.gif" alt="Pacman" style={{ width: '50px', height: '50px', objectFit: 'contain'}} />
              <Button as={Link} to="/productos" variant ="warning" className="fw-bold text-dark px-4 py-2 rounded-pill shadow-sm">Ver catálogo</Button>
              <img src="/images/misc/teal-pacman-ghost-gif.gif" alt="Fantasma" style={{ width: '45px', height: '45px', objectFit: 'contain'}} />
              <img src="/images/misc/yellow-pacman-ghost-gif.gif" alt="Fantasma" style={{ width: '45px', height: '45px', objectFit:'contain'}} />
            </div>
          </Col>
      </Row>
      
      </Container>
    </div>
  );
};

export default Inicio;