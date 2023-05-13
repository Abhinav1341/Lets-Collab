import React from "react";
import "./App.css";
import ServiceOne from "./s1";
import ServiceTwo from "./s2";
import ServiceThree from "./s3";
import ServiceFour from "./s4";

function App() {
  function DarkMode() {
    let elem = document.body;
    elem.classList.toggle("dark");
  }

  return (
    <div className="main">
      <div className="page">
        <div className="collaborate">
          <h4>Lets Collaborate</h4>
        </div>
        <div className="services">
          <ServiceOne />
          <ServiceTwo />
          <ServiceThree />
          <ServiceFour />
          <button className="dark-mode" onClick={DarkMode}>
            {" "}
            Toggle Night Mode{" "}
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
