import { Route, Routes } from "react-router";
import React from "react";
import "./App.css";
import NavBar from "./Components/navbar.js";
import Destination from "./Components/pages/Destination.js";
import Technology from "./Components/pages/Technology.js";
import Crew from "./Components/pages/Crew.js";
import Hi404 from "./Components/pages/hi404.js"
import Home from "./Components/pages/Home.js";
import Data from "./data.json";


function App() {
  const { destinations, crew, technology } = Data;
   
  return (
    <div className="App">
         <NavBar />
      <Routes>
        <Route index path="FEM-SpaceTourisum" element={<Home />}/>
        <Route path="FEM-SpaceTourisum/Destination" element={<Destination destinations={destinations}   />}/>
        <Route path="FEM-SpaceTourisum/Crew" element={<Crew crew={crew}  />}/>
        <Route path="FEM-SpaceTourisum/Technology" element={<Technology technology={technology}  />}/>
        <Route path="*" element={<Hi404/>} />
      </Routes>
    </div>
  );
}

export default App;
