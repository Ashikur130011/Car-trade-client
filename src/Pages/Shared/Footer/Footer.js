import React from 'react';
import IMG1 from '../../../images/footer_bikewale.png'
import IMG2 from '../../../images/footer_carwale.png'
import IMG3 from '../../../images/footer_ct.png'
import IMG4 from '../../../images/mobility-logo.png'
import logo from '../../../images/logo.png'

const Footer = () => {
    return (
      <div>
        <div className="bg-secondary px-5">
          <div className="row w-75 mx-auto">
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
              <div>
                <img src={logo} alt="" />
                <p>
                  Our vision is to create an automotive digital ecosystem which
                  connects automobile customers, OEMs, dealers, banks, insurance
                  companies and other stakeholders.
                </p>
              </div>
            </div>
            <div className="col-md-3 text-white">
              <h3 className="text-black fw-bold">OUR COMPANY</h3>
              <h6>About us</h6>
              <h6>Term of us</h6>
              <h6>Contact Us</h6>
              <h6>Our Services</h6>
            </div>
            <div className="col-md-3 text-white">
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
              <h3 className="text-black fw-bold">Subscribe Us</h3>
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