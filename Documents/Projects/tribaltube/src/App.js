import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";

import Canivals from "./pages/Canivals";
import Navbar from "./components/navbar/NavBar.jsx";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import Movies from "./pages/Movies";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Movies" element={<Movies />} />
        <Route path="/Canivals" element={<Canivals />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
