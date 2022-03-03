import React from "react";

function TechTabs(props) {
  let tabsArray = [
    <div className="TechTabs" id="LaunchVehicle" onClick={props.TechPage}>
      <h3 className="noHover TechTabsTextLoc">1</h3>
    </div>,
    <div className="TechTabs" id="SpacePort" onClick={props.TechPage}>
      <h3 className="noHover TechTabsTextLoc">2</h3>
    </div>,
    <div className="TechTabs" id="SpaceCapsule" onClick={props.TechPage}>
      <h3 className="noHover TechTabsTextLoc">3</h3>
    </div>,
  ];

  if (props.Selector === "LaunchVehicle") {
    tabsArray.splice(
      0,
      1,
      <div className="TechTabs-active" id="LaunchVehicle" onClick={props.TechPage}>
      <h3 className="noHover TechTabsTextLoc">1</h3>
    </div>
    );
  } else if (props.Selector === "SpacePort") {
    tabsArray.splice(
      1,
      1,
      <div className="TechTabs-active" id="SpacePort" onClick={props.TechPage}>
      <h3 className="noHover TechTabsTextLoc">2</h3>
    </div>
    );
  } else if (props.Selector === "SpaceCapsule") {
    tabsArray.splice(
      2,
      1,
      <div className="TechTabs-active" id="SpaceCapsule" onClick={props.TechPage}>
      <h3 className="noHover TechTabsTextLoc">3</h3>
    </div>
    );
   } 
    


  return <div className="">{tabsArray}</div>;
}

export default TechTabs;
