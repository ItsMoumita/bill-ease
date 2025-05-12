import React from 'react';
import { FaBell, FaHistory, FaLayerGroup, FaCreditCard, FaMobileAlt, FaGlobe } from 'react-icons/fa';

const services = [
  {
    icon: <FaBell className="text-3xl text-indigo-600" />,
    title: "Bill Reminders",
    description: "Never miss a due date. Get timely notifications for all your upcoming bills.",
  },
  {
    icon: <FaHistory className="text-3xl text-green-600" />,
    title: "Payment History",
    description: "Track all your transactions with detailed payment history and receipts.",
  },
  {
    icon: <FaLayerGroup className="text-3xl text-yellow-600" />,
    title: "Multi-Bill Payment",
    description: "Pay multiple bills in one go — quick, simple, and efficient.",
  },
  {
    icon: <FaCreditCard className="text-3xl text-blue-600" />,
    title: "Secure Payments",
    description: "Use credit/debit cards, mobile banking, or wallet apps with full security.",
  },
  {
    icon: <FaMobileAlt className="text-3xl text-pink-600" />,
    title: "Mobile Friendly",
    description: "Manage and pay your bills from any device, anytime, anywhere.",
  },
  {
    icon: <FaGlobe className="text-3xl text-red-600" />,
    title: "National Coverage",
    description: "Supports all major utility companies across Bangladesh.",
  },
];

const MoreServices = () => {
  return (
    <div className="w-11/12 mx-auto py-12 px-4 mt-10 bg-white rounded-2xl shadow">
      <h2 className="text-2xl md:text-4xl font-bold text-center text-blue-700 mb-10">More Services We Offer</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, idx) => (
          <div key={idx} className="p-6 bg-gray-100 rounded-xl hover:shadow-md transition">
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">{service.title}</h3>
            <p className="text-gray-600 text-sm">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoreServices;
