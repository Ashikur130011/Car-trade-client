import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import Products from '../../../Products/Products';

const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = (data) => {
      console.log(data);
      axios.post("https://stormy-coast-87051.herokuapp.com/cars", data)
        .then((res) => {
          console.log(res.data);
          if (res.data.insertedId) {
            alert("Car added successfully");
            reset();
          }
        });
    };
    return (
      <div>
        <div className="container py-5">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="border border-3 border-dark shadow-md p-4"
          >
            <div className="row ">
              <h1 className="p-4 text-danger">Add A New Car</h1>

              <div className="col-md-6">
                <h5 className="fw-bold text-danger">Model</h5>
                <input
                  {...register("model")}
                  placeholder="Add Car Model here.."
                  className="w-75"
                />
                <h5 className="fw-bold text-danger">Brand</h5>
                <input
                  {...register("Brand")}
                  placeholder="Add Car Brand here.."
                  className="w-75"
                />
                <h5 className="fw-bold text-danger">Description</h5>
                <textarea
                  {...register("description")}
                  placeholder="Add Description here"
                  className="w-75"
                />
              </div>
              <div className="col-md-6">
                <h5 className="fw-bold text-danger">Rating</h5>
                <input
                  {...register("rating")}
                  placeholder="Add rating here"
                  className="w-75"
                  type="number"
                  max="5"
                  min="1"
                />

                <h5 className="fw-bold text-danger">Price</h5>
                <input
                  {...register("price")}
                  placeholder="price"
                  className="w-75"
                />

                <h5 className="fw-bold text-danger">Img Link</h5>
                <input
                  {...register("img")}
                  placeholder="Car Image Link"
                  className="w-75"
                />
              </div>
            </div>
            <button className="btn btn-success my-4 fw-bold">Submit</button>
          </form>
        </div>
      </div>
    );
};

export default AddProduct;