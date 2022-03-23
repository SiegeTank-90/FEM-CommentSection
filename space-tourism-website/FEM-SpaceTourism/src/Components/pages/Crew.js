import React, { useState } from "react";
import Person from "../person.js";
import useWindowDimensions from "../windowDemension.js";
import removeBackground from "../removeBackground.js";

function Crew(props) {
  let backgroundSize = ""
  let documentWidth = useWindowDimensions().width

  if (documentWidth < 375 ) {
    backgroundSize = "CrewBackgroundMobile"
  } else  if (documentWidth  < 775 ) {
    backgroundSize = "CrewBackgroundTablet"
  } else {
    backgroundSize = "CrewBackgroundDesktop"  
  }

  
  removeBackground()
  document.body.classList.add(backgroundSize)



  let CrewPage = 0;

  function FindCrewMate(event) {
    CrewPage++;
    let FoundCrewMember = props.crew[CrewPage];
    if (CrewPage === 3) {
      CrewPage = -1;
    }
    setCrew(
      <Person
        name={FoundCrewMember.name}
        img={FoundCrewMember.images.png}
        role={FoundCrewMember.role}
        bio={FoundCrewMember.bio}
        Find={FindCrewMate}
        position={CrewPage}
     
      />
    );
  }

  const [Crew, setCrew] = useState(
    <Person
    name="Douglas Hurley"
    img="./assets/crew/image-douglas-hurley.png"
    role="Commander"
    bio="Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."
    Find={FindCrewMate}
    postion={CrewPage}

  />
  );

 
  

  return (
    <div role="main" className="container-fluid">
      <div className="justify-content-center row pageContainer">
        <h5 className="row m-5 pe-5 pageHeader">02 Meet Your Crew</h5>
        {Crew}
      </div>
    </div>
  );
}

export default Crew;
