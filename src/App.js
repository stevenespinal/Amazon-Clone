import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Checkout from "./components/Checkout/Checkout";
import Login from "./components/Login/Login";

function App() {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route exact component={Home} path="/"/>
        <Route component={Checkout} path="/checkout"/>
        <Route component={Login} path="/login"/>
      </Switch>
    </Router>
  );
}

export default App;
