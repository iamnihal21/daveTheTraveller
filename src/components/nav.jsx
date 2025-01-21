import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div
      className="navbar"
      style={{
        backgroundColor: "#E4D7C3",
        borderTop: "1px solid grey",
        borderBottom: "1px solid grey",
      }}
    >
      <div className="navbar-center justify-start align-middle">
        <ul className="menu menu-horizontal">
          <li>
            <Link to="/design">Design</Link>
          </li>
          <li>
            <Link to="/advertising">Advertising</Link>
          </li>
          <li>
            <Link to="/photography">Photography</Link>
          </li>
          <li>
            <Link to="/digital">Digital</Link>
          </li>
          <li>
            <Link to="/downloader">Downloader</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
