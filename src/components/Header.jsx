import { Navbar, Container, Nav } from 'react-bootstrap';
import logo from '../assets/images/logo.png';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import '../assets/styles/Header.scss';

function Header() {
  const { cartCount } = useContext(CartContext)

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <img
            src={logo}
            alt="Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/">Accueil</Nav.Link>
            <Nav.Item className="nav-link disabled">
              Panier ({cartCount})
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
