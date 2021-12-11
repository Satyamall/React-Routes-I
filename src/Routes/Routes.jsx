import { Route, Switch } from "react-router-dom"
import React from "react";
import Home from "../Components/Home";
import Contact from "../Components/Contact";
import About from "../Components/About";
import Services from "../Components/Services";
import Login from "../Components/Login";

function Routes() {
  return (
    <>
    <Switch>
      <Route exact path="/">
         <Home/>
      </Route>
      <Route exact path="/contact">
         <Contact/>
      </Route>
      <Route exact path="/about-us">
         <About/>
      </Route>
      <Route exact path="/services">
         <Services/>
      </Route>
      <Route exact path="/login">
         <Login/>
      </Route>
    </Switch>
    </>
  );
}

export default Routes;
