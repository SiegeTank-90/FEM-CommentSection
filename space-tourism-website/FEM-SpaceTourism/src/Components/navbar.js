import logo from "../assets/shared/logo.svg";
import React from "react";
import { Link } from "react-router-dom";
import useWindowDimensions from "./windowDemension";
import CollapseNavebar from "./collapseNavbar";

function NavBar() {
  function HoverState(event) {
    if (event.target.className === "p-5 col-3 NavItem") {
      event.target.className = event.target.className + " nav-item-hovered";
    } else {
      event.target.className = "p-5 col-3 NavItem";
    }
  }

  if (useWindowDimensions().width < 1080) {
    return <CollapseNavebar hover={HoverState} />;
  }

  return (
    <nav className="container-fluid">
      <div className="row NavText p-5">
        <div className="col-lg-1 p-2">
          <Link to="/">
            <img className="navlogo" alt="Navigation Logo" src={logo}></img>
          </Link>
        </div>
        <div className="col-lg-5 p-5 align-self-center ">
          <div className="col-12 nav-line"></div>
        </div>
        <div className="col-lg-6 row navGloss">
          <Link
            className="p-5 col-3 NavItem"
            onMouseOver={HoverState}
            onMouseOut={HoverState}
            to="/"
          >
            00 Home
          </Link>
          <Link
            className="p-5 col-3 NavItem"
            onMouseOver={HoverState}
            onMouseOut={HoverState}
            to="Destination"
          >
            01 Destinations
          </Link>
          <Link
            className="p-5 col-3 NavItem"
            onMouseOver={HoverState}
            onMouseOut={HoverState}
            to="Crew"
          >
            02 Crew
          </Link>
          <Link
            className="p-5 col-3 NavItem"
            onMouseOver={HoverState}
            onMouseOut={HoverState}
            to="Technology"
          >
            03 Technology
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
