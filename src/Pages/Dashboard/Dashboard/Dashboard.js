import React from 'react';
import { Button } from 'react-bootstrap';
import {  NavLink, Switch, Route, useRouteMatch } from "react-router-dom";
import useAuth from '../../../Hook/useAuth';
import AdminRoute from '../../Login/AdminRoute/AdminRoute';
import AddProduct from '../Admin/AddProduct/AddProduct';
import MakeAdmin from '../Admin/MakeAdmin/MakeAdmin';
import ManageOrders from '../Admin/ManageOrders/ManageOrders';
import ManageProduct from '../Admin/ManageProduct/ManageProduct';
import MyOrders from '../MyOrders/MyOrders';
import PayLink from '../PayLink/PayLink';
import Review from '../Review/Review';
import './DashBoard.css'

const Dashboard = () => {
  let { path, url } = useRouteMatch();
  const { admin, logOut, user } = useAuth();
    return (
      <div className="px-5 py-2">
        <div className="row">
          <div className="col-md-2 dashboard-link">
            <div className=" border-2 border-bottom border-secondary">
              <h5 className="text-start">
                <i className="fas fa-user-circle"></i> {user.displayName}
              </h5>
              <h6 className="text-start mb-2">
                <i className="fas fa-envelope"></i> {user.email}
              </h6>
            </div>
            <div>
              {!admin && (
                <>
                  <NavLink
                    style={(isActive) => ({
                      color: isActive ? "green" : "blue",
                      textDecoration: "none",
                      textAlign: "left",
                    })}
                    to={`${url}`}
                  >
                    <h5>
                      <i className="fas fa-tasks"></i> My Order
                    </h5>
                  </NavLink>
                  <NavLink
                    style={(isActive) => ({
                      color: isActive ? "green" : "blue",
                      textDecoration: "none",
                      textAlign: "left",
                    })}
                    to={`${url}/review`}
                  >
                    <h5>
                      <i className="far fa-list-alt"></i> Review
                    </h5>
                  </NavLink>
                  <NavLink
                    style={(isActive) => ({
                      color: isActive ? "green" : "blue",
                      textDecoration: "none",
                      textAlign: "left",
                    })}
                    to={`${url}/paylink`}
                  >
                    <h5>
                      <i className="fab fa-cc-amazon-pay"></i> Pay Link
                    </h5>
                  </NavLink>
                </>
              )}

              {admin && (
                <>
                  <NavLink
                    style={(isActive) => ({
                      color: isActive ? "green" : "blue",
                      textDecoration: "none",
                      textAlign: "left",
                    })}
                    to={`${url}/addProduct`}
                  >
                    <h5>
                      <i className="far fa-calendar-plus m-1"></i> Add a Product
                    </h5>
                  </NavLink>
                  <NavLink
                    style={(isActive) => ({
                      color: isActive ? "green" : "blue",
                      textDecoration: "none",
                      textAlign: "left",
                    })}
                    to={`${url}/manageProduct`}
                  >
                    <h5>
                      <i className="fas fa-cog m-1"></i> Manage Product
                    </h5>
                  </NavLink>
                  <NavLink
                    style={(isActive) => ({
                      color: isActive ? "green" : "blue",
                      textDecoration: "none",
                      textAlign: "left",
                    })}
                    to={`${url}/makeAdmin`}
                  >
                    <h5>
                      <i className="fas fa-user-check m-1"></i> Make Admin
                    </h5>
                  </NavLink>
                  <NavLink
                    style={(isActive) => ({
                      color: isActive ? "green" : "blue",
                      textDecoration: "none",
                      textAlign: "left",
                    })}
                    to={`${url}/manageOrders`}
                  >
                    <h5>
                      <i className="fas fa-cogs "></i> Manage All Orders
                    </h5>
                  </NavLink>
                </>
              )}
            </div>
            <Button
              className="bg-danger text-white rounded m-2"
              onClick={logOut}
              variant="success"
            >
              <span className="p-1 fw-bold ">
                Log Out <i className="fas fa-sign-out-alt"></i>
              </span>
            </Button>
          </div>

          <div className="col-md-10 my-4">
            <Switch>
              <Route exact path={path}>
                {!admin ? (
                  <MyOrders></MyOrders>
                ) : (
                  <ManageProduct></ManageProduct>
                )}
              </Route>

              <Route path={`${path}/paylink`}>
                <PayLink></PayLink>
              </Route>
              <Route path={`${path}/review`}>
                <Review></Review>
              </Route>

              <AdminRoute path={`${path}/manageProduct`}>
                <ManageProduct></ManageProduct>
              </AdminRoute>
              <AdminRoute path={`${path}/addProduct`}>
                <AddProduct></AddProduct>
              </AdminRoute>
              <AdminRoute path={`${path}/manageOrders`}>
                <ManageOrders></ManageOrders>
              </AdminRoute>
              <AdminRoute path={`${path}/makeAdmin`}>
                <MakeAdmin></MakeAdmin>
              </AdminRoute>
            </Switch>
          </div>
        </div>
      </div>
    );
};

export default Dashboard;