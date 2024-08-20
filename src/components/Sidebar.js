import React from "react";
import "./css/nav.css";

function Sidebar(props) {
  return (
    <div className="sidebars">
    <div className="tit">
      <h1>Blue S</h1>
      <button className="exitb" onClick={props.exit}>
            X
        </button>
    </div>
      <ul>
        <li>
          <a href="/section">Home</a>
        </li>
        <li>
          <a href="/store">Shop</a>
        </li>
        <li>
          <a href="/">Sale</a>
        </li>
        <li>
          <a href="/">Contact us</a>
        </li>
        <li>
          <a href="/">Git Hub</a>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
