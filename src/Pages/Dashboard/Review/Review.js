import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';

const Review = () => {
     const { register, handleSubmit, reset } = useForm();

     const onSubmit = (data) => {
       console.log(data);
       axios
         .post("https://stormy-coast-87051.herokuapp.com/comments", data)
         .then((res) => {
           console.log(res.data);
           if (res.data.insertedId) {
             alert("Comment added successfully");
             reset();
           }
         });
     };

    return (
      <div className="container py-5">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="border border-3 border-dark shadow-md p-4"
        >
          <h5 className="fw-bold text-danger">Rating</h5>
          <input
            {...register("rating")}
            placeholder="Add rating here"
            className="w-50"
            type="number"
            max="5"
            min="1"
          />
          <h5 className="fw-bold text-danger">Comment Drop Box</h5>
          <textarea
            {...register("comment")}
            placeholder="feel free to write"
            className="w-75"
          />
          <br />
          <button className="btn btn-success my-4 fw-bold">Submit</button>
        </form>
      </div>
    );
};

export default Review;