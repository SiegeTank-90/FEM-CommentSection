import React from "react";
import PlanetTabs from "./planetTabs.js"
import Moon from "../assets/destination/image-moon.webp"
import Mars from "../assets/destination/image-mars.webp"
import Europa from "../assets/destination/image-europa.webp"
import Titan from "../assets/destination/image-titan.webp"

function Location(props) {
  let planet = Moon

    if (props.img === "./assets/destination/image-moon.webp") {
      planet = Moon 
    } else if (props.img === "./assets/destination/image-mars.webp") {
      planet = Mars
    } else if (props.img === "./assets/destination/image-europa.webp") {
      planet = Europa
    } else if (props.img === "./assets/destination/image-titan.webp") {
      planet = Titan
    }
   
 

  return (
    <div className="row">
      <div className="row align-self-start col-md-6 pe-1">
        <img className="planetSize" alt="planetoid" src={planet}></img>
      </div>
      <div className="col-md-12 col-lg-5 ps-5">
        <PlanetTabs Find={props.Find} Selector={props.name}/>
        <h1>{props.name}</h1>
        <h5 className="altColor destinationTextContainer">{props.desc}</h5>
        <div className="row">
          <div className="col-md-6">
            <h6 className="subHeading2 altColor">AVG. DISTANCE</h6>
            <h6 className="subHeading">{props.distance}</h6>
          </div>
          <div className="col-md-6">
            <h6 className="subHeading2 altColor">EST. TRAVEL TIME</h6>
            <h6 className="subHeading ">{props.travel}</h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Location;
