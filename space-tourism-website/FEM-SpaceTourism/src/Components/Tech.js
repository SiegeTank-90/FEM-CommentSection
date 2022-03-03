import React from "react";
import useWindowDimensions from "./windowDemension";
import TechTabs from "./TechTabs";
import LaunchVehLand from "../assets/technology/image-launch-vehicle-landscape.jpg"
import SpacePortLand from "../assets/technology/image-spaceport-landscape.jpg"
import SpaceCapsuleLand from "../assets/technology/image-space-capsule-landscape.jpg"

import LaunchVehPort from "../assets/technology/image-launch-vehicle-portrait.jpg"
import SpacePortPort from "../assets/technology/image-spaceport-portrait.jpg"
import SpaceCapsulePort from "../assets/technology/image-space-capsule-portrait.jpg"


function Tech(props) {


  let imgPosition = props.imgPort;
  if (props.name === "Launch vehicle") {
    imgPosition = LaunchVehPort
  } else if (props.name === "Spaceport") {
    imgPosition = SpacePortPort
  } else if (props.name === "Space capsule") {
    imgPosition = SpaceCapsulePort
  }


  if (useWindowDimensions().width < 1080) {

    if (props.name === "Launch vehicle") {
      imgPosition = LaunchVehLand
    } else if (props.name === "Spaceport") {
      imgPosition = SpacePortLand
    } else if (props.name === "Space capsule") {
      imgPosition = SpaceCapsuleLand
    }

    return (
      <div className="row">
      <div className="TechImgContainer " >
        <img className="imgSize" alt="Tech Example" src={imgPosition}></img>
      </div>
      <div className="TechTextContainer">
        <div className="TechTabsContainer">
          <TechTabs TechPage={props.TechPage} Selector={props.target}/>
        </div>
        <div className="TextSummaryContainer">
          <h6 className="altColor">THE TERMINOLOGY ...</h6>
          <h2>{props.name.toUpperCase()}</h2>
          <h6 className="altColor">{props.desc}</h6>
        </div>
      </div>
     </div>
    )

  }


  return (
    <div className="row">
        <div className="TechTextContainer">
        <div className="TechTabsContainer">
          <TechTabs TechPage={props.TechPage} Selector={props.target}/>
        </div>
        <div className="TextSummaryContainer">
          <h6 className="altColor">THE TERMINOLOGY ...</h6>
          <h2>{props.name.toUpperCase()}</h2>
          <h6 className="altColor">{props.desc}</h6>
        </div>
      </div>
      <div className="TechImgContainer">
        <img className=""  alt="Tech Example" src={imgPosition}></img>
      </div>
    </div>
  );
}

export default Tech;
