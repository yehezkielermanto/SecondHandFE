import React, { useState, useEffect, useRef } from "react";
// import { AiOutlineVerticalRight, AiOutlineVerticalLeft } from "react-icons/ai";
import "../public/css/style.css";
import poster from "../img/illustration.png";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Slider() {

  return (
    <div className=" flex justify-center w-5/6 relative sm:aspect-auto aspect-[6/5]" id="caresoul">
    <Carousel showThumbs={false} showArrows={true} showStatus={false} infiniteLoop={true} autoPlay delayLength={2000}>
      <img className="w-full sm:aspect-auto aspect-[6/5] object-cover rounded-xl" src={poster} />
      <img className="w-full sm:aspect-auto aspect-[6/5] object-cover rounded-xl" src={poster} />
      <img className="w-full sm:aspect-auto aspect-[6/5] object-cover rounded-xl" src={poster} />
      <img className="w-full sm:aspect-auto aspect-[6/5] object-cover rounded-xl" src={poster} />
    </Carousel>
  </div>
  );
}
