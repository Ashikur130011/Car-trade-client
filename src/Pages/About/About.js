import React from 'react';
import img5 from '../../images/img2.jpg'
import img2 from '../../images/img3.jpg'
import img3 from '../../images/img4.jpg'
import img4 from '../../images/img5.jpg'
import img6 from '../../images/img6.png'


const About = () => {
    return (
      <div>
        <div className="fw-bold m-5">
          <h1>Welcome to <span className="text-danger">CarTrade</span> Tech</h1>
          <p>
            We are a multi-channel auto platform with coverage and presence
            across vehicle types and value-added services. Our platforms operate
            under several brands: CarWale, CarTrade, Shriram Automall, BikeWale,
            CarTradeExchange, Adroit Auto and AutoBiz. Through these platforms,
            we enable new and used automobile customers, vehicle dealerships,
            vehicle OEMs and other businesses to buy and sell their vehicles in
            a simple and efficient manner. Our vision is to create an automotive
            digital ecosystem which connects automobile customers, OEMs,
            dealers, banks, insurance companies and other stakeholders.
          </p>
        </div>

        <div className="popular-bg p-4">
          <h1>Our Various Businesses & Brands</h1>
          <div className="row w-75 mx-auto">
            <div className="col-md-4">
              <img src={img5} alt="" />
            </div>
            <div className="col-md-4">
              <img src={img2} alt="" />
            </div>
            <div className="col-md-4">
              <img src={img3} alt="" />
            </div>
          </div>
          <div className="flex m-3">
            <img className="mx-3" src={img4} alt="" />
            <img src={img6} alt="" />
          </div>
        </div>
      </div>
    );
};

export default About;