import React, { useState, useEffect, useRef } from "react";
// import { AiOutlineVerticalRight, AiOutlineVerticalLeft } from "react-icons/ai";
import "../public/css/style.css";
import poster from "../img/illustration.png";
import posterKecil from "../img/discount.png";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Slider() {

  return (
    <>
    <div className=" flex justify-center w-5/6 relative invisible sm:visible carousel-wrapper aspect-w-16 aspect-h-9" id="caresoul">
    <Carousel showThumbs={false} showArrows={true} showStatus={false} infiniteLoop={true} autoPlay delayLength={2000}>
      <img className="w-full object-cover rounded-xl aspect-w-16 aspect-h-9" src={poster} />
      <img className="w-full object-cover rounded-xl aspect-w-16 aspect-h-9" src={poster} />
      <img className="w-full object-cover rounded-xl aspect-w-16 aspect-h-9" src={poster} />
      <img className="w-full object-cover rounded-xl aspect-w-16 aspect-h-9" src={poster} />
    </Carousel>
  </div>
  <div className=" flex justify-center w-full h-80 top-0 relative sm:hidden carousel-wrapper aspect-w-16 aspect-h-9" id="caresoul">
  <Carousel showThumbs={false} showArrows={true} showStatus={false} infiniteLoop={true} autoPlay delayLength={2000}>
    <img className="w-full object-cover rounded-xl aspect-w-16 aspect-h-9" src={posterKecil} />
    <img className="w-full object-cover rounded-xl aspect-w-16 aspect-h-9" src={posterKecil} />
    <img className="w-full object-cover rounded-xl aspect-w-16 aspect-h-9" src={posterKecil} />
    <img className="w-full object-cover rounded-xl aspect-w-16 aspect-h-9" src={posterKecil} />
  </Carousel>
  </div>
  </>
  );
}
