import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import AboutMe from "./components/AboutMe/AboutMe";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about-me" element={<AboutMe />} />
    </Routes>
  );
}

export default App;
