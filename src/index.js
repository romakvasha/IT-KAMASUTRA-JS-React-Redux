import store from "./redux/state";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const renderEntireTree = (_data) => {
  ReactDOM.render(
    <BrowserRouter>
      <App data={_data} dispatch={store.dispatch.bind(store)} />
    </BrowserRouter>,
    document.getElementById("root")
  );
};

renderEntireTree(store.getData());

store.subscribe(renderEntireTree);
