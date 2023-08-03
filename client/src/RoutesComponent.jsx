import React, { useState } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import Checker from "./components/Checker"
import NavBar from "./components/NavBar"

function RoutesComponent() {
  return (
    <div className="route--container">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/checker" element={<Checker />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default RoutesComponent