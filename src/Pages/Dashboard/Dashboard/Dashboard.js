import React from 'react';
import { Button } from 'react-bootstrap';
import { Link, Switch, Route, useRouteMatch } from "react-router-dom";
import AdminRoute from '../../Login/AdminRoute/AdminRoute';
import AddProduct from '../Admin/AddProduct/AddProduct';
import MakeAdmin from '../Admin/MakeAdmin/MakeAdmin';
import ManageProduct from '../Admin/ManageProduct/ManageProduct';
import MyOrders from '../MyOrders/MyOrders';
import PayLink from '../PayLink/PayLink';
import Review from '../Review/Review';
import './DashBoard.css'

const Dashboard = () => {
  let { path, url } = useRouteMatch();
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-2 dashboard-link">
            <Link style={{ textDecoration: "none", textAlign:"left" }} to="/myOrders">
              <h5>My Order</h5>
            </Link>
            <Link style={{ textDecoration: "none", textAlign:"left" }} to={`${url}`}>
              <h5>Review</h5>
            </Link>
            <Link style={{ textDecoration: "none", textAlign:"left" }} to={`${url}/paylink`}>
              <h5>Pay Link</h5>
            </Link>

            <Link style={{ textDecoration: "none", textAlign:"left" }} to={`${url}/addProduct`}>
              <h5>Add a Product</h5>
            </Link>
            <Link
              style={{ textDecoration: "none", textAlign:"left" }}
              to={`${url}/manageProduct`}
            >
              <h5>Manage Product</h5>
            </Link>
            <Link style={{ textDecoration: "none", textAlign:"left" }} to={`${url}/makeAdmin`}>
              <h5>Make Admin</h5>
            </Link>
          </div>
          <div className="col-md-10">
            <Switch>
              <Route exact path={path}>
                <MyOrders></MyOrders>
              </Route>

              <Route path={`${path}/paylink`}>
                <PayLink></PayLink>
              </Route>
              <Route path={`${path}/review`}>
                <Review></Review>
              </Route>

              <Route path={`${path}/makeAdmin`}>
                <MakeAdmin></MakeAdmin>
              </Route>
              <Route path={`${path}/manageProduct`}>
                <ManageProduct></ManageProduct>
              </Route>
              <Route path={`${path}/addProduct`}>
                <AddProduct></AddProduct>
              </Route>
              <Route path={`${path}/manageProduct`}>
                <ManageProduct></ManageProduct>
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    );
};

export default Dashboard;