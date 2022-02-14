import Home from "./components/home/Home.js";
import Header from "./components/header/Header.js";
import Footer from "./components/footer/Footer.js";
import TourDetails from "./components/TourDetails/TourDetails.js";
import {Routes, Route} from 'react-router-dom';
import tourData from "./data/db.json";
import { useState } from 'react';
import "./App.css";

function App() {

  const [extended, setExtended] = useState(false);
  
  function handleExtended() {
    setExtended(!extended);
  }

  return (
    <div id="main-container">
      <Header/>
      <Routes>
          <Route path="/" element={<Home data={tourData}/>} />
          <Route path="/city/:id" element={<TourDetails data={tourData} myExtended={extended} myExtendedHandler={handleExtended} />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;

