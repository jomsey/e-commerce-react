import React from "react";
import "./Carousel.css";
import Slider from "./Slider";

export default function Carousel() {
  return (
    <div className="carousel">
      <Slider itemsPerDisplayNumber={1} itemsList={[1, 2, 3, 4, 5, 6, 7]} />
    </div>
  );
}
