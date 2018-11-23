import React from "react";
import { Switch, Route } from "react-router-dom";

import Landing from "../views/Landing";
import About from "../views/About";
import Benefits from "../views/Benefits";
import Services from "../views/Services";
import Works from "../views/Works";

import Contact from "../views/Contact";

const Main = props => {
  return (
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route exact path="/benefits" component={Benefits} />
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/works" component={Works} />
      <Route exact path="/services" component={Services} />
    </Switch>
  );
};

export default Main;
