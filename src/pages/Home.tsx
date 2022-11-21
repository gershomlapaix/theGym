import React from "react";
import Navigation from "../components/Navigation";
import myImage from "../../public/images/fitboy.png";
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
        </div>
        <div className="homeContainer__welcome__sectionTwo">
          <img src={process.env.PUBLIC_URL + "/images/fitboy.png"} alt="" />
        </div>
      </div>
    </div>
  );
}
