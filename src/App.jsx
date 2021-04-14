import React from "react";
import Login from "./Components/OnBoarding/Login";
import Register from "./Components/OnBoarding/Register";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/register">
        <main>
          <Register />
        </main>
      </Route>

      <Route exact path="/login">
        <main>
          <Login />
        </main>
      </Route>
    </Switch>
  </Router>
);

export default App;
