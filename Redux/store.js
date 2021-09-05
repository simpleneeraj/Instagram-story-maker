import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import thunk from "redux-thunk";
import rootreducer from "./reducers/rootreducer";
const store = configureStore({
  reducer: {
    reducer: rootreducer,
  },
  middleware: [thunk, logger],
});

export default store;
