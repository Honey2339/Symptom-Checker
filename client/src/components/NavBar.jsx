import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"

function NavBar() {
  return (
    <div>
      <div className="nav-component">
        <h3>
          <Link to="/" className="home-btn">
            Home
          </Link>
        </h3>
        <h3>
          <Link to="/checker" className="checker-btn">
            Checker
          </Link>
        </h3>
        <h3>About</h3>
      </div>
    </div>
  )
}

export default NavBar
