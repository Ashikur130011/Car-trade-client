import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table, Button } from 'react-bootstrap';
import useAuth from '../../../Hook/useAuth';

const MyOrders = () => {
     const [orders, setOrders] = useState([]);
     const [spinner, setSpinner] = useState(true);
     const { user } = useAuth();

     useEffect(() => {
       setSpinner(true);
       fetch(`https://stormy-coast-87051.herokuapp.com/orders/${user.email}`)
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
      <div className="w-75 mx-auto">
        <h1>My Orders</h1>
        <Table responsive striped bordered hover variant="primary">
          <thead>
            <tr>
              <th>Name</th>
              <th>Car Model</th>
              <th>Car Brand</th>
              <th>Order Date</th>
              <th>Status</th>
              <th>Cancel Order</th>
            </tr>
          </thead>
          {orders.map((order, index) => (
            <tbody key={index}>
              <tr>
                <td>{order.Name}</td>
                <td className="fw-bold">{order.model}</td>
                <td>{order.brand}</td>
                <td>{order.Date}</td>
                <td className="fw-bold">{order.status}</td>
                <td>
                  <Button onClick={() => bookingCancel(order._id)}>
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

export default MyOrders;