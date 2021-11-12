import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import useAuth from "../../../../Hook/useAuth";

const ManageOrders = () => {
  const [orders, setOrders] = useState([]);
  const [spinner, setSpinner] = useState(true);
  const { user } = useAuth();

  useEffect(() => {
    setSpinner(true);
    fetch("https://stormy-coast-87051.herokuapp.com/orders")
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
        setSpinner(false);
      });
  }, [user.email]);
  console.log(orders);

  const bookingCancel = (id) => {
    console.log(id);
    axios
      .delete(`https://stormy-coast-87051.herokuapp.com/orders/${id}`)
      .then((res) => {
        if (res.data.deletedCount === 1) {
          const restItem = orders.filter((event) => event._id !== id);
          setOrders(restItem);
          alert("Are you sure?");
        }
      });
  };
  return (
    <div className="container">
      <h1>All Orders</h1>
      <Table striped bordered hover variant="primary">
        <thead>
          <tr>
            <th>Name</th>
            <th>Car Model</th>
            <th>Car Brand</th>
            <th>Order Date</th>
            <th>price</th>
            <th>Cancel Order</th>
          </tr>
        </thead>
        {orders.map((order, index) => (
          <tbody key={index}>
            <tr>
              <td>{order.Name}</td>
              <td>{order.model}</td>
              <td>{order.brand}</td>
              <td>{order.Date}</td>
              <td>{order.price}</td>
              <td>
                <Button onClick={() => bookingCancel(order._id)}>Cancel</Button>
              </td>
            </tr>
          </tbody>
        ))}
      </Table>
    </div>
  );
};

export default ManageOrders;
