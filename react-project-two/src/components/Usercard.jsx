import React from "react";
import hero from "../assets/img.jpg";
import "./Usercard.css";

function Usercard(props) {
  return (
    <div className="user-container">
      <p id="name" style={props.style}>
        {props.name}
      </p>

      <img id="user-img" src={hero} alt="Love Babbar" />

      <p>Description of Love Babbar</p>
    </div>
  );
}

export default Usercard;