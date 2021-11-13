import React from 'react';
import IMG1 from '../../../images/footer_bikewale.png'
import IMG2 from '../../../images/footer_carwale.png'
import IMG3 from '../../../images/footer_ct.png'
import IMG4 from '../../../images/mobility-logo.png'
import logo from '../../../images/logo.png'
import { FormControl, InputGroup } from 'react-bootstrap';

const Footer = () => {
    return (
      <div>
        <div className="bg-secondary border border-danger border-2 px-5">
          <div className="row w-75 p-5 mx-auto">
            <div className="col-md-3 my-3">
              <img src={IMG1} alt="" />
            </div>
            <div className="col-md-3 my-3">
              <img src={IMG2} alt="" />
            </div>
            <div className="col-md-3 my-3">
              <img src={IMG3} alt="" />
            </div>
            <div className="col-md-3 my-3">
              <img style={{ width: "130px" }} src={IMG4} alt="" />
            </div>
          </div>
          <div className="row">
            <div className="col-md-3 text-white">
              <div className="mx-4">
                <img src={logo} alt="" />
                <p>Our vision is to create an automotive digital ecosystem.</p>
                <div>
                  <p className="text-start mb-0">
                    <i className="far fa-address-card text-warning"></i> 760 Dane
                    Street, Millwood, Washington
                  </p>
                  <p className="text-start mb-0">
                    <i className="fas fa-globe-asia text-warning"></i> text-black
                    United States
                  </p>
                  <p className="text-start">
                    <i className="fas fa-phone-volume text-warning"></i>{" "}
                    509-290-3895
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3 text-white text-start">
              <h3 className="text-black fw-bold">OUR COMPANY</h3>
              <h6 className=" fw-bold">Term of us</h6>
              <h6 className=" fw-bold">Contact Us</h6>
              <h6 className=" fw-bold">About us</h6>
              <h6 className=" fw-bold">Our Services</h6>
            </div>
            <div className="col-md-3 text-white text-start">
              <h3 className="text-black fw-bold">OPEN HOURS</h3>
              <h5>Sales Department</h5>
              <h6>
                <i className="fas fa-clock text-warning"></i> Mon-Sat : 8:00am -
                5:00pm
              </h6>
              <h6>Sunday is Closed</h6>
              <h5>Service Department</h5>
              <h6>
                <i className="fas fa-clock text-warning"></i> Mon-Sat : 8:00am -
                5:00pm
              </h6>
              <h6>Sunday is Closed</h6>
            </div>
            <div className="col-md-3 text-white">
              <h3 className="text-black fw-bold">SUBSCRIBE US</h3>
              <InputGroup className="mb-3">
                <FormControl
                  placeholder="Your email"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
                <InputGroup.Text id="basic-addon2">send</InputGroup.Text>
              </InputGroup>

              <i className="fab fa-facebook fs-3 mx-2 text-warning"></i>
              <i className="fab fa-twitter fs-3 mx-2 text-warning"></i>
              <i className="fab fa-google-plus-g fs-3 mx-2 text-warning"></i>
            </div>
          </div>
        </div>
        <div className="bg-black">
          <p className="text-danger fw-bold m-0 ">
            Designed by Ashikur Rahman{" "}
            <i className="far fa-copyright mx-2 text-danger"></i>2021
          </p>
        </div>
      </div>
    );
};

export default Footer;