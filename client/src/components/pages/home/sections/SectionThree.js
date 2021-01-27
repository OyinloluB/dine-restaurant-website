import React from "react";

// style
import styles from "../../../../assets/sass/home.module.scss";

// image
import circleLine from "../../../../assets/images/circle-line.svg";
import imageOne from "../../../../assets/images/home/section-three/image-one.png";
import imageTwo from "../../../../assets/images/home/section-three/image-two.png";
import imageThree from "../../../../assets/images/home/section-three/image-three.png";

const SectionThree = () => {
  return (
    <div className={styles.sectionThree}>
      <div className={styles.sectionThree_text}>
        <img src={circleLine} alt="/" className={styles.circleLine} />
        <h3>A few highlights from our menu</h3>
        <p>
          We cater for all dietary requirements, but here’s a glimpse at some of
          our diner’s favourites. Our menu is revamped every season.
        </p>
      </div>
      <div className={styles.sectionThree_images}>
        <div className={styles.wrapper}>
          <div className={styles.image}>
            <img src={imageOne} alt="image-one" />
            <div className={styles.line}></div>
          </div>
          <div className={styles.text}>
            <h3>Seared Salmon Fillet</h3>
            <p>
              Our locally sourced salmon served with a refreshing buckwheat
              summer salad.
            </p>
          </div>
        </div>
        <hr
          style={{ height: "1px", mixBlendMode: "normal", opacity: "0.15" }}
        />
        <div className={styles.wrapper}>
          <div className={styles.image}>
            <img src={imageTwo} alt="image-two" />
            <div className={styles.line}></div>
          </div>
          <div className={styles.text}>
            <h3>Rosemary Filet Mignon</h3>
            <p>
              Our prime beef served to your taste with a delicious choice of
              seasonal sides.
            </p>
          </div>
        </div>
        <hr
          style={{ height: "1px", mixBlendMode: "normal", opacity: "0.15" }}
        />
        <div className={styles.wrapper}>
          <div className={styles.image}>
            <img src={imageThree} alt="image-three" />
            <div className={styles.line}></div>
          </div>
          <div className={styles.text}>
            <h3>Summer Fruit Chocolate Mousse</h3>
            <p>
              Creamy mousse combined with summer fruits and dark chocolate
              shavings.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionThree;
