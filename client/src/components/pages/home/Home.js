import React from "react";

// components
import Cta from "../../shared/cta/Cta";
import Button from "../../shared/button/Button";
import SectionOne from "./sections/SectionOne";
import SectionTwo from "./sections/SectionTwo";
import SectionFour from "./sections/SectionFour";
import SectionThree from "./sections/SectionThree";
import Navbar from "../../shared/layout/navigation/Navbar";

// style
import styles from "../../../assets/sass/home.module.scss";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <Navbar />
        <div className={styles.hero_text}>
          <h1>Exquisite dining since 1989</h1>
          <p>
            Experience our seasonal menu in beautiful country surroundings. Eat
            the freshest produce from the comfort of our farmhouse..
          </p>
          <Button text="Book a table" theme="dark-outlined" route="/booking" />
        </div>
      </div>  
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <Cta />
    </div>
  );
};

export default Home;
