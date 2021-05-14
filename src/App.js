import "./App.css";
import Homepage from "./Homepage.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import Rentpage from "./Rentpage2";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/Signup">
            <Signup></Signup>
          </Route>

          <Route path="/Login">
            <Login></Login>
          </Route>
          <Route path="/Rentacar">
            <Rentpage></Rentpage>
          </Route>
          <Route path="/">
            <Homepage></Homepage>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
