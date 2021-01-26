import React from "react";

// styles
import styles from "../../../../assets/sass/footer.module.scss";

// logo
import logo from "../../../../assets/images/logo.svg";

const Footer = () => {
  return (
    <div className={styles.container}>
      <img src={logo} alt="logo" width="80" />
      <div>
        <ul>
          <li>
            Marthwaite, Sedbergh
            <br /> Cumbria
          </li>
          <li>+00 44 123 4567</li>
        </ul>
      </div>
      <div>
        <ul>
          <li>OPEN TIMES</li>
          <li>MON - FRI: 09:00 AM - 10:00 PM</li>
          <li>SAT - SUN: 09:00 AM - 11:30 PM</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
