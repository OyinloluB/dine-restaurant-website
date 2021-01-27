import React from "react";

// styles
import styles from "../../../assets/sass/cta.module.scss";
import Button from "../button/Button";

const Cta = () => {
  return (
    <div className={styles.container}>
      <h3>Ready to make a reservation?</h3>
      <Button text="Book a table" theme="dark-outlined" route="/booking" />
    </div>
  );
};

export default Cta;
