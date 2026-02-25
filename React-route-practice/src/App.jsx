import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router";

import "./App.css";
import Homepage from "./Components/Homepage";
import Aboutpage from "./Components/Aboutpage";
import Contact from "./Components/Contact";
import Services from "./Components/Services";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="about" element={<Aboutpage />} />
        <Route path="contact" element={<Contact />} />
        <Route path="services" element={<Services />} />
      </Routes>
    </>
  );
}

export default App;
