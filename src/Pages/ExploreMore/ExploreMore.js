import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Product from '../Product/Product';
import Navigation from '../Shared/Navigation/Navigation';

const ExploreMore = () => {
    const [products, setProducts] = useState([]);
    console.log(products);
    useEffect(() => {
      fetch("https://stormy-coast-87051.herokuapp.com/cars")
        .then((res) => res.json())
        .then((data) => {
          setProducts(data);
          
        });
    }, []);
    return (
      <div>
        <div className="container my-5">
          <Row xs={1} sm={2} md={3} className="g-3">
            {products.map((product) => (
              <Product key={product._id} product={product}></Product>
            ))}
          </Row>
        </div>
      </div>
    );
};

export default ExploreMore;