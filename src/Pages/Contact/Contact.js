import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import './Contact.css'

const Contact = () => {
    return (
      <div className="con_bg">
        <h1>Contact</h1>
        <div className="row mt-5 w-75 mx-auto">
          <div className="col-md-6">
            <h3 className="text-start">Registered and Corporate Address</h3>
            <h5 className="text-start">
              <i
                className="fas fa-car-alt text-danger"
              ></i> CarTrade Ltd
            </h5>
            <p className="text-start mb-0">
              <i
                className="far fa-address-card text-danger"
              ></i>{" "}
              760 Dane Street, Millwood, Washington
            </p>
            <p className="text-start mb-0">
              <i
                className="fas fa-globe-asia text-danger"
              ></i>{" "}
              text-black United States
            </p>
            <p className="text-start">
              <i
                className="fas fa-phone-volume text-danger"
              ></i>{" "}
              509-290-3895
            </p>
          </div>
          <div className="col-md-6 mb-4">
            <Form>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
              </Row>

              <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Control placeholder="1234 Main St" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formGridAddress2">
                <Form.Control
                  as="textarea"
                  placeholder="Leave a comment here"
                  style={{ height: "100px" }}
                />
              </Form.Group>

              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridCity">
                  <Form.Label>City</Form.Label>
                  <Form.Control />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                  <Form.Label>State</Form.Label>
                  <Form.Select defaultValue="Choose...">
                    <option>Choose...</option>
                    <option>...</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridZip">
                  <Form.Label>Zip</Form.Label>
                  <Form.Control />
                </Form.Group>
              </Row>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </div>
        </div>
      </div>
    );
};

export default Contact;