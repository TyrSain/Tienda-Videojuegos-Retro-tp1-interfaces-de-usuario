import {productos} from '../data/productos';
import ProductoCard from '../components/ProductoCard';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Productos() {
    return (
        <div className='text-light min-vh-100 py-4' style={{backgroundColor: '#1e1f1e', color: '#fff'}}>
            <Container className='my-5'>
                <div className='text-center mb-4'>
                    <h1 className='fw-bold text-light'>Catalogo de Videojuegos Retro</h1>
                    <p className='text-secondary'>Encuentra tu proximo tesoro coleccionable</p>
                </div>

                <Row xs={1} sm={2} md={3} lg={4} className='g-4'>
                    {productos.map((prod) => (
                        <Col key={prod.id}>
                            <ProductoCard producto={prod} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
}

export default Productos;