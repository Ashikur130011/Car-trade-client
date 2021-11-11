import React from 'react';
import { Button, FloatingLabel, Form, Row } from 'react-bootstrap';
import './HomeBanner.css'

const HomeBanner = () => {
    return (
      <div>
        <div className="banner-body">
          <h1 className="my-5">Find Your Match</h1>
          <Row className="container mx-auto mt-5 w-50 bg-dark-gray g-1">
            <div className="col-md-4">
              <FloatingLabel
                controlId="floatingSelectGrid"
                label="Works with selects"
              >
                <Form.Select aria-label="Floating label select example">
                  <option>Open this for brand menu</option>
                  <option value="1">Mercedies</option>
                  <option value="2">Audi</option>
                  <option value="4">BMW</option>
                  <option value="5">Porche</option>
                  <option value="6">Range Rover</option>
                </Form.Select>
              </FloatingLabel>
            </div>
            <div className="col-md-5">
              <FloatingLabel
                controlId="floatingSelectGrid"
                label="Works with selects"
              >
                <Form.Select aria-label="Floating label select example">
                  <option>Open this for model select</option>
                  <input type="text" name="model" />
                </Form.Select>
              </FloatingLabel>
            </div>
            <div className="col-md-2">
              <Button className="px-4 fs-4 fw-bold" variant="danger">
                Go
              </Button>{" "}
            </div>
          </Row>
        </div>
      </div>
    );
};

export default HomeBanner;