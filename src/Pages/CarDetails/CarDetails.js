import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import { useParams } from 'react-router';
import useAuth from '../../Hook/useAuth';
import './CarDetails.css'

const CarDetails = () => {
    const {carId} = useParams();
    const [product, setProduct] = useState([]);
    const {user} = useAuth();
    
    console.log(product);
    useEffect( () => {
        fetch(`https://stormy-coast-87051.herokuapp.com/cars/${carId}`)
          .then((res) => res.json())
          .then((data) => {
            setProduct(data);
            console.log(data);
          });
        
    },[])

    return (
      <div className="container">
        <div className="row ">
          <div className="col-md-7 mt-5">
            <img src={product.img} style={{ width: "100%" }} alt="" />
          </div>
          <div className="col-md-5">
            <div className="card-body">
              <h1 className="card-title text-primary">{product.location}</h1>
              <h3 className="text-success">{product?.model}</h3>

              <div className="flex-container">
                <div>
                  <h5 className="text-success">Brand: {product?.Brand}</h5>
                </div>
                <div>
                  <h5 className="text-danger">{product.rating}</h5>
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
              <div className="d-flex justify-content-around">
                <Button>
                  Book Now {/* <FontAwesomeIcon icon={faCartPlus}/> */}
                </Button>
                <Button>View Package</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default CarDetails;