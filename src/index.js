import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import Crud from "./crud";
import Home from "./Components/Home";
import Header from "./Components/Header";

import Contact from "./Components/Contact";
import Post from "./Components/Post";
import Profile from "./Components/profile";
import Page from "./Components/Pagenotfound";
import Param from "./Components/Param";
import Example2 from "./Hookscomponents/Example2";
import Useeff from "./Useeffect/Useeff";
import Errorhandling from "./Hookscomponents/Errorhandling";
import Useeff2 from "./Useeffect/Useeff2";
import Mouse from "./Useeffect/Mouse";
// import Count from "./Useeffect/Count";
import Count from "./Count/Count";
import Doubleeffects from "./Useeffect/Doubleeffects";
import Fetch from "./Fetch/Fetch";
import Fetchid from "./Fetch/Fetchid";
import ComponentC from "./Context/ComponentC";
import { createStore } from "redux";
import { Provider } from "react-redux";

import Datafetch0ne from "./Datafetch/Datafetch0ne";
import Datafetchingtwo from "./Datafetch/Datafetchingtwo";
import Usememo from "./MemoHooks/Usememo";
import UserefTimer from "./Useref/UserefTimer";
import Doctitlone from "./Tiele/Doctitlone";
import Counter from "./Tiele/Counter";
import Formone from "./Forms/Formone";
import reduer from "./reducers/Reducer";
import Appone from "./Appone";
import Form from "./validations/Form";
import FormEmail from "./validations/FormEmail";
import Multiplecheckbox from "./validations/Multiplecheckbox";
// axios.interceptors.request.use((req) => {
//   debugger;
//   req.headers.authorization = "my secret token";

//   console.log(`${req.method} ${req.url}`);
//   // Important: request interceptors **must** return the request.
//   return req;
// });

// axios.interceptors.response.use(
//   (response) => {
//     response.headers = "Access-Control-Allow-Origin";
//     debugger;

//     if (response.status === 401) {
//       alert("alert 1");
//     } else if (
//       response.status === 404 &&
//       response.url.includes("GetBookingDetailsAsync")
//     ) {
//       alert("alert 2");
//     } else if (response.status !== 200) {
//       throw new Error(response.status);
//     }
//     return response;
//   },
//   (error) => {
//     debugger;

//     throw new Error("something...");
//   }
// );
// const axiosInstance = axios.create({
//   baseURL: "https://...",
// });

const isHandlerEnabled = (config = {}) => {
  return config.hasOwnProperty("handlerEnabled") && !config.handlerEnabled
    ? false
    : true;
};

// await axiosInstance.get("/v2/api-endpoint", { handlerEnabled: false });
debugger;
const requestHandler = (request) => {
  if (isHandlerEnabled(request)) {
    // Modify request here
    request.headers["X-CodePen"] =
      "https://codepen.io/teroauralinna/full/vPvKWe";
  }
  return request;
};
axios.interceptors.request.use((request) => requestHandler(request));

const errorHandler = (error) => {
  debugger;
  if (isHandlerEnabled(error.config)) {
    // Handle errors
  }
  return Promise.reject({ ...error });
};

const successHandler = (response) => {
  if (isHandlerEnabled(response.config)) {
    // Handle responses
  }
  return response;
};

axios.interceptors.response.use(
  (response) => successHandler(response),
  (error) => errorHandler(error)
);

const store = createStore(reduer);

ReactDOM.render(
  <Provider store={store}>
    <Multiplecheckbox />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https:/ /bit.ly/CRA-PWA
serviceWorker.unregister();
