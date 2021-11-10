import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Product from '../Product/Product';

const Products = () => {
    const [products, setProducts] = useState([]);
    console.log(products);
    useEffect(() => {
      fetch("https://stormy-coast-87051.herokuapp.com/cars")
        .then((res) => res.json())
        .then((data) => {
          setProducts(data);
          console.log(data);
        });
    }, []);
    return (
        <div className="container">
            
            <Row xs={1} sm={2} md={3} className="g-4">
                {
                    products.slice(0, 6).map(product=> <Product
                    key = {product._id}
                    product = {product}
                    ></Product>)
                }
            </Row>
        </div>
    );
};

export default Products;