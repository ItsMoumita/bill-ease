import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

const faqData = [
  {
    question: "How do I pay my utility bills through this site?",
    answer: "You can log in to your account, go to the home, select the bill type, enter the details, and proceed with a secure payment using your preferred method.",
  },
  {
    question: "Is there a service charge for paying bills online?",
    answer: "Most billers are free to pay, but some may have a small processing fee. It will be clearly shown before you confirm the payment.",
  },
  {
    question: "Can I schedule payments in advance?",
    answer: "Yes, you can set bill reminders and even schedule automatic payments so you never miss a due date.",
  },
  {
    question: "What if I accidentally pay the wrong bill?",
    answer: "If a mistake occurs, contact our support team immediately. We’ll work with the biller to resolve the issue.",
  },
  {
    question: "Is my payment information secure?",
    answer: "Absolutely. We use industry-standard encryption and security protocols to keep your data safe.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-11/12  mx-auto py-12 px-4 mt-10 bg-white rounded-2xl shadow mb-12">
      <h2 className="text-2xl md:text-4xl font-bold text-center text-blue-700 mb-10">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqData.map((item, index) => (
          <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
            <button
              onClick={() => toggleFAQ(index)}
              className="flex justify-between items-center w-full p-4 text-left text-gray-800 font-medium hover:bg-gray-100 transition"
            >
              <span>{item.question}</span>
              <FaChevronDown
                className={`transform transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>
            {openIndex === index && (
              <div className="p-4 bg-gray-50 text-sm text-gray-600">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
