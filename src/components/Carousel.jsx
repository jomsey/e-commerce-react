import React from "react";
import "./Carousel.css";
import Slider from "./Slider";
import urls from './../utils/homeSliderImageUrls';


export default function Carousel() {
    return (
        <div className="carousel">
            <Slider 
                  itemsPerDisplayNumber={1}
                  ImagesUrlsList={urls} />
        </div>
    );
}
