import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Table } from 'react-bootstrap';
import { useParams } from 'react-router';
import useAuth from '../../Hook/useAuth';
import './CarDetails.css'
import { useForm } from 'react-hook-form';
import Rating from 'react-rating';

const CarDetails = () => {
    const {carId} = useParams();
    const {register, handleSubmit, reset} = useForm()
    const [product, setProduct] = useState([]);
    const [loading, isLoading] = useState(true)
    const {user} = useAuth();
    
    console.log(carId);
    useEffect( () => {
        fetch(`https://stormy-coast-87051.herokuapp.com/cars/${carId}`)
          .then((res) => res.json())
          .then((data) => {
            setProduct(data);
            console.log(data);
          });
        
    },[])

    const onSubmit = (data) => {
        console.log(data);
        data["model"] = product.model || "";
        data["brand"] = product.Brand || "";
        data["price"] = product.price || "";
        data.status="pending"

        axios
          .post("https://stormy-coast-87051.herokuapp.com/orders", data)
          .then((res) => {
            console.log(res.data);
            if (res.data.insertedId) {
              alert("Odered successfully");
              reset();
            }
          });
      };

    return (
      <div className="m-4">
        <div className="row ">
          <div className="col-md-7 mt-5">
            <img src={product.img} style={{ width: "100%" }} alt="" />

            {/* ----------Order Form----------- */}
          </div>
          <div className="col-md-5">
            <div className="card-body">
              <h1 className="card-title text-primary">{product.location}</h1>
              <h3 className="text-success">
                <i className="fas fa-car text-danger"></i> {product?.model}
              </h3>

              <div className="flex-container">
                <div>
                  <h5 className="text-success">Brand: {product?.Brand}</h5>
                </div>
                <div>
                  <Rating
                    className="mb-3 text-warning"
                    initialRating={product.rating}
                    readonly
                    emptySymbol="fa fa-star"
                    fullSymbol="fa fa-star"
                  />
                </div>
              </div>

              <p className="card-text fw-bold">{product?.description}</p>

              <div className="border-top border-2 border-danger m-4">
                <h4>Basics</h4>
                <Table striped bordered hover>
                  <tbody>
                    <tr>
                      <td>Exterior color</td>
                      <td>Calypso</td>
                    </tr>
                    <tr>
                      <td>Interior color</td>
                      <td>Beige</td>
                    </tr>
                    <tr>
                      <td>Drivetrain</td>
                      <td>Front-wheel Drive</td>
                    </tr>
                    <tr>
                      <td>MPG</td>
                      <td>30-40</td>
                    </tr>
                    <tr>
                      <td>Transmission</td>
                      <td>IVT</td>
                    </tr>
                    <tr>
                      <td>Engine</td>
                      <td>4 Cylinder Engine</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </div>
          </div>
        </div>
        <div className="w-75 rounded-3 border border-4 border-danger shadow-lg mx-auto mt-5">
          <h2 className="fw-bold text-danger pt-4">Book Your Dream Car</h2>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="d-flex flex-column w-75 mx-auto my-4"
          >
            <input
              {...register("Name")}
              value={user.displayName || ""}
              className="mb-2 fs-5"
            />
            <input
              {...register("Email")}
              value={user.email || ""}
              className="mb-2 "
            />
            <input
              {...register("city")}
              type="text"
              required
              className="mb-2 fw-bold"
              placeholder="Enter Your City"
            />

            <input
              {...register("model")}
              value={product.model || ""}
              className="mb-2 fw-bold"
            />

            <input
              {...register("brand")}
              value={product.Brand || ""}
              className="mb-2 fw-bold"
            />

            <input
              {...register("price")}
              value={product.price || ""}
              className="mb-2 fw-bold"
            />
            <input
              {...register("Date")}
              type="date"
              required
              className="mb-2 fw-bold"
            />

            <input
              {...register("downPayment")}
              type="number"
              className="mb-2 fw-bold"
              placeholder="Down Payment (optional)"
            />

            <button className="btn btn-danger fw-bold my-4">Purchase</button>
          </form>
        </div>
      </div>
    );
};

export default CarDetails;