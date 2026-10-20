import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavbarBT from 'react-bootstrap/Navbar';

function Navbar() {
    return (
        <NavbarBT bg="dark" variant="dark" expand="lg" className="shadow-sm">
            <Container>
                <NavbarBT.Brand as={Link} to="/" className="fw-bold text-warning">
                    🎮 Retro Gaming
                </NavbarBT.Brand>

                <NavbarBT.Toggle aria-controls="basic-navbar-nav" />

                <NavbarBT.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to={"/"}>Inicio</Nav.Link>
                        <Nav.Link as={Link} to={"/productos"}>Catalogo</Nav.Link>
                        <Nav.Link as={Link} to={"/carrito"}>Carrito</Nav.Link>
                        <Nav.Link as={Link} to={"/contacto"}>Contacto</Nav.Link>
                    </Nav>
                </NavbarBT.Collapse>
            </Container>
        </NavbarBT>
    );
}

export default Navbar;