import usePathName from '@/utils/hooks/usePathName';
import Image from 'next/image';
import { useState } from 'react';
import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';

import styles from './navbar.module.scss';
const NavBar = () => {
  const currentPath = usePathName();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Navbar
      className={styles.customNavbar + ' p-0 position-fixed top-0 w-100'}
      bg="transparent"
      expand="lg"
    >
      <Container className="g-0 px-5 px-xl-0" style={{ columnGap: '1rem' }}>
        <Navbar.Brand
          href="/"
          className="p-0 m-0 d-flex align-items-center"
          style={{ columnGap: '20px' }}
        >
          <Image
            className={styles.logo}
            src={`${process.env.NEXT_PUBLIC_CDN}images/general/logo2.png`}
            alt="Hexagon Logo"
            width={53}
            height={61}
            priority
            quality={100}
          />

          <p className={styles.textLogo + ' text-white fw-bold kalekoBold'}>
            <span className="fs-6 fs-xl-4">Hexagon</span> Studio
          </p>
        </Navbar.Brand>

        <Navbar.Toggle className={styles.toggler} onClick={handleShow} />
        <Nav
          className="d-none d-lg-flex align-items-center"
          style={{ columnGap: '2rem', rowGap: '2rem' }}
        >
          <Nav.Link className="position-relative p-0 text-lg-white" href="/">
            Inicio
            {currentPath === '/' ? (
              <div className={styles.locationDecorator}></div>
            ) : null}
          </Nav.Link>
          <Nav.Link
            className="position-relative p-0 text-lg-white"
            href="/proyectos"
          >
            Proyectos
            {currentPath === '/proyectos' ? (
              <div className={styles.locationDecorator}></div>
            ) : null}
          </Nav.Link>
          <Nav.Link
            className="position-relative p-0 text-lg-white"
            href="/servicios"
          >
            Servicios
            {currentPath === '/servicios' ? (
              <div className={styles.locationDecorator}></div>
            ) : null}
          </Nav.Link>
          <Nav.Link
            className={
              styles.contactNavLink +
              ' text-lg-white ' +
              (currentPath === '/contacto' && styles.currentPath)
            }
            href="/contacto"
          >
            <p
              className="lh-1 m-0"
              style={{
                transform: 'skewX(20deg)',
              }}
            >
              Contacto
            </p>

            {currentPath === '/contacto' ? (
              <div
                // className={styles.locationDecorator}
                style={{
                  transform:
                    'translateX(-50%) skewX(20deg) rotate(-45deg)  !important',
                }}
              ></div>
            ) : null}
          </Nav.Link>
        </Nav>
        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton></Offcanvas.Header>
          <Offcanvas.Body>
            <Nav
              className="align-items-center"
              style={{ columnGap: '2rem', rowGap: '2rem' }}
            >
              <Nav.Link
                className="position-relative p-0 text-lg-white"
                href="/"
              >
                Inicio
                {currentPath === '/' ? (
                  <div className={styles.locationDecorator}></div>
                ) : null}
              </Nav.Link>
              <Nav.Link
                className="position-relative p-0 text-lg-white"
                href="/proyectos"
              >
                Proyectos
                {currentPath === '/proyectos' ? (
                  <div className={styles.locationDecorator}></div>
                ) : null}
              </Nav.Link>
              <Nav.Link
                className="position-relative p-0 text-lg-white"
                href="/servicios"
              >
                Servicios
                {currentPath === '/servicios' ? (
                  <div className={styles.locationDecorator}></div>
                ) : null}
              </Nav.Link>
              <Nav.Link
                className={
                  styles.contactNavLink +
                  ' text-lg-white ' +
                  (currentPath === '/contacto' &&
                    styles.currentPath + ' text-white')
                }
                href="/contacto"
              >
                <p
                  className="lh-1 m-0"
                  style={{
                    transform: 'skewX(20deg)',
                  }}
                >
                  Contacto
                </p>

                {currentPath === '/contacto' ? (
                  <div
                    // className={styles.locationDecorator}
                    style={{
                      transform:
                        'translateX(-50%) skewX(20deg) rotate(-45deg)  !important',
                    }}
                  ></div>
                ) : null}
              </Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Offcanvas>
      </Container>
    </Navbar>
  );
};

export default NavBar;
