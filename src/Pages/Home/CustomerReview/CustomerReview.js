import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import Rating from 'react-rating';
import useAuth from '../../../Hook/useAuth';
import Img from '../../../images/car/bg.jpg'
import './CustomerReview.css'

const CustomerReview = () => {
    const [comments, setComments] = useState([]);
    const { user } = useAuth();
    console.log(comments);

    useEffect(() => {
      fetch(`https://stormy-coast-87051.herokuapp.com/comments`)
        .then((res) => res.json())
        .then((data) => {
          setComments(data);
        });
    }, []);
    return (
      <div>
        <Carousel className="caro_width w-50 mx-auto mb-5">
          {comments.map((comment) => (
            <Carousel.Item className="" interval={2000} key={comment?._id}>
              <img className="w-100" src={Img} alt="Slider img" />

              <div className="caro_border">
                <Carousel.Caption className="mb-3">
                  <img
                    src={user?.photoURL}
                    alt=""
                    className="rounded-circle  border"
                  />
                  <Rating
                    className="mb-3 text-warning"
                    initialRating={comment.rating}
                    readonly
                    emptySymbol="fa fa-star"
                    fullSymbol="fa fa-star"
                  />
                  <div>
                    <p className="w-75 mx-auto">{comment.comment}</p>
                  </div>
                </Carousel.Caption>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    );
};

export default CustomerReview;