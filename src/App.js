import "./App.css";
import React from "react";

import Home from "./component/home/home";
import Administrador from "./component/administrador/administrador";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route path="/administrador" component={Administrador}></Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
