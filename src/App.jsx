import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Header from "../components/Header.jsx";
import Main from "../components/Main.jsx";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Meme from "../components/Meme";
import Unit from "../components/Unit";
import Travel from "../components/Travel";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route index element={<Main />} />
        <Route path="Main" element={<Main />} />
        <Route path="Meme" element={<Meme />} />
        <Route path="Unit" element={<Unit />} />
        <Route path="Travel" element={<Travel />} />
        <Route path="About" element={<About />} />
        <Route path="Contact" element={<Contact />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
