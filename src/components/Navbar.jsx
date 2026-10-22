// IMPORTACIONES:
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavbarBT from 'react-bootstrap/Navbar';

// COMPONENTE PRINCIPAL:
function Navbar({cantidadCarrito}) {
    return (
        // Barra de naviegacion principal (Bootstrap)
        <NavbarBT bg="dark" variant="dark" expand="lg" className="shadow-sm">
            <Container>
                {/* Logo de la tienda linkeada al inicio */}
                <NavbarBT.Brand as={Link} to="/" className="fw-bold text-warning">
                    🎮 Retro Gaming
                </NavbarBT.Brand>

                {/* Boton de hamburguesa para celulares */}
                <NavbarBT.Toggle aria-controls="basic-navbar-nav" />

                {/* Contenido colapsable de la barra de navegacion */}
                <NavbarBT.Collapse id="basic-navbar-nav">

                    {/* Lista de sectores de la pagina (Links) */}
                    <Nav className="ms-auto text-start w-100 w-lg-auto align-items-lg-center py-2 py-lg-0 gap-lg-2">
                        <Nav.Link as={Link} to={"/Nosotros"}>Nosotros</Nav.Link>
                        <Nav.Link as={Link} to={"/"}>Inicio</Nav.Link>
                        <Nav.Link as={Link} to={"/productos"}>Catálogo</Nav.Link>

                        {/* Link al Carrito con indicador de cantidad de items agregados */}
                        <Nav.Link as={Link} to={"/carrito"} className='d-inline-flex align-items-center gap-2'>
                            <span>Carrito🛒</span>
                            {cantidadCarrito > 0 && (
                                <div className="rounded-circle bg-success text-white d-flex align-items-center justify-content-center fw-bold"
                                style={{ 
                                    width: '20px', 
                                    height: '20px',
                                    fontSize: '12px'
                                }}>
                                    <span>{cantidadCarrito}</span>
                                </div>
                            )}
                        </Nav.Link>
                        <Nav.Link as={Link} to={"/contacto"}>Contacto</Nav.Link>
                    </Nav>
                </NavbarBT.Collapse>
            </Container>
        </NavbarBT>
    );
}


// EXPORTACION:
export default Navbar;