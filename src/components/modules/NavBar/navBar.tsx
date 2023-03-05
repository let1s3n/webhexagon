import React from "react";
import Image from "next/image";
import { Container, Nav, Navbar } from "react-bootstrap";
import styles from "./navbar.module.scss";
const NavBar = () => {
  return (
    <Navbar
      className={styles.customNavbar + " p-0 position-fixed top-0 w-100"}
      bg="transparent"
      expand="lg"
    >
      <Container className="g-0 px-5 px-xl-0" style={{ columnGap: "1rem" }}>
        <Navbar.Brand href="/" className="p-0 m-0">
          <Image
            src={`${process.env.NEXT_PUBLIC_CDN}images/logo.png`}
            alt="Hexagon Logo"
            width={53}
            height={60}
          />
          {/* <p className={styles.logoText}>Hexagon Studio</p> */}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link className="text-white" href="/">
              Inicio
            </Nav.Link>
            <Nav.Link className="text-white" href="/proyectos">
              Proyectos
            </Nav.Link>
            <Nav.Link className="text-white" href="/servicios">
              Servicios
            </Nav.Link>
            <Nav.Link className="text-white" href="/contacto">
              Contacto
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
