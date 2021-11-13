import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Products from './Pages/Products/Products';
import ExploreMore from './Pages/ExploreMore/ExploreMore';
import Login from './Pages/Login/Login/Login';
import Navigation from './Pages/Shared/Navigation/Navigation';
import Register from './Pages/Login/Register/Register';
import AuthProvider from './Context/AuthProvider';
import CarDetails from './Pages/CarDetails/CarDetails';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import MyOrders from './Pages/Dashboard/MyOrders/MyOrders';
import AddProduct from './Pages/Dashboard/Admin/AddProduct/AddProduct';
import ManageProduct from './Pages/Dashboard/Admin/ManageProduct/ManageProduct';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import Footer from './Pages/Shared/Footer/Footer';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
            <Navigation></Navigation>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute path="/explore">
              <ExploreMore></ExploreMore>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/contact">
              <Contact></Contact>
            </Route>

            <Route path="/orders">
              <MyOrders></MyOrders>
            </Route>
            <Route path="/addProduct">
              <AddProduct></AddProduct>
            </Route>
            <Route path="/manageProduct">
              <ManageProduct></ManageProduct>
            </Route>

            <PrivateRoute path="/carDetails/:carId">
              <CarDetails></CarDetails>
            </PrivateRoute>
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
