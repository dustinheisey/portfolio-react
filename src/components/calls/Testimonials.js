import React, { Component } from "react";
import CardQuote from "../cards/CardQuote";

class Testimonials extends Component {
  render() {
    return (
      <CardQuote
        title="See What My Clients Think of Me"
        text1="Lorem cupidatat anim velit amet exercitation ut. Incididunt
    adipisicing proident amet nulla duis cillum occaecat qui nulla
    tempor. Esse non commodo aute adipisicing fugiat velit veniam sunt.
    Aute incididunt culpa cupidatat nisi duis Lorem fugiat do duis
    aliquip. Eu voluptate ipsum proident et labore. Amet voluptate ut
    cupidatat ullamco veniam ullamco officia ut id."
        text2="Lorem cupidatat anim velit amet exercitation ut. Incididunt
    adipisicing proident amet nulla duis cillum occaecat qui nulla
    tempor. Esse non commodo aute adipisicing fugiat velit veniam sunt.
    Aute incididunt culpa cupidatat nisi duis Lorem fugiat do duis
    aliquip. Eu voluptate ipsum proident et labore. Amet voluptate ut
    cupidatat ullamco veniam ullamco officia ut id."
        author1="Marsha Mayo"
        author2="Timothy Solorio"
        addClass="landing-testimonials"
      />
    );
  }
}

export default Testimonials;
