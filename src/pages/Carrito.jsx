import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import CarritoItem from '../components/CarritoItem';


function Carrito({carrito = [], onEliminar, onVaciar}) {
    const navigate = useNavigate();
    const itemCarrito = Array.isArray(carrito) ? carrito : [];

    const total = itemCarrito.reduce((acc, item) =>{
        const precioNum = Number(item.precio) || 0;
        const cantidadNum = Number(item.cantidad) || 0;
        return acc + (precioNum * cantidadNum);
     }, 0);
    
    if (carrito.length === 0) {
        return (
            <div className='text-Light min-vh-100 py-5 text-center'
            style={{
                backgroundColor: '#1e1f1e'
            }}
            >
                <Container className='my-5'>
                    <h2 className='mb-3 fw-bold'>Tu carrito esta vacio 🛒</h2>
                    <p className='text-secondary mb-4'>¡Parece que aun no sumaste ningun tesoro retro a tu coleccion!</p>
                    <Button
                        as={Link}
                        to='/productos'
                        className='fw-bold px-4 py-2 border-0'
                        style={{
                            backgroundColor: '#ff2a6d',
                            color: '#fff',
                            borderRadius: '0px',
                            boxShadow: '3px 3px 0px #110a14'
                        }}
                    >
                        Esplorar Catalogo
                    </Button>
                </Container>
            </div>
        )
    }

    return (
        <div 
            className='text-light min-vh-100 py-4'
            style={{
                backgroundColor: '#1e1f1e'
            }}
        >
            <Container className='my-4'>
                <div className='text-center mb-5'>
                    <h1 className='text-center bm-5'>Carrito de Compras</h1>
                    <p className=''>Aqui se mostraran los videojuegos seleccionados.</p>
                </div>

                <Row>
                    <Col lg={8} className='mb-4'>
                        <div className='d-flex justify-content-between align-item-center mb-3'>
                            <h4 className='text-light fw-bold m-0'>
                                Articulos ({carrito.reduce((acc, item) => acc + item.cantidad, 0)})
                            </h4>
                            <Button
                                variant='outline-danger'
                                size='sm'
                                onClick={onVaciar}
                                className='fw-bold'
                                style={{
                                    borderRadius: '0px'
                                }}
                            >
                                Vaciar Carrito
                            </Button>
                        </div>
                            
                        <div className='d-flex flex-column gap-3'>
                            {itemCarrito.map((prod) => (
                                <CarritoItem
                                    key={prod.id}
                                    producto={prod}
                                    onEliminar={onEliminar}
                                />
                            ))}
                        </div>
                    </Col>

                    <Col lg={4}>
                        <div
                            className='p-4 border border-secondary sticky-top shadow'
                            style={{
                                backgroundColor: '#212529',
                                borderRadius: '0px',
                                top: '20px'
                            }}
                        >
                            <h4 className='fw-bold mb-3 border-bottom border-secondary pb-2'>Resumen del Pedido</h4>
                            <div className='d-flex justify-content-between mb-2 text-secondary'>
                                <span>Subtotal:</span>
                                <span>${total}</span>
                            </div>
                            <div className='d-flex justify-content-between mb-3 text-secondary'>
                                <span>Envio digital / fisico:</span>
                                <span className='text-success fw-bold'>Gratis</span>
                            </div>
                            <hr className='border-secondary' />
                            <div className='d-flex justify-content-between mb-4 fs-4 fw-bold text-light'>
                                <span>Total:</span>
                                <span className='text-warning'>${total}</span>
                            </div>
                            <Button
                                className='w-100 fw-bold py-2 border-0'
                                style={{
                                    backgroundColor: '#ff2a6d',
                                    color: '#fff',
                                    borderRadius: '0px',
                                    boxShadow: '3px 3px 0px #110a14'
                                }}
                                onClick={() => navigate('/compra')}
                            >Proceder al Pago
                            </Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Carrito;