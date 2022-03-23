import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/shared/logo.svg";
import hamburger from "../assets/shared/icon-hamburger.svg";
import close_ham from "../assets/shared/icon-close.svg";

function CollapseNavbar(props) {
  const [isOpen, setisOpen] = useState("off");

  function isMenuOpen() {

        if (isOpen === "off") {
            setisOpen("Open")
        } else if (isOpen === "Open") {
            setisOpen("Closed")
        } else if (isOpen === "Closed") {
            setisOpen("Open")
        } 
    
  }

  return (
    <nav role="navigation">
      <div className="container-fluid index">
        <div className="row justify-content-between">
          <Link className="col-2" to="FEM-SpaceTourisum">
            <img className="navlogo" alt="Navigation Logo" src={logo}></img>
          </Link>
          <div className="col-2">
            <img
              alt="Navigation Menu Button"
              className={ (isOpen === "Open") ? "hidden" : "hamburger-Closed" }
              src={hamburger}
              onClick={isMenuOpen}
            />
          </div>
        </div>
      </div>
      <div className={`Menu-${isOpen}`}>
        <img
          alt="Navigation Menu Close"
          className="hamburger-Open"
          src={close_ham}
          onClick={isMenuOpen}
        />
        <Link className="NavItem-mobile" to="FEM-SpaceTourisum">
          00 Home
        </Link>
        <Link className="NavItem-mobile" to="FEM-SpaceTourisum/Destination">
          01 Destinations
        </Link>
        <Link className="NavItem-mobile" to="FEM-SpaceTourisum/Crew">
          02 Crew
        </Link>
        <Link className="NavItem-mobile" to="FEM-SpaceTourisum/Technology">
          03 Technology
        </Link>
      </div>
    </nav>
  );
}

export default CollapseNavbar;
