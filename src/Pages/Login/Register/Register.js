import React, { useState } from "react";
import { Alert, Button, Form, NavLink, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../../Hook/useAuth";

const Register = () => {
  const [loginData, setLogInData] = useState({});
  const {registerUser, isLoading, user, authError} = useAuth();

  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newData = { ...loginData };
    newData[field] = value;
    setLogInData(newData);
  };
  const handleLoginSubmit = (e) => {
    if(loginData.password !== loginData.password1){
        alert('Password did not match')
    }
    registerUser(loginData.email, loginData.password)
    e.preventDefault();
  };
  return (
    <div className="container">
      <h1>Register</h1>
      {!isLoading && (
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
            <Form.Label>Your Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleOnChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password1"
              onChange={handleOnChange}
            />
          </Form.Group>
          <Button className="w-25" variant="primary" type="submit">
            Submit
          </Button>
          <NavLink as={Link} to="/login">
            <Button style={{ textDecoration: "none" }} variant="link">
              ALREADY HAVE AN ACCOUNT? PLEASE LOGIN HERE
            </Button>
          </NavLink>
          {isLoading && <Spinner animation="border" variant="danger" />}
          {user?.email && (
            <Alert variant="success">User created Succesfully !</Alert>
          )}
          {authError && <Alert variant="success">{authError}</Alert>}
        </Form>
      )}
    </div>
  );
};

export default Register;
