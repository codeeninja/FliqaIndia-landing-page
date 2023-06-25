import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

export default function HeaderNav() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <div className="justify-content-between d-flex w-100 ">
            <div className="justify-content-between d-flex">
              <div className="">
                <img
                  className="img-fluid"
                  src="FliqaIndia-Logo 1.png"
                  alt=""
                  style={{ maxHeight: "160px", marginLeft: "-60px" }}
                />
              </div>
              <div className="d-table">
                <div className="d-table-cell">
                <Navbar.Collapse  id="responsive-navbar-nav">
                  <Nav className="ml-auto">
                    <Nav.Link
                      style={{ color: "white", marginRight: "9%" }}
                      href="#"
                    >
                      Home
                    </Nav.Link>
                    <Nav.Link
                      style={{ color: "white", marginRight: "9%" }}
                      href="#"
                    >
                      Services
                    </Nav.Link>
                    <Nav.Link
                      style={{ color: "white", marginRight: "9%" }}
                      href="#"
                    >
                      Portfolio
                    </Nav.Link>
                    <Nav.Link
                      style={{ color: "white", marginRight: "9%" }}
                      href="#"
                    >
                      Community
                    </Nav.Link>
                    <Nav.Link
                      style={{ color: "white", marginRight: "9%" }}
                      href="#"
                    >
                      Blog
                    </Nav.Link>
                  </Nav>
                </Navbar.Collapse>
                </div>
              </div>
            </div>
            <div className="justify-content-between d-flex">
              <button className="landingbtn">Sign up</button>
              <button className="landingbtn">Sign in</button>
            </div>
          </div>
        </Container>
      </Navbar>
    </div>
  );
}
