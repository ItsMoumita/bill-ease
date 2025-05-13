import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Organizers = () => {
  const [bills, setBills] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('/bills.json')
      .then((res) => res.json())
      .then((data) => setBills(data))
      .catch((error) => console.error("Error loading bills:", error));
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '10px',
    arrows: true,
    responsive: [
      {
        breakpoint: 1280,
        settings: { slidesToShow: 2, centerMode: true, centerPadding: '40px' }
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2, centerMode: true, centerPadding: '30px' }
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1, centerMode: true, centerPadding: '20px' }
      }
    ],
    nextArrow: <div className="slick-next slick-arrow" style={{ right: '10px' }} />,
    prevArrow: <div className="slick-prev slick-arrow" style={{ left: '10px' }} />,
    beforeChange: () => {},
    afterChange: () => {}
  };

  return (
    <div className="bg-gray-100 py-10 px-4 md:px-8 w-11/12 mx-auto mt-10 rounded-2xl shadow-lg" data-aos="fade-up">
      <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-8 text-center" data-aos="zoom-in">Organizers</h2>
      <Slider {...settings} data-aos="fade-left">
        {bills.map((bill) => (
          <div
            key={bill.id}
            className="bg-white rounded-2xl overflow-hidden shadow-md mx-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg flex flex-col items-center text-center p-4"
            data-aos="flip-up"
          >
            <img
              src={bill.icon}
              alt={bill.bill_type}
              className="h-40 sm:h-48 w-full object-contain p-4"
              data-aos="zoom-in"
            />
            <div className="px-4 pb-4 w-full">
              <h3 className="text-lg font-semibold text-gray-800 mb-1" data-aos="fade-right">{bill.organization}</h3>
              <p className="text-sm text-blue-500 capitalize mb-2" data-aos="fade-left">{bill.bill_type}</p>
              <div className="flex items-center justify-center my-2" data-aos="zoom-in">
                <span className="text-yellow-400 mr-2">★★★★★</span>
                <span className="text-sm text-gray-600">(200+)</span>
              </div>
              <button
                onClick={() => navigate(`/organizer/${bill.id}`)}
                className="mt-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-2 rounded hover:scale-105 transition-transform duration-200"
                data-aos="fade-up"
              >
                View More
              </button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Organizers;
