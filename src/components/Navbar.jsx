import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavbarBT from 'react-bootstrap/Navbar';

function Navbar({cantidadCarrito}) {
    return (
        <NavbarBT bg="dark" variant="dark" expand="lg" className="shadow-sm">
            <Container>
                <NavbarBT.Brand as={Link} to="/" className="fw-bold text-warning">
                    🎮 Retro Gaming
                </NavbarBT.Brand>

                <NavbarBT.Toggle aria-controls="basic-navbar-nav" />

                <NavbarBT.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to={"/Nosotros"}>Nosotros</Nav.Link>
                        <Nav.Link as={Link} to={"/"}>Inicio</Nav.Link>
                        <Nav.Link as={Link} to={"/productos"}>Catálogo</Nav.Link>
                        <Nav.Link as={Link} to={"/carrito"} className='d-flex align-items-center'>
                        Carrito🛒
                        {cantidadCarrito > 0 && (
                            <div className="rounded-circle bg-success text-white d-flex align-items-center justify-content-center"
                            style={{ 
                                width: '20px', 
                                height: '20px' 
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

export default Navbar;