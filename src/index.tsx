import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./redux/configureStore";

import Core from "./components/Core";

import "./index.scss";


ReactDOM.render(
  <Provider store={configureStore()}>
    <Core/>
  </Provider>,
  document.getElementById("root"),
);
