import React from "react";

// components
import Button from "../../shared/button/Button";
import Navbar from "../../shared/layout/navigation/Navbar";

// style
import styles from "../../../assets/sass/home.module.scss";

// images
import sectOne from "../../../assets/images/home/section-one.png";
import sectTwo from "../../../assets/images/home/section-two.png";
import slideOne from "../../../assets/images/home/section-four/slide-one.png";
import circleLine from "../../../assets/images/circle-line.svg";
import lines from "../../../assets/images/lines.svg";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <Navbar />
        <div className={styles.hero_text}>
          <h1>Exquisite dining since 1989</h1>
          <p>
            Experience our seasonal menu in beautiful country surroundings. Eat
            the freshest produce from the comfort of our farmhouse.
          </p>
          <Button text="Book a table" theme="dark-outlined" />
        </div>
      </div>
      <div className={styles.sectionOne}>
        <div className={styles.bubble}></div>
        <div className={styles.sectionOne_wrapper}>
          <img src={sectOne} alt="section-one" className={styles.mainImage} />
          <div className={styles.sectionOne_wrapper_text}>
            <img src={circleLine} alt="/" className={styles.circleLine} />
            <h3>Enjoyable place for all the family</h3>
            <p>
              Our relaxed surroundings make dining with us a great experience
              for everyone. We can even arrange a tour of the farm before your
              meal.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.sectionTwo}>
        <div className={styles.bubble}></div>
        <div className={styles.sectionTwo_wrapper}>
          <div className={styles.sectionTwo_wrapper_text}>
            <img src={circleLine} alt="/" className={styles.circleLine} />
            <h3>The most locally sourced food</h3>
            <p>
              All our ingredients come directly from our farm or local fishery.
              So you can be sure that you’re eating the freshest, most
              sustainable food.
            </p>
          </div>
          <div className={styles.sectionTwo_wrapper_image}>
            <img src={sectTwo} alt="section-two" className={styles.mainImage} />
            <img src={lines} alt="/" className={styles.lines} />
          </div>
        </div>
      </div>
      <div className={styles.sectionThree}>
        <div className={styles.sectionThree_text}>
          <img src={circleLine} alt="/" className={styles.circleLine} />
          <h3>A few highlights from our menu</h3>
          <p>
            We cater for all dietary requirements, but here’s a glimpse at some
            of our diner’s favourites. Our menu is revamped every season.
          </p>
        </div>
        <div></div>
      </div>
      <div className={styles.sectionFour}>
        <div className={styles.bubble}></div>
        <div className={styles.sectionFour_wrapper}>
          <div className={styles.image}>
            <img
              src={slideOne}
              alt="section-one"
              className={styles.mainImage}
            />
            <img src={lines} alt="lines" className={styles.lines} />
          </div>
          <div className={styles.sectionFour_wrapper_text}>
            <h3>Family Gathering</h3>
            <p>
              We love catering for entire families. So please bring everyone
              along for a special meal with your loved ones. We’ll provide a
              memorable experience for all.
            </p>
            <Button text="Book a table" theme="dark-filled" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
