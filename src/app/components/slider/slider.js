'use client'
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import styles from "./slider.module.css";
export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div>
       <img src="/thuongnguyendo.jpg" alt="s" width={300} height={400}/>
      </div>
      <div>
      <img src="/tnd2.jpg" alt="" width={300} height={400}/>
      </div>
      <div>
      <img src="/tnd1.jpg" alt="" width={300} height={400}/>
      </div>
    </Slider>
  );
}


