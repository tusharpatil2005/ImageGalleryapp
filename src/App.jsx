import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Component/Navbar";
import Gallery from "./Component/Gallery";
import Login from "./Pages/Login"; // make sure you have Login.jsx
import Footer from "./Component/Footer";

const App = () => {
  const [searchQuery, setSearchQuery] = useState(""); // state lifted to App

  return (
    <Router>
      
      <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      <Routes>
        
        <Route path="/" element={<Gallery searchQuery={searchQuery} />} />

        
        <Route path="/login" element={<Login />} />
      </Routes>

      <Footer />
    </Router>
  );
};

export default App;
