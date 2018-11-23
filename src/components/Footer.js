import React from "react";
import { Link } from "react-router-dom";

const Footer = props => {
  return (
    <footer className="display-f align-c justify-sb bg-p-d padding-lg width-p-lg footer">
      <p className="color-l">
        &copy; <span>Dustin Heisey</span>
      </p>
      <nav>
        <ul className="display-f justify-se">
          <li className="margin-r-sm">
            <Link to="/services">
              <p className="color-l padding-sm">Services</p>
            </Link>
          </li>
          <li className="margin-r-sm">
            <Link to="/contact">
              <p className="color-l padding-sm">Contact</p>
            </Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
