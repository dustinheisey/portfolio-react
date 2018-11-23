import React from "react";
import { NavLink } from "react-router-dom";

const Menu = props => {
  return (
    <ul className="bg-p-d direction-c align-l justify-c height-a padding-lg border-r-bl-lg border-r-br-lg display-f">
      <li className="margin-b-lg">
        <NavLink
          to="/"
          refresh="true"
          className="color-l text-lg padding-sm background"
        >
          Home
        </NavLink>
      </li>
      <li className="margin-b-lg">
        <NavLink
          to="/about"
          refresh="true"
          className="color-l text-lg padding-sm background"
        >
          About
        </NavLink>
      </li>
      <li className="margin-b-lg">
        <NavLink
          to="/services"
          refresh="true"
          className="color-l text-lg padding-sm background"
        >
          Services
        </NavLink>
      </li>
      <li className="margin-b-lg">
        <NavLink
          to="works"
          refresh="true"
          className="color-l text-lg padding-sm background"
        >
          Work
        </NavLink>
      </li>
      <li>
        <NavLink
          to="contact"
          refresh="true"
          className="color-l text-lg padding-sm background"
        >
          Contact
        </NavLink>
      </li>
    </ul>
  );
};

export default Menu;
