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
        <Route index path="/" element={<Home />}/>
        <Route path="Destination" element={<Destination destinations={destinations}   />}/>
        <Route path="Crew" element={<Crew crew={crew}  />}/>
        <Route path="Technology" element={<Technology technology={technology}  />}/>
        <Route path="*" element={<Hi404/>} />
      </Routes>
    </div>
  );
}

export default App;
