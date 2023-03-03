import React from "react";
import Image from "next/image";
import { Container, Nav, Navbar } from "react-bootstrap";

const NavBar = () => {
  return (
    <Navbar className="p-0" bg="light" expand="lg">
      <Container className="g-0">
        <Navbar.Brand href="/">
          <Image
            src={`${process.env.NEXT_PUBLIC_CDN}images/logo.png`}
            alt="Hexagon Logo"
            width={53}
            height={60}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/blog">Blog</Nav.Link>
            <Nav.Link href="/graficos">Gráficos</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
