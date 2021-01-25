import React from "react";
import { Route, Switch } from "react-router-dom";

import Dashboard from "./Components/views/Dashboard/Dashboard";
import Login from "./Components/views/Login/Login";
import Signup from "./Components/views/Signup/Signup";
// import "./App.css";

function App() {
  return (
    <div className="App">
      <main>
        <Switch>
          <Route path="/" component={Login} exact />
          <Route path="/Login" component={Login} />
          <Route path="/Signup" component={Signup} />
          <Route path="/Dashboard" component={Dashboard} />
          <Route component={Error} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
