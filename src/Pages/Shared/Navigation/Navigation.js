import React from 'react';
import { Button, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
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
              <Nav.Link
                as={NavLink}
                to="/home"
                style={(isActive) => ({
                  color: isActive ? "red" : "black",
                  fontWeight: "bold",
                })}
                //className="fw-bold text-black "
              >
                Home
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to="/explore"
                style={(isActive) => ({
                  color: isActive ? "red" : "black",
                  fontWeight: "bold",
                })}
              >
                Explore
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to="/dashboard"
                style={(isActive) => ({
                  color: isActive ? "red" : "black",
                  fontWeight: "bold",
                })}
              >
                Dashboard
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to="/contact"
                style={(isActive) => ({
                  color: isActive ? "red" : "black",
                  fontWeight: "bold",
                })}
              >
                Contact
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to="/about"
                style={(isActive) => ({
                  color: isActive ? "red" : "black",
                  fontWeight: "bold",
                })}
              >
                About
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