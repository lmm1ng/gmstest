import React from "react";
import ReactDOM from "react-dom";
import {store} from "./store";
import { Provider } from "react-redux";
import Table from "./containers/Table";

import "semantic-ui-css/semantic.min.css";


ReactDOM.render(
  <Provider store={store}>
    <Table />
  </Provider>,
  document.getElementById("root")
);
