import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import configureStore from "./redux/configureStore";

import Core from "./components/Core";

import "./index.scss";


library.add(fas, far, fab);

ReactDOM.render(
  <Provider store={configureStore()}>
    <Core/>
  </Provider>,
  document.getElementById("root"),
);
