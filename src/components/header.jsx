import React from "react";
import Logo from "../assets/Logo.png";
function Head() {
  return (
    <>
      <div
        className="rounded navbar flex items-center justify-center"
        style={{ backgroundColor: "#E4D7C3" }}
      >
        <div className="h-28 avatar">
          <img src={Logo} className="rounded" />
          <a className="btn btn-ghost text-xl text-black">DaveMExplorer</a>
        </div>
      </div>
    </>
  );
}
export default Head;