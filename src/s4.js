import React from "react";
import "./App.css";
import s4_image from "./s4-image.jpg";
import pointer from "./pointer.svg";

export default function ServiceFour() {
  return (
    <div className="s4">
      <div className="service-info">
        <h2>Embrace Cloud</h2>
        <div className="image-holder-phone">
          <img
            src={s4_image}
            className="service-image-ns"
            alt="service-image"
          />
        </div>
        <div className="service-details">
          <h3>
            With Cloud-First accelerate innovation and optimize performance
          </h3>
        </div>
        <div className="service-link">
          <p>Cloud Services</p>
          <img src={pointer} className="pointer" alt="arrow" />
        </div>
      </div>
      <div className="outer-image-holder">
        <div className="image-holder-pc">
          <img
            src={s4_image}
            className="service-image-ns"
            alt="service-image"
          />
        </div>
      </div>
    </div>
  );
}
