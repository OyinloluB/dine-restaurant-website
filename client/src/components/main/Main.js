import React from "react";
import { Route } from "react-router-dom";

// components
import Home from "../pages/home/Home";
import Booking from "../pages/booking/Booking";
import Footer from "../shared/layout/footer/Footer";

const Main = () => {
  return (
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/booking" component={Booking} />
      <Footer />
    </div>
  );
};

export default Main;
