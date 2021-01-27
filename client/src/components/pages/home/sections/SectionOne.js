import React from "react";

// style
import styles from "../../../../assets/sass/home.module.scss";

// image
import sectOne from "../../../../assets/images/home/section-one.png";
import circleLine from "../../../../assets/images/circle-line.svg";

const SectionOne = () => {
  return (
    <div className={styles.sectionOne}>
      <div className={styles.bubble}></div>
      <div className={styles.sectionOne_wrapper}>
        <img src={sectOne} alt="section-one" className={styles.mainImage} />
        <div className={styles.sectionOne_wrapper_text}>
          <img src={circleLine} alt="/" className={styles.circleLine} />
          <h3>Enjoyable place for all the family</h3>
          <p>
            Our relaxed surroundings make dining with us a great experience for
            everyone. We can even arrange a tour of the farm before your meal.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SectionOne;
