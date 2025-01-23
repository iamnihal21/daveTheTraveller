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
          <Link to="/worldRecordMain">World Record</Link>
          </li>
          <li>
            <Link to="/advertising">Detailing Products</Link>
          </li>
          <li>
            <Link to="/wallpapers">Wallpapers</Link>
          </li>
          <li>
            <Link to="/digital">Podcast</Link>
          </li>
          <li>
            <Link to="/downloader">Tools</Link>
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
