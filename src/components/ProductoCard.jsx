import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function ProductoCard({producto, onAgregar}) {
    const [isHovered, setIsHovered] = useState(false);
    const sinStock = producto.stock === 0;

    return (
        <Card 
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className='h-100 text-light border-secondary shadow-sm' 
            style={{
                backgroundColor: '#2f3b4e', 
                color: '#fff', 
                transform: isHovered ? 'translateY(-6px) scale(1.03)' : 'translateY(0px) scale(1)'
            }}
        >
            <div 
                style={{
                    height: '220px', 
                    backgroundColor: '#2f3b4e',
                    padding: '10px'
                }} 
                className='d-flex align-item-center justify-content-center rounded-top'>
                <Card.Img
                    variant='top'
                    src={producto.imagen}
                    alt={producto.imagen}
                    style={{
                        maxHeight: '100%', 
                        maxWidth: '100%', 
                        objectFit: 'contain'
                    }}
                />
            </div>

            <Card.Body className='d-flex flex-column justify-content-between'>
                <div>
                    <Card.Title className='text-center fw-bold fs-5 mb-2'>{producto.nombre}</Card.Title>
                    <div className='text-center text-muted small mb-3'>
                        {producto.categoria.toLowerCase() !== 'consola' && (
                            <div className='mb-1 text-light fw-bold'>
                                Consola: <span className='text-light'>{producto.consola}</span>
                            </div>
                        )}
                        <div className='mb-1 text-light fw-bold'>Precio: <strong className='text-warning fs-6'>${producto.precio}</strong></div>
                        <div className='mt-1'>
                            {sinStock ? (
                                <span className='text-danger fw-bold'>Sin stock</span>
                            ) : (
                                <span className='text-success fw-bold ms-1'>Disponibles: {producto.stock}</span>
                            )}
                        </div>
                    </div>
                </div>

                <div className='d-flex gap-2 mt-2'>
                    <Link 
                        to={`/producto/${producto.id}`}
                        className="btn btn-outline-light btn-sm flex-fill text-nowrap fw-semibold px-1"
                    >
                        Ver Detalles
                    </Link>
                    <Button 
                        variant={sinStock ? "secondary" : "warning"} 
                        size='sm' className='flex-fill text-nowrap fw-bold text-dark px-1' 
                        disabled={sinStock} 
                        onClick={() => onAgregar(producto)}
                    >{sinStock ? 'No disponible' : 'Agregar'}
                    </Button>
                </div>
            </Card.Body>
        </Card>
    );
}

export default ProductoCard;