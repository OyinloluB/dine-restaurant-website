import React from "react";

// style
import styles from "../../../../assets/sass/home.module.scss";

// image
import sectTwo from "../../../../assets/images/home/section-two.png";
import circleLine from "../../../../assets/images/circle-line.svg";
import lines from "../../../../assets/images/lines.svg";

const SectionTwo = () => {
  return (
    <div className={styles.sectionTwo}>
      <div className={styles.bubble}></div>
      <div className={styles.sectionTwo_wrapper}>
        <div className={styles.sectionTwo_wrapper_text}>
          <img src={circleLine} alt="/" className={styles.circleLine} />
          <h3>The most locally sourced food</h3>
          <p>
            All our ingredients come directly from our farm or local fishery. So
            you can be sure that you’re eating the freshest, most sustainable
            food.
          </p>
        </div>
        <div className={styles.sectionTwo_wrapper_image}>
          <img src={sectTwo} alt="section-two" className={styles.mainImage} />
          <img src={lines} alt="/" className={styles.lines} />
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
