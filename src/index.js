import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import createStore from "./store";
import { Provider } from "react-redux";
import Table from "./containers/Table";

import "semantic-ui-css/semantic.min.css";

const store = createStore();

ReactDOM.render(
  <Provider store={store}>
    <Table />>
  </Provider>,
  document.getElementById("root")
);
