import React from "react";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";

export default function Home() {
  return (
    <div className="homeContainer">
      {/* <Navigation /> */}

      <div className="homeContainer__welcome">
        <div className="homeContainer__welcome__sectionOne">
          <p className="homeContainer__welcome__sectionOne--main-text">
            Transform Your Fitness Into Shape
          </p>

          <p className="homeContainer__welcome__sectionOne--simple-text">
            We help you to create a shape of your body and doing this stay
            healthy taking our fitness service
          </p>

          <div className="homeContainer__welcome__sectionOne__quick-actions">
            <button className="homeContainer__welcome__sectionOne__quick-actions--btn">Get Started</button>

            <Link to={`/booking`} className="homeContainer__welcome__sectionOne__quick-actions--booking-link">Book your seat</Link>
          </div>
        </div>
        <div className="homeContainer__welcome__sectionTwo">
          <img src={process.env.PUBLIC_URL + "/images/fitboy.png"} alt="" />
        </div>
      </div>
    </div>
  );
}
