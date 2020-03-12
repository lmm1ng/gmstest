import { createStore, applyMiddleware } from "redux";
import { save, load } from "redux-localstorage-simple";
import logger from "redux-logger";
import rootReducer from "./reducers";
import thunk from "redux-thunk";

const createStoreWithMiddleware = applyMiddleware(
  save({ states: ["table.column", "table.order"] }),
  thunk,
  logger
)(createStore);

export const store = createStoreWithMiddleware(
  rootReducer,
  load({
    states: ["table.column", "table.order"],
    preloadedState: { table: { data: [] } }
  })
);
