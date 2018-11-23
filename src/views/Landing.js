import React, { Component } from "react";

import Services from "../components/calls/Services";
import Benefits from "../components/calls/Benefits";
import About from "../components/calls/About";
// import Testimonials from "../components/calls/Testimonials";
import Works from "../components/calls/Works";
import Contact from "../components/calls/Contact";

class Landing extends Component {
  render() {
    return (
      <main className="padding-lg landing">
        <Services />
        <Benefits />
        <About />
        {/* <Testimonials /> */}
        <Works />
        <Contact />
      </main>
    );
  }
}

export default Landing;
