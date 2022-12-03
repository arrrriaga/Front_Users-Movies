import { useContext } from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const NavComponent = () => {
  const {
    user: { token },
  } = useContext(UserContext);
  const publicRoutes = [
    <Nav.Link as={Link} to="/login" key={0}>
      Login
    </Nav.Link>,
    <Nav.Link as={Link} to="/registro" key={1}>
      Registro
    </Nav.Link>,
  ];

  const privRoutes = [
    <Nav.Link as={Link} to="/about" key={0}>
      About
    </Nav.Link>,
    <Nav.Link as={Link} to="/peliculas" key={1}>
      Peliculas
    </Nav.Link>,
  ];

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            {token ? privRoutes : publicRoutes}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavComponent;
