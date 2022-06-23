// import 'bootstrap/dist/css/bootstrap.min.css'
import { Navbar, Container, Form, Offcanvas, Nav } from 'react-bootstrap'
import '../public/css/nav.css'

import Logo from '../img/logo.png'

import { Search, ListUl, Bell, Person } from 'react-bootstrap-icons'

const NavbarProduk = () => {
  return (
    <Navbar
      key="lg"
      sticky="top"
      className="shadow-sm"
      expand="lg"
      style={{ backgroundColor: 'white' }}
    >
      <Container>
        <Navbar.Brand>
          <img src={Logo} className="img-fluid my-2" alt="logo.png" />
        </Navbar.Brand>
        <Form className="ms-2 searchbar">
          <input
            class="ps-3 pe-1 inputbar my-2"
            type="search"
            placeholder="Cari di sini ..."
            aria-label="Search"
          ></input>
          <Search size={20} />
        </Form>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-lg`}
          aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
          placement="start"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
              Menu
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body className="justify-content-end">
            <Nav>
              <Nav.Link className="me-3">
                <ListUl size={22} />
              </Nav.Link>
              <Nav.Link className="me-3">
                <Bell size={22} />
              </Nav.Link>
              <Nav.Link>
                <Person size={25} />
              </Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  )
}

export default NavbarProduk
