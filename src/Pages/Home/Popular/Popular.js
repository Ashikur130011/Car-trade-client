import React from 'react';
import { Accordion, Row } from 'react-bootstrap';
import './Popular.css'

const Popular = () => {
    return (
      <div className="pt-3 popular-bg">
        <Accordion className="container">
          <h1 className="fw-bold text-start mb-3">Popular Searches</h1>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Popular new cars for sale</Accordion.Header>
            <Accordion.Body>
              <Row>
                <div className="col-md-4 text-start text-warning fw-bold">
                  <li>2021 Toyota Highlander for sale</li>
                  <li>2021 Toyota Tacoma for sale</li>
                  <li>2021 Toyota Camry for sale</li>
                </div>
                <div className="col-md-4 text-start text-success fw-bold">
                  <li>2021 Ford F-150 for sale</li>
                  <li>2020 Ford F-150 for sale</li>
                  <li>2021 Ford G-150 for sale</li>
                </div>
                <div className="col-md-4 text text-start text-primary fw-bold">
                  <li>2021 Jeep Wrangler Unlimited for sale</li>
                  <li>2021 Chevrolet Silverado 1500 for sale</li>
                  <li>2021 Jeep Grand Cherokee for sale</li>
                </div>
              </Row>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Popular used cars for sale</Accordion.Header>
            <Accordion.Body>
              <Row>
                <div className="col-md-4 text-start text-warning fw-bold">
                  <li>2021 Toyota Highlander for sale</li>
                  <li>2021 Toyota Tacoma for sale</li>
                  <li>2021 Toyota Camry for sale</li>
                </div>
                <div className="col-md-4 text-start text-primary fw-bold">
                  <li>2021 Ford F-150 for sale</li>
                  <li>2020 Ford F-150 for sale</li>
                  <li>2021 Ford G-150 for sale</li>
                </div>
                <div className="col-md-4 text text-start text-success fw-bold">
                  <li>2021 Jeep Wrangler Unlimited for sale</li>
                  <li>2021 Chevrolet Silverado 1500 for sale</li>
                  <li>2021 Jeep Grand Cherokee for sale</li>
                </div>
              </Row>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              Research popular new cars for sale
            </Accordion.Header>
            <Accordion.Body>
              <Row>
                <div className="col-md-4 text-start text-primary fw-bold">
                  <li>2021 Toyota Highlander for sale</li>
                  <li>2021 Toyota Tacoma for sale</li>
                  <li>2021 Toyota Camry for sale</li>
                </div>
                <div className="col-md-4 text-start text-warning fw-bold">
                  <li>2021 Ford F-150 for sale</li>
                  <li>2020 Ford F-150 for sale</li>
                  <li>2021 Ford G-150 for sale</li>
                </div>
                <div className="col-md-4 text text-start text-success fw-bold">
                  <li>2021 Jeep Wrangler Unlimited for sale</li>
                  <li>2021 Chevrolet Silverado 1500 for sale</li>
                  <li>2021 Jeep Grand Cherokee for sale</li>
                </div>
              </Row>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>
              Research popular used cars for sale
            </Accordion.Header>
            <Accordion.Body>
              <Row>
                <div className="col-md-4 text-start text-primary fw-bold">
                  <li>2021 Toyota Highlander for sale</li>
                  <li>2021 Toyota Tacoma for sale</li>
                  <li>2021 Toyota Camry for sale</li>
                </div>
                <div className="col-md-4 text-start text-success fw-bold">
                  <li>2021 Ford F-150 for sale</li>
                  <li>2020 Ford F-150 for sale</li>
                  <li>2021 Ford G-150 for sale</li>
                </div>
                <div className="col-md-4 text text-start text-warning fw-bold">
                  <li>2021 Jeep Wrangler Unlimited for sale</li>
                  <li>2021 Chevrolet Silverado 1500 for sale</li>
                  <li>2021 Jeep Grand Cherokee for sale</li>
                </div>
              </Row>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    );
};

export default Popular;