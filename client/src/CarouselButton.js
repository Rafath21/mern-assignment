import React from "react";
import "./css/Carousel.css";
import left from "./icons/left-arrow.svg";
import right from "./icons/right-arrow.svg";

export default function CarouselButton({ direction, moveSlide }) {
  return (
    <button
      onClick={moveSlide}
      className={direction === "next" ? "slide-button next" : "slide-button prev"}
    >
      <img src={direction === "next" ? right : left}/>
    </button>
  );
}