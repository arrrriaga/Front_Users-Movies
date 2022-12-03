import { useContext } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { UserContext } from "../context/UserContext";

import { Link } from "react-router-dom";

const NavComponent = () => {
  const { user: token } = useContext(UserContext);
  const publicRoutes = [
    <Nav.Link as={Link} to="/registro" key={0}>
      Registro
    </Nav.Link>,
    <Nav.Link as={Link} to="/login" key={1}>
      Login
    </Nav.Link>,
  ];
  const privateRoutes = [
    <Nav.Link as={Link} to="/about" key={0}>
      About
    </Nav.Link>,
    <Nav.Link as={Link} to="/peliculas" key={1}>
      Peliculas
    </Nav.Link>,
  ];

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/" key={0}>
            Home
          </Nav.Link>
          {token ? privateRoutes : publicRoutes}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavComponent;
