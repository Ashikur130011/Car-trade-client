import React, { useState } from 'react';
import { Alert, Button, Form, NavLink } from 'react-bootstrap';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../Hook/useAuth';

const Login = () => {
    const [loginData, setLogInData] = useState({})
    const { logInUser, user, authError } = useAuth();
    const location = useLocation();
    const history = useHistory();
const uri =location?.state?.from||"/"
    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newData = {...loginData}
        newData[field] = value;
        setLogInData(newData)
    }
    const handleLoginSubmit = e => {
        logInUser(loginData.email, loginData.password, history, uri)
        e.preventDefault();
    }
    return (
      <div className="container">
        <h1>Login</h1>
          <Form onSubmit={handleLoginSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                onChange={handleOnChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                onChange={handleOnChange}
              />
            </Form.Group>
            <Button className="w-25" variant="primary" type="submit">
              Submit
            </Button>
            <NavLink as={Link} to="/register">
              <Button style={{ textDecoration: "none" }} variant="link">
                NEW USER? PLEASE REGISTER
              </Button>
            </NavLink>
            
          </Form>
        {user?.email && (
          <Alert variant="success">Logged in Succesfully !</Alert>
        )}
        {authError && <Alert variant="success">{authError}</Alert>}
      </div>
    );
};

export default Login;