import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hook/useAuth';
import logo from "../../../images/logo.png";

const Navigation = () => {
  const {user, logOut} = useAuth();
    return (
      <div className="">
        <Navbar collapseOnSelect expand="lg" bg="light" sticky="top">
          <>
            <Link to="/">
              <img
                style={{ width: 180, paddingLeft: "20px" }}
                src={logo}
                alt="logo"
              />
            </Link>
            <Navbar.Toggle aria-controls="offcanvasNavbar" />
            <Navbar.Collapse className="justify-content-end">
              <Nav.Link as={Link} to="/home" className="fw-bold text-black ">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/explore" className="fw-bold text-black">
                Explore
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/dashboard"
                className="fw-bold text-black"
              >
                Dashboard
              </Nav.Link>
              <Nav.Link as={Link} to="/contact" className="fw-bold text-black">
                Contact
              </Nav.Link>
              <Navbar.Text className="fw-bold text-success">
                {user?.displayName}
              </Navbar.Text>
              <div>
                {user.email && (
                  <img
                    src={user?.photoURL}
                    alt=""
                    className="login-user-img d-none d-lg-block rounded-circle mx-auto"
                  />
                )}
              </div>
              <div>
                {user?.email ? (
                  <Button
                    className="bg-danger text-white rounded mx-3"
                    onClick={logOut}
                    variant="success"
                  >
                    <span className="p-1 fw-bold">Log Out</span>
                  </Button>
                ) : (
                  <Nav.Link as={Link} to="/login">
                    <span className="text-dark fw-bold">Log In</span>
                  </Nav.Link>
                )}
              </div>{" "}
            </Navbar.Collapse>
          </>
        </Navbar>
      </div>
    );
};

export default Navigation;