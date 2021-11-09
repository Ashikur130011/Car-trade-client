import Dropdown from '@restart/ui/esm/Dropdown';
import React from 'react';
import { Button, Col, FloatingLabel, Form, FormControl, InputGroup, Row } from 'react-bootstrap';
import './Banner.css'


const Banner = () => {
    return (
      <div className="banner-body">
          <h1 className="my-5">Find Your Match</h1>
        <Row className="container mx-auto mt-5 w-50 bg-dark-gray g-1">
          <div className="col-md-4">
            <FloatingLabel
              controlId="floatingSelectGrid"
              label="Works with selects"
            >
              <Form.Select aria-label="Floating label select example">
                <option>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </FloatingLabel>
          </div>
          <div className="col-md-5">
            <FloatingLabel
              controlId="floatingSelectGrid"
              label="Works with selects"
            >
              <Form.Select aria-label="Floating label select example">
                <option>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </FloatingLabel>
          </div>
          <div className="col-md-2">
            <Button className="px-4 fs-4 fw-bold" variant="danger">Go</Button>{" "}
          </div>
        </Row>
      </div>
    );
};

export default Banner;