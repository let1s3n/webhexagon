import usePathName from '@/hooks/usePathName';
import Image from 'next/image';
import { Container, Nav, Navbar } from 'react-bootstrap';

import styles from './navbar.module.scss';
const NavBar = () => {
  const currentPath = usePathName();

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
            src={`${process.env.NEXT_PUBLIC_CDN}images/general/logo2.png`}
            alt="Hexagon Logo"
            width={53}
            height={0}
            style={{ height: 'auto' }}
            priority
            quality={100}
          />

          <p
            className={
              styles.textLogo +
              (currentPath === '/' ? ' text-white' : ' text-black') +
              ' fw-bold kalekoBold'
            }
          >
            <span className="fs-6 fs-xl-4">Hexagon</span> Studio
          </p>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="align-items-center" style={{ columnGap: '32px' }}>
            <Nav.Link
              className={
                'position-relative p-0 ' +
                (currentPath === '/' ? 'text-white' : 'text-black')
              }
              href="/"
            >
              Inicio
              {currentPath === '/' ? (
                <div className={styles.locationDecorator}></div>
              ) : null}
            </Nav.Link>
            <Nav.Link
              className={
                'position-relative p-0 ' +
                (currentPath === '/' ? 'text-white' : 'text-black')
              }
              href="/proyectos"
            >
              Proyectos
              {currentPath === '/proyectos' ? (
                <div className={styles.locationDecorator}></div>
              ) : null}
            </Nav.Link>
            <Nav.Link
              className={
                'position-relative p-0 ' +
                (currentPath === '/' ? 'text-white' : 'text-black')
              }
              href="/servicios"
            >
              Servicios
              {currentPath === '/servicios' ? (
                <div className={styles.locationDecorator}></div>
              ) : null}
            </Nav.Link>
            <Nav.Link
              className={
                'position-relative border p-0 d-flex align-items-center justify-content-center ' +
                (currentPath === '/' ? 'text-white' : 'text-black')
              }
              href="/contacto"
              style={{
                marginLeft: '12px',
                width: '153px',
                height: '42px',
                borderColor: '#0059FF !important',
                transform: 'skewX(-20deg)',
              }}
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
                  className={styles.locationDecorator}
                  style={{
                    transform:
                      'translateX(-50%) skewX(20deg) rotate(-45deg)  !important',
                  }}
                ></div>
              ) : null}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
