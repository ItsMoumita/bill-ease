import React from 'react';
import { Helmet } from 'react-helmet-async';

const AboutPage = () => {
  return (
    <div className="w-11/12 mx-auto rounded-xl mt-9 mb-9 flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-cyan-500  min-h-[71vh]">
         <Helmet>
                        <title>BillEase | About </title>
                    </Helmet>
         <div className=" bg-gray-50 py-12 px-6 md:px-20 rounded-lg">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-blue-700 mb-6">About BillEase</h1>
        <p className="text-gray-700 text-lg leading-relaxed mb-8">
          BillEase is your one-stop solution for managing and paying bills effortlessly. Whether it’s electricity, gas, water, tuition, or credit card payments — we bring everything into one intuitive platform to simplify your monthly expenses.
        </p>

        <div className="grid md:grid-cols-3 gap-8 text-left mt-10">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">💳 Centralized Billing</h3>
            <p className="text-gray-600">Track and pay multiple utility bills in one place without juggling multiple platforms.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">📅 Timely Reminders</h3>
            <p className="text-gray-600">Never miss a due date. Receive timely alerts and notifications for upcoming payments.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">🔐 Secure Transactions</h3>
            <p className="text-gray-600">Powered by robust encryption and trusted gateways to ensure every payment is safe and secure.</p>
          </div>
        </div>

        <p className="text-gray-500 mt-10">Built for households, businesses, and students who want stress-free financial organization.</p>
      </div>
    </div>
    </div>
  );
};

export default AboutPage;
