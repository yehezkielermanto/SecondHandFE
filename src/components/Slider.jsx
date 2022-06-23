import React, { useState, useEffect, useRef } from "react";
// import { AiOutlineVerticalRight, AiOutlineVerticalLeft } from "react-icons/ai";
import "../public/css/style.css";
import poster from "../img/illustration.png";
import poster1 from "../img/illustration1.png";

const featuredProducts = [
  poster,
  poster1,
  poster,
  poster1,
];

let count = 0;
let slideInterval;
export default function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slideRef = useRef();

  const removeAnimation = () => {
    slideRef.current.classList.remove("fade-anim");
  };

  useEffect(() => {
    slideRef.current.addEventListener("animationend", removeAnimation);
    slideRef.current.addEventListener("mouseenter", pauseSlider);
    slideRef.current.addEventListener("mouseleave", startSlider);

    startSlider();
    return () => {
      pauseSlider();
    };
    // eslint-disable-next-line
  }, []);

  const startSlider = () => {
    slideInterval = setInterval(() => {
      handleOnNextClick();
    }, 3000);
  };

  const pauseSlider = () => {
    clearInterval(slideInterval);
  };

  const handleOnNextClick = () => {
    count = (count + 1) % featuredProducts.length;
    setCurrentIndex(count);
    slideRef.current.classList.add("fade-anim");
  };
  const handleOnPrevClick = () => {
    const productsLength = featuredProducts.length;
    count = (currentIndex + productsLength - 1) % productsLength;
    setCurrentIndex(count);
    slideRef.current.classList.add("fade-anim");
  };

  return (
    <div ref={slideRef} className="flex justify-center mt-10 w-full select-none relative">
      <div className="aspect-w-16 aspect-h-9 min-w-0">
        <img src={featuredProducts[currentIndex]} alt="" />
      </div>

      <div className="absolute w-full top-1/2 transform -translate-y-1/2 flex justify-between items-center">
        <button
          className="w-1/2 h-fit bg-opacity-100 cursor-pointer hover:bg-opacity-100 transition"
          onClick={handleOnPrevClick}
        >
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
        </button>
        <button
          className="w-1/2 h-fit bg-opacity-100 cursor-pointer hover:bg-opacity-100 transition"
          onClick={handleOnNextClick}
        >
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
        </button>
      </div>
    </div>
  );
}
