import React from "react";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <div className="nav">
      <ul className="nav__container">
        <li>
          <Link to={"/"} className="nav__container--item">
            Home
          </Link>
        </li>
        <li>
          <Link to={"/programme"} className="nav__container--item">
            Programme
          </Link>
        </li>
        <li>
          <Link to={"/programme"} className="nav__container--item">
            Health
          </Link>
        </li>
        <li>
          <Link to={"/programme"} className="nav__container--item">
            Pricing
          </Link>
        </li>
        <li>
          {" "}
          <Link to={"/programme"} className="nav__container--item">
            Appointment
          </Link>
        </li>
      </ul>
    </div>
  );
}
