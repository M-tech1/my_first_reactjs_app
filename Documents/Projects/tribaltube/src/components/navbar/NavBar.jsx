// import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
// import Logo from "./assets/Logo.jpeg";

// import { AiOutlineSearch } from "react-icons/ai";

function Navbar() {
  return (
    // <nav className="nav">
    <nav className="nav">
      <Link to={"/"}>
        {/* <img src={Logo} alt="logo" /> */}
        <div className="text-red-600 text-4xl font-bold cursor-pointer">
          TribalTube
        </div>
      </Link>

      <ul className="nav__menu">
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/Canivals"}> Canivals</Link>
        </li>

        <li>
          <Link to={"/Movies"}> Movies</Link>
        </li>
        <li>
          <Link to={"/About"}>About</Link>
        </li>
      </ul>

      <div>
        <button className="text-white pr-4 cursor-pointer">Sign In</button>
        <button className="bg-red-600 px-6 py-2 rounded cursor-pointer text-white">
          Sign out
        </button>
      </div>
    </nav>
  );
}
export default Navbar;
