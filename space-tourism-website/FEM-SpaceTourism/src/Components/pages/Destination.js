import React, { useState } from "react";
import Location from "../location";
import useWindowDimensions from "../windowDemension";
import removeBackground from "../removeBackground";



function Destination(props) {
  let backgroundSize = ""
  let documentWidth = useWindowDimensions().width

  if (documentWidth < 375 ) {
    backgroundSize = "DestinationBackgroundMobile"
  } else  if (documentWidth  < 775 ) {
    backgroundSize = "DestinationBackgroundTablet"
  } else {
    backgroundSize = "DestinationBackgroundDesktop"  
  }

  removeBackground()
  document.body.classList.add(backgroundSize)


  function FindPlanet(event) {
        
    let planet = event.target.innerHTML;
    let Foundplanet = props.destinations.find(
      (planets) => planets.name === planet
    );
    setMap(
      <Location
        Find={FindPlanet}
        name={Foundplanet.name}
        desc={Foundplanet.description}
        distance={Foundplanet.distance}
        img={Foundplanet.images.webp}
        travel={Foundplanet.travel}
       
      />
    );
  
  
   
  }

  const [Map, setMap] = useState(
    <Location
      name= "Moon"
      desc= "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites."
      distance = "384,400 km"
      img= "./assets/destination/image-moon.png"
      travel = "3 days"
      Find={FindPlanet}
  
    />
  );

  return (
    <div className="container-fluid">
      <div className="justify-content-center row pageContainer">
        <h5 className="row m-5 pe-5 pageHeader">01 Pick Your Destination</h5>
        {Map}
      </div>
    </div>
  );
}

export default Destination;
