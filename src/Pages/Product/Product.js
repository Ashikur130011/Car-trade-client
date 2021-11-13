import React from 'react';
import { Button, Card } from 'react-bootstrap';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';
import './Product.css'

const Product = ({product}) => {
    const{_id, model, Brand, img, description, rating}= product;
    return (
      <div className=" pro_card">
        <Card className="pb-3">
          <Card.Img
            style={{ height: "15rem", width: "100%", objectFit: "cover" }}
            variant="top"
            src={img}
          />
          <Card.Body>
            <Card.Title className="border-bottom border-3 pb-1">
              Model: {model}
            </Card.Title>
            <Rating
              className=" text-warning"
              initialRating={rating}
              readonly
              emptySymbol="fa fa-star"
              fullSymbol="fa fa-star"
            />
            <Card.Text className="fw-bold fs-3 text-danger mb-0">
              <i className="fas fa-car"></i> {Brand}
            </Card.Text>
            <Card.Text className="text-start">
              {description.slice(0, 160) + " ..."}
            </Card.Text>
          </Card.Body>
          <div className="">
            <Link to={`/carDetails/${_id}`}>
              <Button
                variant="primary"
                className="bg-primary  text-white rounded px-4"
              >
                Check Availability <i className="fas fa-arrow-circle-right"></i>
              </Button>
            </Link>
          </div>
        </Card>
      </div>
    );
};

export default Product;