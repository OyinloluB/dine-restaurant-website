import React from "react";

// style
import style from "../../../../assets/sass/navbar.module.scss";

// image
import logo from "../../../../assets/images/logo.svg";

const Navbar = () => {
  return (
    <div className={style.container}>
      <img src={logo} alt="logo" width="70" />
    </div>
  );
};

export default Navbar;
