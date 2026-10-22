// IMPORTACIONES:
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

// COMPONENTE PRINCIPAL:
const Nosotros = () => {
  return (
    <section className="text-light min-vh-100 py-5" style={{ backgroundColor: '#1e1f1e', color: '#fff' }}>
      <Container>

        {/* Introduccion */}
        <div className="text-center mb-5">
          <h1 className="fw-bold ">Sobre Nosotros</h1>
          <h3>En <span className='text-warning'>Retro Gaming</span> vivimos el gaming como vos.</h3>
          <p>
          Somos un grupo de apasionados por los videojuegos retro que decidió acompañar a la comunidad gamer ofreciendo consolas, videojuegos, accesorios, y coleccionables de las décadas de los 80, 90 y 2000 a todos los gamers de Argentina.
          </p>
        </div>

      {/* Tarjetas: Mision y Beneficios */}
      <Row className="g-4 mb-5">

        {/* Tarjeta mision */}
        <Col md={6}>
          <Card className="h-100 shadow-sm" style={{ backgroundColor: '#1e1f1e', borderColor: '#1e1f1e',  color: '#fff' }}>
            <Card.Body>
              <Card.Title><h3>Nuestra Misión</h3></Card.Title>
                <Card.Text>
                  <p>Buscamos revivir la nostalgia y preservar la historia de los videojuegos, garantizando productos probados y de excelente calidad. Sabemos que para vos es mucho más que un hobby: es una pasión. Por eso trabajamos con compromiso, asesoramiento personalizado y la confianza de quienes buscan comprar con tranquilidad.
                  </p>
                </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* Tarjeta "¿Por qué elegirnos?" */}
        <Col md={6}>
          <Card className="h-100  shadow-sm" style={{ backgroundColor: '#1e1f1e', borderColor: '#1e1f1e', color: '#fff' }}>
            <Card.Body>
              <Card.Title><h3>¿Por qué elegirnos?</h3></Card.Title>
                <ul className="mb-0 d-flex flex-column gap-2 text-light list-unstyled">
                  <li>Productos 100% probados y garantizados.</li>
                  <li>Envíos seguros a todo el país.</li>
                  <li>Atención personalizada hecha por fanáticos del retro gaming.</li>
                </ul>
                <Card.Text>
                  
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Llamado a la accion del boton Ver catalogo */}
        <div className="text-center mt-4">
          <p>No solo vendemos productos; compartimos la misma pasión que nuestros clientes. </p>
          <br />
          <img src="/images/misc/mario-walking-gif.gif" alt="Pacman" style={{ width: '70px', height: '70px', objectFit: 'contain', paddingRight:'10px'}} />
          <Button as={Link} to="/productos" variant ="warning" className="fw-bold text-dark px-4 py-2 rounded-pill shadow-sm">Ver catálogo</Button>
          <img src="/images/misc/toad-mario.png" alt="Pacman" style={{ width: '50px', height: '50px', objectFit: 'contain', paddingLeft:'10px', paddingTop:'15px'}} />
        </div>
        
      </Container>
    </section>
  );
};

// EXPORTACION:
export default Nosotros;