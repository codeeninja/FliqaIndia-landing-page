import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function HeaderNav() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <div className="row">
  <div className="col-auto align-self-center">
    <img
      className="img-fluid"
      src="FliqaIndia-Logo 1.png"
      alt=""
      style={{ maxHeight: '160px',marginLeft: '-60px' }}
    />
  </div>
</div>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="ml-auto">
        <Nav.Link style={{ color: 'white', marginRight: '9%' }} href="#">Home</Nav.Link>
        <Nav.Link style={{ color: 'white', marginRight: '9%' }} href="#">Services</Nav.Link>
        <Nav.Link style={{ color: 'white', marginRight: '9%' }} href="#">Portfolio</Nav.Link>
        <Nav.Link style={{ color: 'white', marginRight: '9%' }} href="#">Community</Nav.Link>
        <Nav.Link style={{ color: 'white', marginRight: '9%' }} href="#">Blog</Nav.Link>
      </Nav>
    </Navbar.Collapse>
    <button className="landingbtn">Sign up</button>
    <button className="landingbtn">Sign in</button>
  </Container>
</Navbar>
    </div>
  )
}
