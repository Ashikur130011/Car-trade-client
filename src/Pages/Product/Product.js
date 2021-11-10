import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Product = ({product}) => {
    const{_id, model, Brand, img, description, price, rating}= product;
    return (
      <div>
        <Card className="card-body">
          <div className="" style={{ width: "20rem", height: "auto" }}>
            <Card.Img
              style={{ height: "15rem" , width:'320px', objectFit:'cover'}}
              variant="top"
              src={img}
            />
          </div>
          <Card.Body>
            <Card.Title className="border-bottom border-3 pb-1">
              {model}
            </Card.Title>
            <Card.Text>{description.slice(0, 140)}</Card.Text>
          </Card.Body>

          <h6>{Brand}</h6>
          <div className="">
            <Link to={`/details/${_id}`}>
              <Button
                variant="primary"
                className="bg-primary  text-white rounded-pill px-4"
              >
                More Info
              </Button>
            </Link>
          </div>
        </Card>
      </div>
    );
};

export default Product;