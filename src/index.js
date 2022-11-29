import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { todos } from "./reducer/todos";
import { ui } from "./reducer/ui";



const reducer = combineReducers({
  todos:todos.reducer,
  ui:ui.reducer,
});
const store = configureStore({
  reducer
});












const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
