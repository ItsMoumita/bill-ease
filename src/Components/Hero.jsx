import React, { useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="relative w-11/12 mx-auto mt-10">
      {/* Text Overlay Centered */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center z-10 px-4" data-aos="fade-up">
        <h1 className="text-3xl md:text-5xl font-bold text-white drop-shadow-lg">
          Welcome to <span className="md:text-6xl animated-gradient">BillEase</span>
        </h1>
        <p className="text-base md:text-lg text-white mt-3 drop-shadow-md">
          Manage, track, and pay all your utility bills in one place — simple, fast, and secure.
        </p>
      </div>

      {/* Carousel */}
      <Carousel
        showThumbs={false}
        infiniteLoop
        autoPlay
        interval={3000}
        showStatus={false}
        dynamicHeight={false}
        className="rounded-2xl shadow-lg overflow-hidden"
        data-aos="zoom-in"
      >
        <div className="h-[80vh]">
          <img
            src="https://www.shutterstock.com/image-photo/success-business-concept-positive-double-600nw-2251022959.jpg"
            alt="Slide 1"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="h-[80vh]">
          <img
            src="https://www.shutterstock.com/image-vector/online-banking-login-protection-concept-600nw-2125197293.jpg"
            alt="Slide 2"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="h-[80vh]">
          <img
            src="https://static.vecteezy.com/system/resources/previews/015/235/458/non_2x/financial-management-concept-and-investment-banner-template-of-payment-with-money-free-vector.jpg"
            alt="Slide 3"
            className="h-full w-full object-cover"
          />
        </div>
      </Carousel>
    </div>
  );
};

export default Hero;
