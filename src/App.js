import React, { Component } from "react";
import logo from "./logo.svg";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Banner from "./Comp/Banner";
import "./App.css";
import Classcounter from "./Hookscomponents/Classcounter";
import HooksCounter from "./Hookscomponents/HooksCounter";
import Hookscounter2 from "./Hookscomponents/Hookscounter2";
import Hookscounter3 from "./Hookscomponents/Hookscounter3";
import Hookecounter4 from "./Hookscomponents/Hookecounter4";
import Counter from "./Hookscomponents/Counter";
//import Hookecounter from "./Hookscomponents/Hookecounter";
// import HooksCounter from "./Hookscomponents/Hookecounters";
//components
import Home from "./Comp/Home";
import Artists from "./Comp/Artists";
import Sweetalerts from "./Hookscomponents/Sweetalerts";
import Main from "./Hookscomponents/Main";
import Example from "./Hookscomponents/Example";
import Example2 from "./Hookscomponents/Example2";
import Useeff from "./Useeffect/Useeff";
import Errorhandling from "./Hookscomponents/Errorhandling";
import ComponentC from "./Context/ComponentC";
import UseReducer from "./UseReducer/UseReducer";
export const Usercontext = React.createContext();
export const Channelcontext = React.createContext();
function App() {
  return (
    <div>
      <h2>functional component</h2>
      <Usercontext.Provider value={"Narayana"}>
        <Channelcontext.Provider value={"Reddy "}>
          <ComponentC />
        </Channelcontext.Provider>
      </Usercontext.Provider>
      <UseReducer></UseReducer>
    </div>
  );
}
export default App;
