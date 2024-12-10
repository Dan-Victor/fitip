import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./home"; // Index page
import Fitness from "./fitness"; 

const App = () => {
  return (
    <Router>
    <header>
    <h1>Fitip</h1>
    <nav>
      <ul>
      <li> <Link to="/">BMI Calculator</Link></li>
      <li> <Link to="/fitness">Fitness Tips</Link></li>
      </ul>
    </nav>
  </header>
   <Routes>
   <Route path="/" element={<Home />} />
   <Route path="/Fitness" element={<Fitness/> } />
    </Routes>
</Router>
  );
};

export default App;
