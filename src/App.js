import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Products from './Pages/Products/Products';
import ExploreMore from './Pages/ExploreMore/ExploreMore';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/explore">
            <ExploreMore></ExploreMore>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
