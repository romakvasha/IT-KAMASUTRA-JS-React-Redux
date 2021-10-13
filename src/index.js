import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const postData = [
  { id: 1, message: "Привіт, як справи?", likesCount: 12 },
  { id: 2, message: "Це мій перший пост", likesCount: 20 },
  { id: 3, message: "Це мій другий пост", likesCount: 30 },
];

const dialogs = [
  { id: 1, name: "Ruslana" },
  { id: 2, name: "Roma" },
  { id: 3, name: "Taras" },
  { id: 4, name: "Sergey" },
  { id: 5, name: "Andry" },
];

const messages = [
  { id: 1, message: "Привіт" },
  { id: 2, message: "Пока" },
  { id: 3, message: "Привіт" },
  { id: 4, message: "Привіт" },
  { id: 5, message: "Привіт" },
];

ReactDOM.render(
  <React.StrictMode>
    <App postData={postData} dialogs={dialogs} messages={messages} />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
