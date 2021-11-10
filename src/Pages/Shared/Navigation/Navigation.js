import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from "../../../images/logo.png";

const Navigation = () => {
    return (
      <div>
        <Navbar collapseOnSelect expand="lg" bg="light" sticky="top">
          <>
            <Link to="/">
              <img style={{ width: 180, paddingLeft:"15px" }} src={logo} alt="logo" />
            </Link>
            <Navbar.Toggle aria-controls="offcanvasNavbar" />
            <Navbar.Collapse className="justify-content-end">
              <Nav.Link as={Link} to="/home" className="fw-bold text-black ">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/explore" className="fw-bold text-black">
                Explore
              </Nav.Link>
              <Nav.Link as={Link} to="/contact" className="fw-bold text-black">
                Contact
              </Nav.Link>
            </Navbar.Collapse>
          </>
        </Navbar>
      </div>
    );
};

export default Navigation;