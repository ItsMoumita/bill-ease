import React from 'react';
import Marquee from 'react-fast-marquee';

const BillPaymentOffers = () => {
  const offers = [
    {
      id: 1,
      text: "⚡ Get 10% cashback on electricity bills with bKash!",
      bg: "bg-yellow-100"
    },
    {
      id: 2,
      text: "🔥 Flat 100 Taka off on your gas bill (first-time users)",
      bg: "bg-red-100"
    },
    {
      id: 3,
      text: "💧 Pay water bills with Nagad and earn reward points",
      bg: "bg-blue-100"
    },
    {
      id: 4,
      text: "📶 Internet bill cashback up to 15% with City Bank card",
      bg: "bg-green-100"
    },
    {
      id: 5,
      text: "💳 Credit card EMI option available for tuition fees",
      bg: "bg-purple-100"
    }
  ];

  return (
    <div className="w-11/12 mx-auto bg-gray-50 py-6 px-4 mt-10 rounded-xl shadow">
      <h2 className="text-2xl md:text-4xl font-bold text-center text-blue-600 mb-12">🔥 Offers on Bill Payments</h2>
      <Marquee pauseOnHover gradient={false} speed={60}>
        {offers.map((offer) => (
          <div
            key={offer.id}
            className={`text-md md:text-lg font-medium text-gray-700 px-6 py-3 mx-2 rounded-xl shadow ${offer.bg} whitespace-nowrap`}
          >
            {offer.text}
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default BillPaymentOffers;
