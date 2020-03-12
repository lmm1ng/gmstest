import React from "react";
import ReactDOM from "react-dom";
import { store } from "./store";
import { Provider } from "react-redux";
import Table from "./containers/Table";
import Pagination from "./containers/Pagination";

import "semantic-ui-css/semantic.min.css";
import "./index.css"

ReactDOM.render(
  <Provider store={store}>
    <Table />
    <Pagination />
  </Provider>,
  document.getElementById("root")
);
