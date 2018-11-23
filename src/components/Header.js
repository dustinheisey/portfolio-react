import React from "react";
import Nav from "./nav/Nav";

const Header = props => {
  return (
    <header className="padding-t-lg padding-lr-lg">
      <Nav menuVisible={props.menuVisible} handleClick={props.handleClick} />
    </header>
  );
};

export default Header;
