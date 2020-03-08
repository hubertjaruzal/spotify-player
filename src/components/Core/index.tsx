import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

import Authorize from "../App/Authorize";
import App from "../App";


export const Core = () => {
  return (
    <Router>
      <Switch>
        <Route path="/authorize" component={Authorize}/>
        <Route path="/" component={App}/>
      </Switch>
    </Router>
  );
};

export default Core;
