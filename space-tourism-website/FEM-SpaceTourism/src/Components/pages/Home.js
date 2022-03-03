import React from "react";
import { Link } from "react-router-dom";
import useWindowDimensions from "../windowDemension";
import removeBackground from "../removeBackground";

function Home(props) {
  let backgroundSize = ""
  let documentWidth = useWindowDimensions().width

  if (documentWidth <= 375 ) {
    backgroundSize = "HomeBackgroundMobile"
  } else  if (documentWidth  < 775 ) {
    backgroundSize = "HomeBackgroundTablet"
  } else {
    backgroundSize = "HomeBackgroundDesktop"  
  }

  removeBackground()
  document.body.classList.add(backgroundSize)


   return (
    <div classNamne="container">
      <div className="row align-self-end">
        <div className="col-lg-6 MainPageText">
          <div className="">
            <h3 className="altColor"> So, you want to travel to </h3>
            <h1 className=""> SPACE </h1>
            <h5 className="altColor">
              {" "}
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience! Explore
            </h5>
          </div>
        </div>
        <div className="exploreContainer">
          <div className="exploreHover">
            <Link to="/Destination" className="exploreButton">
              <h5 className="subHeading exploreButtonText noHover">EXPLORE</h5>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
