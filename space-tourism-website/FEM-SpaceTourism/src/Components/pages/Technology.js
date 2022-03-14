import React, {useState } from "react"
import ReactDOM from "react-dom"
import { Router } from "react-router"
import Tech from "../Tech"
import useWindowDimensions from "../windowDemension.js"
import removeBackground from "../removeBackground.js"




function Technology(props) {
  let backgroundSize = ""
  let documentWidth = useWindowDimensions().width

  if (documentWidth < 500 ) {
      backgroundSize = "TechnologyBackgroundMobile"
  } else  if (documentWidth  < 775 ) {
    backgroundSize = "TechnologyBackgroundTablet"
  } else {
    backgroundSize = "TechnologyBackgroundDesktop"  
  }

  removeBackground()
  document.body.classList.add(backgroundSize)

    
    let Technologies = props.technology[0]
    
    function TechPage(event) {
        let target = event.target.id
        if (target === "LaunchVehicle") {
          Technologies = props.technology[0]
        } else if ( target === "SpacePort") {
          Technologies = props.technology[1]
        } else if ( target ===  "SpaceCapsule") {
          Technologies = props.technology[2]
        }
      
      setTechnology(
        <Tech
          name= {Technologies.name}
          desc= {Technologies.description}
          imgPort= {Technologies.images.portrait}
          imgLand= {Technologies.images.landscape}  
          TechPage= {TechPage}
          target={event.target.id}
        />
      )
      
    }

  

    const [Technology, setTechnology] = useState(
        <Tech
          name= {Technologies.name}
          desc= {Technologies.description}
          TechPage= {TechPage}
          target="LaunchVehicle"
        />
      );


    return (
        <div className="container-fluid">
        <div className="justify-content-center row pageContainer">
          <h5 className="row m-5 pe-5 pageHeader">03 SPACE LAUNCH 101</h5>
            {Technology}
        </div>
      </div>
    );
}

export default Technology