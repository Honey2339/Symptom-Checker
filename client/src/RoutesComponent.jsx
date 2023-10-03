import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Checker from "./components/Checker";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Head from "./components/Head";
import Legs from "./components/Legs";
import Arms from "./components/Arms";
import Feedback from "./components/Feedback";

function RoutesComponent() {
  return (
    <div className="route--container">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/checker" element={<Checker />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/head" element={<Head />}></Route>
          <Route path="/legs" element={<Legs />}></Route>
          <Route path="/arms" element={<Arms />}></Route>
          <Route path="/feedback" element={<Feedback />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default RoutesComponent;
