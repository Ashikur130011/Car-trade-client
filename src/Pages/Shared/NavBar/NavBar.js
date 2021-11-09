import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.png'

const NavBar = () => {
  //const { user, logOut } = useAuth();
    return (
      <div>
        <Navbar collapseOnSelect expand="lg" bg="light" sticky="top" >
              <Container>
                <Link to='/'>
                  <img style={{width:180}} src={logo} alt="logo" />
                </Link>
                <Navbar.Toggle aria-controls="offcanvasNavbar" />
                <Navbar.Collapse className="justify-content-end">
                <Nav.Link as={Link} to="/home" className="fw-bold text-black " >Home</Nav.Link>
                <Nav.Link as={Link} to="/explore" className="fw-bold text-black" >Explore</Nav.Link>
                <Nav.Link as={Link} to="/contact" className="fw-bold text-black" >Contact</Nav.Link>
                
                
               {/* {user?.uid&& <Nav.Link as={Link} to="/admin" className="fw-bold text-black" >Admin</Nav.Link>}
                
                <Navbar.Text className="fw-bold text-success">
                    { user?.displayName}
                </Navbar.Text>
            {  user?.photoURL &&  <div className="p-3">
                <img className=" rounded-circle" width="50"
                height="50" src={user?.photoURL} alt="" />
                </div>}

                <div>
                    {user?.email ?
                    <Button className="bg-danger border-3 border-success text-white rounded-pill" onClick={logOut} variant="success"><span className="p-1 fw-bold">Log Out</span></Button>:
                    <Nav.Link as={Link} to="/login"><span className="text-dark fw-bold">Log In</span></Nav.Link>}
                </div> */}
                </Navbar.Collapse>
              </Container>
            </Navbar>
        </div>
    );
};

export default NavBar;