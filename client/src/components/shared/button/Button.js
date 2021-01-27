import React from "react";
import { Link } from "react-router-dom";

// style
import "../../../assets/sass/button.scss";

const Button = ({ text, theme, route }) => {
  return (
    <div className="button-wrapper">
      <Link to={`${route}`}>
        <button className={`${theme}`}>{text}</button>
      </Link>
    </div>
  );
};

export default Button;
