import React from "react";

function PlanetTabs(props) {
  let tabsArray = [
    <h5 className="col-3 altColor p-1" onClick={props.Find}>
      Moon
    </h5>,
    <h5 className="col-3 altColor p-1" onClick={props.Find}>
      Mars
    </h5>,

    <h5 className="col-3 altColor p-1" onClick={props.Find}>
      Europa
    </h5>,

    <h5 className="col-3 altColor p-1" onClick={props.Find}>
      Titan
    </h5>,
  ];

  if (props.Selector === "Moon") {
    tabsArray.splice(
      0,
      1,
      <h5 className="col-3 selected-active p-1" onClick={props.Find}>
        Moon
      </h5>
    );
  } else if (props.Selector === "Mars") {
    tabsArray.splice(
      1,
      1,
      <h5 className="col-3 selected-active p-1" onClick={props.Find}>
        Mars
      </h5>
    );
  } else if (props.Selector === "Europa") {
    tabsArray.splice(
      2,
      1,
      <h5 className="col-3 selected-active p-1" onClick={props.Find}>
        Europa
      </h5>
    );
  } else if (props.Selector === "Titan") {
    tabsArray.splice(
      3,
      1,
      <h5 className="col-3 selected-active p-1" onClick={props.Find}>
        Titan
      </h5>
    );
  } 

  return <div className="row">{tabsArray}</div>;
}

export default PlanetTabs;
