import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter,Route,Link,Switch} from "react-router-dom"
import * as serviceWorker from './serviceWorker';
import Crud from "./crud";
import Home from "./Components/Home";
import Header from "./Components/Header";

import Contact from "./Components/Contact";
import Post from "./Components/Post";
import Profile from "./Components/profile";
import Page from "./Components/Pagenotfound";
import Param from "./Components/Param";

ReactDOM.render(

    <BrowserRouter>
    <Header/>
    <Switch>
    <Route path="/contact/:id" component={Param} />
    <Route path="/contact" component={Contact} exact/>
    <Route path="/" component={Home}  exact/>
    <Route path="*" component={Page}/>
    </Switch>
    </BrowserRouter>
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
