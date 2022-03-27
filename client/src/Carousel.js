import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import "./css/Carousel.css";
import CarouselButton from "./CarouselButton";
function Carousel() {
  let [imgData, setImgData] = useState([]);
  const [slideIndex, setSlideIndex] = useState(1);

  const nextSlide = () => {
    if (slideIndex !== imgData.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === imgData.length) {
      setSlideIndex(1);
    }
  };
  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(imgData.length);
    }
  };
  useEffect(async () => {
    try {
      let config = {
        "Content-type": "application/json",
      };
      let res = await axios({
        url: "http://localhost:7000/api/v1",
        method: "GET",
        config,
      });
      let tempArr = [];
      res.data?.products?.map((product) => {
        tempArr.push(product.listOfImages[0]);
      });
      setImgData(tempArr);
    } catch (err) {
      alert("something went wrong");
    }
  }, []);
  return (
    <div className="container-slider">
      {imgData.map((url, index) => {
        return (
          <div
            key={index}
            className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
          >
            <img src={url} />
          </div>
        );
      })}
      <CarouselButton moveSlide={prevSlide} direction={"prev"} />
      <CarouselButton moveSlide={nextSlide} direction={"next"} />
    </div>
  );
}

export default Carousel;
