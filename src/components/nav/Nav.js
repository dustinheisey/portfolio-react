import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.svg";
import Menu from "./Menu";
import Hamburger from "../../assets/menu.svg";

const Nav = ({ menuVisible, handleClick }) => {
  return (
    <nav className="display-f direction-c justify-c align-sb bg-l border-r-lg shadow">
      <div
        to="/"
        className="display-f justify-sa t-justify-sb padding-tb-lg padding-lr-md t-padding-tb-md t-padding-lr-lg align-c"
      >
        <Link to="/" className=" width-p-xmd t-width-p-md">
          <img src={Logo} alt="logo" className="width-p-lg height-a" />
        </Link>
        <div
          className="bg-p-d border-r-md display-f direction-c justify-c self-c align-c width-v-sm t-width-u height-v-sm t-height-u cursor-p grow"
          onClick={handleClick}
        >
          <img
            src={Hamburger}
            alt="menu"
            className="width-p-md height-a cursor-p"
            onClick={handleClick}
          />
        </div>
      </div>
      {menuVisible && <Menu />}
    </nav>
  );
};

export default Nav;
