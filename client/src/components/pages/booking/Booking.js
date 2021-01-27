import React from "react";

// components
import Navbar from "../../shared/layout/navigation/Navbar";

// style
import styles from "../../../assets/sass/booking.module.scss";

const Booking = () => {
  return (
    <div>
      <div className={styles.hero}>
        <Navbar />
        <div className={styles.hero_wrapper}>
          <div className={styles.text}>
            <h1>Reservations</h1>
            <p>
              We can’t wait to host you. If you have any special requirements
              please feel free to call on the phone number below. We’ll be happy
              to accommodate you.
            </p>
          </div>
          <div className={styles.form}>
            <form>
              <input className={styles.input} type="text" placeholder="Name" />
              <input
                className={styles.input}
                type="email"
                placeholder="Email"
              />
              <div>
                <p>Pick a date</p>
                <input type="number" placeholder="01" />
                <input type="number" placeholder="27" />
                <input type="number" placeholder="2021" />
              </div>
              <div>
                <p>Pick a time</p>
                <input type="number" placeholder="09" />
                <input type="number" placeholder="00" />
                <input type="email" placeholder="AM" />
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className={styles.bubbleWrapper}>
        <div className={styles.bubble}></div>
      </div>
    </div>
  );
};

export default Booking;
