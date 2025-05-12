import React from 'react';
import Marquee from 'react-fast-marquee';
import { FaStar } from 'react-icons/fa';

const reviews = [
  {
    name: "Ayesha Rahman",
    comment: "Super easy to pay my electricity bills. Love the interface!",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/1.jpg"
  },
  {
    name: "Mehedi Hasan",
    comment: "Convenient and fast. Saves me time every month.",
    rating: 4,
    image: "https://randomuser.me/api/portraits/men/2.jpg"
  },
  {
    name: "Farzana Akter",
    comment: "Great support and very reliable service.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/3.jpg"
  },
  {
    name: "Shakil Ahmed",
    comment: "One-stop solution for all my bill payments!",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/4.jpg"
  },
  {
    name: "Nusrat Jahan",
    comment: "Secure, simple, and fast. Highly recommend.",
    rating: 4,
    image: "https://randomuser.me/api/portraits/women/5.jpg"
  },
];

const CustomerReviews = () => {
  return (
    <div className="w-11/12 mx-auto my-16 p-6 bg-white shadow-xl rounded-xl">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-700 mb-8">What Our Customers Say</h2>
      <Marquee gradient={false} speed={40} pauseOnHover>
        {reviews.map((review, index) => (
          <div
            key={index}
            className="min-w-[250px] h-[200px] max-w-sm bg-gray-100 rounded-lg shadow-md p-5 mx-4 flex-shrink-0"
          >
            <div className="flex items-center mb-3 gap-3">
              <img
                src={review.image}
                alt={review.name}
                className="w-10 h-10 rounded-full object-cover border-2 border-blue-400"
              />
              <div className="flex text-yellow-400">
                {[...Array(review.rating)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
            </div>
            <p className="text-gray-800 italic text-sm">"{review.comment}"</p>
            <p className="text-sm text-blue-600 mt-2 font-semibold">– {review.name}</p>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default CustomerReviews;
