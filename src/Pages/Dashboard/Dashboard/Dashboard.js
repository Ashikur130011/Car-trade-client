import React from 'react';
import MyOrders from '../MyOrders/MyOrders';

const Dashboard = () => {
    return (
      <div className="container">
        <div className="row g-5">
          <section className="col-md-3">
            <h3 className="mt-5">
              Dashbord
            </h3>
            <div className=" dashbord text-start ">
              <div
                className=""
                onClick={handleMyBooking}
                style={{ cursor: "pointer", padding: "10px" }}
              >
                <h5>
                  
                  My Booking
                </h5>
              </div>

              <div
                className=""
                onClick={handleManageBooking}
                style={{ cursor: "pointer", padding: "10px" }}
              >
                <h5>
                  
                  Manage Booking
                </h5>
              </div>

              <div
                className=""
                onClick={handleAddPackage}
                style={{ cursor: "pointer", padding: "10px" }}
              >
                <h5>
                 
                  Add Package
                </h5>
              </div>
            </div>
          </section>
          <section className="col-md-9">
            {(admin === "My Booking" && <MyOrders/>) ||
              (admin === "Manage Booking" && <Payment />) ||
              (admin === "Add Package" && <Review />)}
          </section>
        </div>
      </div>
    );
};

export default Dashboard;