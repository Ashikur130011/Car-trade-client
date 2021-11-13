import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Form, Table } from 'react-bootstrap';
import useAuth from '../../../../Hook/useAuth';

const ManageProduct = () => {
    const [products, setProducts] = useState([]);
    const [spinner, setSpinner] = useState(true);
    

    const { user } = useAuth();

    useEffect(() => {
      setSpinner(true);
      fetch("https://stormy-coast-87051.herokuapp.com/cars")
        .then((res) => res.json())
        .then((data) => {
          setProducts(data);
          setSpinner(false);
        });
    }, [user.email]);
    console.log(products);


  

  const orderCancel = (id) => {
    console.log(id);
    axios
      .delete(`https://stormy-coast-87051.herokuapp.com/cars/${id}`)
      .then((res) => {
        if (res.data.deletedCount === 1) {
          const restItem = products.filter((event) => event._id !== id);
          setProducts(restItem);
          alert("Are you sure?");
        }
      });
  };

    return (
      <div className="">
        <h1>Manage Products</h1>
        <Table responsive striped bordered hover variant="primary">
          <thead>
            <tr>
              <th>Car Model</th>
              <th>Car Brand</th>
              <th>price</th>
              <th>Cancel Order</th>
            </tr>
          </thead>
          {products.map((product, index) => (
            <tbody key={index}>
              <tr>
                <td>{product.model}</td>
                <td>{product.Brand}</td>
                <td>{product.price}</td>
                <td>
                  <Button onClick={() => orderCancel(product._id)}>
                    Cancel
                  </Button>
                </td>
              </tr>
            </tbody>
          ))}
        </Table>
      </div>
    );
};

export default ManageProduct;