import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Product = ({product}) => {
    const{_id, model, Brand, img, description, price, rating}= product;
    return (
      <div>
        <Card className="pb-3">
            <Card.Img
              style={{ height: "15rem" , width:'100%', objectFit:'cover'}}
              variant="top"
              src={img}
            />
          <Card.Body>
            <Card.Title className="border-bottom border-3 pb-1">
              Model: {model}
            </Card.Title>
            <Card.Text className="fw-bold mb-0">{Brand}</Card.Text>
            <Card.Text className="text-start">{description.slice(0, 140)}</Card.Text>
          </Card.Body>
          <div className="">
            <Link to={`/carDetails/${_id}`}>
              <Button
                variant="primary"
                className="bg-primary  text-white rounded px-4"
              >
                Check Availability
              </Button>
            </Link>
          </div>
        </Card>
      </div>
    );
};

export default Product;