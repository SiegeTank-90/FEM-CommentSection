import React from "react";
import useWindowDimensions from "./windowDemension";
import Doug from "../assets/crew/image-douglas-hurley.webp"
import Ansari from "../assets/crew/image-anousheh-ansari.webp"
import Mark from "../assets/crew/image-mark-shuttleworth.webp"
import Victor from "../assets/crew/image-victor-glover.webp"


function Person(props) {

  let personImg = ""

  if (props.name === "Douglas Hurley") {
    personImg = Doug
  } else  if (props.name === "Mark Shuttleworth") {
    personImg = Mark
  } else  if (props.name === "Victor Glover") {
    personImg = Victor
  } else  if (props.name === "Anousheh Ansari") {
    personImg =  Ansari
  }





  let crewTabs = [
    <div className="crewTabs"> </div>,
    <div className="crewTabs"> </div>,
    <div className="crewTabs"> </div>,
    <div className="crewTabs"> </div>,
  ];

  crewTabs.splice(
    props.position,
    1,
    <div className="crewTabs-active"> </div>
  );
  
 
  if (useWindowDimensions().width < 375 ) {
    return (
      <div className="" onClick={props.Find}>
        <div className="crewImgContainer">
          <img className="crewImg" alt="CrewMember" src={personImg} />
        </div>
        <div className="crewTextContainer">
          <div className="crewTabContainers">{crewTabs}</div>
          <h3 className="primaryColor crewHeader">
            {props.role.toUpperCase()}
          </h3>
          <h3 className="crewName">{props.name.toUpperCase()}</h3>
          <h5 className="crewBody altColor">{props.bio}</h5>
        </div>
      </div>
    );
  } else {

  return (
    <div className="" onClick={props.Find}>
      <div className="crewTextContainer">
        <h3 className="primaryColor crewHeader">{props.role.toUpperCase()}</h3>
        <h3 className="crewName">{props.name.toUpperCase()}</h3>
        <h5 className="crewBody altColor">{props.bio}</h5>
        <div className="crewTabContainers">{crewTabs}</div>
      </div>

      <div className="crewImgContainer">
        <img className="crewImg" alt="CrewMember" src={personImg} />
      </div>
    </div>
  );
  }
}

export default Person;
