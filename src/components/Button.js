import React from "react";
import { Link } from "react-router-dom";

const Button = ({ text, link }) => {
  return (
    <button className="border-r-md bg-p-d padding-lr-lg padding-tb-md d-padding-lr-md d-padding-tb-sm display-f align-c justify-l cursor-p grow outline-n border-n">
      <Link
        to={link}
        className="color-l cursor-p display-b height-p-lg width-p-lg"
      >
        {text}
      </Link>
    </button>
  );
};

export default Button;
