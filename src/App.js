import React from "react";
// for adding the url routes
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// pages and components
import Home from "./pages/Home";
import Header from "./components/Header";

function App() {
  return (
    <div className="">
      <Router>
        <Switch>
          {/* Home Page */}
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
