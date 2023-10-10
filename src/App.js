import React, { useState } from "react";
import CurrentLocation from "./currentLocation";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <CurrentLocation />
      </div>
      <div className="footer-info">
        <a target="_blank" href="">
          A Weather App by Ankit Gaurav
        </a>{" "}
      </div>
    </React.Fragment>
  );
}

export default App;
