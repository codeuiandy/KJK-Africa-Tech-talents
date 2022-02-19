import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar-ch-con" style={{}}>
      <div className="navbarChild">
        <div className="navbar-logo" style={{ cursor: "pointer" }}>
          <Link to="/">LOGO</Link>
        </div>

        <ul className="right-links hideOnMobile">
          <li>Links</li>
        </ul>
      </div>
    </div>
  );
}
