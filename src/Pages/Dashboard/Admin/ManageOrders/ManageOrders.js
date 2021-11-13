import axios from "axios";
import React, { useEffect, useState } from "react";
import { Alert, Button, Form, Table } from "react-bootstrap";
import useAuth from "../../../../Hook/useAuth";

const ManageOrders = () => {
  const [orders, setOrders] = useState([]);
  const [spinner, setSpinner] = useState(true);
  const [getStatus, setGetStatus] = useState("");
  const [success, setSuccess] = useState({})
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
  //console.log(orders);

  const handleStatus = (e) => {
    setGetStatus(e.target.value);
  };

  const handleStatusSubmit = (id) => {
    const values = { getStatus };
    // console.log(values);
    fetch(`https://stormy-coast-87051.herokuapp.com/orders/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(values),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setSuccess(data);
      });
  };

  const orderCancel = (id) => {
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
    <div className="">
      {/* <h1>All Orders</h1>
      {success.status === "Approve"&& <Alert variant="success">Order Approved !</Alert>}
      {success.status === "Cancel"&& <Alert variant="success">Order Canceled !</Alert>} */}
    {success.status && <Alert variant="success"> Order {success.status}! </Alert>}
      <Table responsive striped bordered hover variant="primary">
        <thead>
          <tr>
            <th>Name</th>
            <th>Car Model</th>
            <th>Order Date</th>
            <th>price</th>
            <th>Status</th>
            <th>Cancel Order</th>
          </tr>
        </thead>
        {orders.map((order, index) => (
          <tbody key={index}>
            <tr>
              <td>{order.Name}</td>
              <td>{order.model}</td>
              <td>{order.Date}</td>
              <td>{order.price}</td>
              <td className="d-flex">
                <Form.Select
                  onChange={handleStatus}
                  className="w-50 mx-auto"
                  aria-label="Default select example"
                >
                  <option>{order.status}</option>
                  <option value="Pending">Pending</option>
                  <option value="Approve">Approve</option>
                  <option value="Cancel">Cancel</option>
                </Form.Select>

                <button onClick={() => handleStatusSubmit(order._id)}>
                  <i className="far fa-check-square"></i>
                </button>
              </td>
              <td>
                <Button onClick={() => orderCancel(order._id)}>Cancel</Button>
              </td>
            </tr>
          </tbody>
        ))}
      </Table>
    </div>
  );
};

export default ManageOrders;
