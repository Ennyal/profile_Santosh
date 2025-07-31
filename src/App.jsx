import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Components/HomePage";
import About from "./Components/About";

const App = () => {
  return (
    <Router>  
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About/>} />
          
        </Routes>
      </div>
    </Router>
  );
};

export default App;
