import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function HorizontalNavBar() {
  const { auth } = useSelector((state) => state);
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const handelLogout = () => {
    dispatch.auth.logout();
    navigate("/", { replace: true });
  };
  return (
    <>
      <Navbar className="py-3" bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>

              <Nav.Link href="/counter">Counter</Nav.Link>
              <Nav.Link href="/checkout">Checkout</Nav.Link>

              <Nav.Link href="/register">Register</Nav.Link>
            </Nav>

            <Nav className="ms-auto">
              {auth.logged ? (
                <NavDropdown title="Profile" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item onClick={handelLogout}>
                    logout
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <Nav.Link href="/login">Login</Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default HorizontalNavBar;
