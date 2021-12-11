import { Link } from "react-router-dom";
import React from "react";

function NavBar() {
  return (
    <div className="link">
      <div>
        <Link to="/" className="a">Home</Link>
      </div>
      <div>
        <Link to="/contact" className="a">Contact</Link>
      </div>
      <div>
        <Link to="/about-us" className="a">About</Link>
      </div>
      <div>
        <Link to="/services" className="a">Services</Link>
      </div>
      <div>
        <Link to="/login" className="a">Login</Link>
      </div>
    </div>
  )
}

export default NavBar
