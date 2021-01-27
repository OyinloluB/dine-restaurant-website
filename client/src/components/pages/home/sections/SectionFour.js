import React from "react";

// components
import Button from "../../../shared/button/Button";

// style
import styles from "../../../../assets/sass/home.module.scss";

// image
import slideOne from "../../../../assets/images/home/section-four/slide-one.png";
import lines from "../../../../assets/images/lines.svg";

const SectionFour = () => {
  return (
    <div className={styles.sectionFour}>
      <div className={styles.bubble}></div>
      <div className={styles.sectionFour_wrapper}>
        <div className={styles.image}>
          <img src={slideOne} alt="section-one" className={styles.mainImage} />
          <img src={lines} alt="lines" className={styles.lines} />
        </div>
        <div className={styles.sectionFour_wrapper_text}>
          <h3>Family Gathering</h3>
          <p>
            We love catering for entire families. So please bring everyone along
            for a special meal with your loved ones. We’ll provide a memorable
            experience for all.
          </p>
          <Button text="Book a table" theme="dark-filled" route="/booking" />
          <div className={styles.options}>
            <div className={styles.line}></div>
            <ul>
              <li>FAMILY GATHERING</li>
              <li>SPECIAL EVENTS</li>
              <li>SOCIAL EVENTS</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionFour;
