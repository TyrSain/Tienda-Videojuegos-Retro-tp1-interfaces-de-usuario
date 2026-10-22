import { useState } from 'react';
import {productos} from '../data/productos';
import ProductoCard from '../components/ProductoCard';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ButtonGroup from "react-bootstrap/ButtonGroup";

function Productos({productos, onAgregar}) {
    const [filtro, setFiltro] = useState('todos');
    
    const productosFiltrados = productos.filter((prod) => {
        if (filtro === 'todos') return true;
        return prod.categoria.toLowerCase() === filtro.toLowerCase();
    });

    return (
        <div className='text-light min-vh-100 py-4' style={{backgroundColor: '#1e1f1e', color: '#fff'}}>
            <Container className='my-5'>
                <div className='text-center mb-4'>
                    <h1 className='fw-bold text-light'>Catalogo de Videojuegos Retro</h1>
                    <p className='text-secondary'>Encuentra tu proximo tesoro coleccionable</p>
                </div>

                <div className='d-flex justify-content-center gap-5 mb-5'>
                    <ButtonGroup aria-label='Filtro de categoria' className='shadow-sm'>
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

                <Row xs={1} sm={2} md={3} lg={4} className='g-4'>
                    {productosFiltrados.length > 0 ? (
                        productosFiltrados.map((prod) => (
                            <Col key={prod.id}>
                                <ProductoCard producto={prod} onAgregar={onAgregar} />
                            </Col>
                        ))
                    ) : (
                        <div className='text-center text-secondary py-5 w-100'>
                            <h4>No hay productos en esta categoria todavia.</h4>
                        </div>
                    )}
                </Row>
            </Container>
        </div>
    );
}

export default Productos;