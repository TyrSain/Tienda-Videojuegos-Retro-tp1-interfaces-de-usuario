// IMPORTACIONES:
import { useState } from 'react';
import ProductoCard from '../components/ProductoCard';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ButtonGroup from "react-bootstrap/ButtonGroup";

// COMPONENTE PRINCIPAL:
function Productos({productos, onAgregar}) {
    // Estado para manjear el filtro activo de categoria
    const [filtro, setFiltro] = useState('todos');

    // Logica de filtrado dinamico basado en la categoria del producto
    const productosFiltrados = productos.filter((prod) => {
        if (filtro === 'todos') return true;
        return prod.categoria.toLowerCase() === filtro.toLowerCase();
    });

    return (
        <div className='text-light min-vh-100 py-4' style={{backgroundColor: '#1e1f1e', color: '#fff'}}>
            <Container className='my-5'>

                {/* Cabecera del catalogo */}
                <div className='text-center mb-4'>
                    <h1 className='fw-bold text-light'>Catálogo de Videojuegos Retro</h1>
                    <p className='text-secondary'>Encuentra tu próximo tesoro coleccionable.</p>
                </div>

                {/* Botones de filtrado de la categoria */}
                <div className='d-flex justify-content-center gap-5 mb-5'>
                    <ButtonGroup aria-label='Filtro de categoria' className='shadow-sm'>
                        {/* Boton: Todos */}
                        <button
                            variant={filtro === 'todos' ? 'warning' : 'outline-warning'}
                            onClick={() => setFiltro('todos')}
                            className='fw-bold px-4 py-2 border-0'
                            style={{
                                backgroundColor: filtro === 'todos' ? '#ff2a6d' : '#212529',
                                color: '#fff',
                                borderRadius: '0px', // Efecto retro de esquinas rectas
                                boxShadow: filtro === 'todos' ? '3px 3px 0px #110a14' : '2px 2px 0px #110a14',
                                border: '2px solid #110a14'
                            }}
                        >🎁Todos</button>

                        {/* Boton: Videojuegos */}
                        <button
                            variant={filtro === 'juego' ? 'warning' : 'outline-warning'}
                            onClick={() => setFiltro('juego')}
                            className='fw-bold px-4 py-2 border-0'
                            style={{
                                backgroundColor: filtro === 'juego' ? '#ff2a6d' : '#212529',
                                color: '#fff',
                                borderRadius: '0px',
                                boxShadow: filtro === 'juego' ? '3px 3px 0px #110a14' : '2px 2px 0px #110a14',
                                border: '2px solid #110a14'
                            }}
                        >👾VideoJuegos</button>

                        {/* Boton: Consolas */}
                        <button
                            variant={filtro === 'consola' ? 'warning' : 'outline-warning'}
                            onClick={() => setFiltro('consola')}
                            className='fw-bold px-4 py-2 border-0'
                            style={{
                                backgroundColor: filtro === 'consola' ? '#ff2a6d' : '#212529',
                                color: '#fff',
                                borderRadius: '0px',
                                boxShadow: filtro === 'consola' ? '3px 3px 0px #110a14' : '2px 2px 0px #110a14',
                                border: '2px solid #110a14'
                            }}
                        >🕹️Consolas</button>
                    </ButtonGroup>
                </div>
                
                {/* Grilla de productos responsive */}
                <Row xs={1} sm={2} md={3} lg={4} className='g-4'>
                    {productosFiltrados.length > 0 ? (
                        productosFiltrados.map((prod) => (
                            <Col key={prod.id}>
                                <ProductoCard producto={prod} onAgregar={onAgregar} />
                            </Col>
                        ))
                    ) : (
                        // Mensaje condicional si no hay elementos en la categoria seleccionada
                        <div className='text-center text-secondary py-5 w-100'>
                            <h4>No hay productos en esta categoría todavia.</h4>
                        </div>
                    )}
                </Row>
            </Container>
        </div>
    );
}

// EXPORTACION:
export default Productos;