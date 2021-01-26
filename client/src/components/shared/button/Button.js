import React from "react";

// style
import "../../../assets/sass/button.scss";

const Button = ({ text, theme }) => {
  return (
    <div className="button-wrapper">
      <button className={`${theme}`}>{text}</button>
    </div>
  );
};

export default Button;
