import React, { useContext } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import { toast } from 'react-toastify';

// Import necessary icons from react-icons
import { FaBolt, FaBurn, FaWifi, FaTint, FaCreditCard, FaBookOpen, FaMobileAlt, FaTv } from 'react-icons/fa';
import { Helmet } from 'react-helmet-async';

const iconMap = {
  electricity: FaBolt,
  gas: FaBurn,
  internet: FaWifi,
  water: FaTint,
  'credit card bill': FaCreditCard,
  tuition: FaBookOpen,
  mobile: FaMobileAlt,
  'cable tv': FaTv,
};

const BillsDetails = () => {
  const bill = useLoaderData();
  const { balance, setBalance } = useContext(AuthContext);
  const navigate = useNavigate();

  // Get the relevant icon from iconMap
  const TypeIcon = iconMap[bill.bill_type?.toLowerCase()];

  const handlePayBill = () => {
    if (balance >= bill.amount) {
      const updatedBalance = balance - bill.amount;
      setBalance(updatedBalance);
      localStorage.setItem("balance", updatedBalance); // Update localStorage
      toast.success('Bill paid successfully!');
      navigate('/bills', { state: { paidBillId: bill.id } }); // Pass the paid bill ID to the Bills page
    } else {
      toast.error('Insufficient balance to pay the bill.');
      navigate('/bills');
    }
  };

  return (
    <div className="w-11/12 mx-auto rounded-xl mt-9 mb-9 flex flex-col justify-center bg-gradient-to-r from-blue-500 to-cyan-500  min-h-[71vh] px-4 " data-aos="fade-up">
         <Helmet>
                        <title>BillEase | Bills-details </title>
                    </Helmet>

        <div className="w-full max-w-4xl  mx-auto my-10 flex flex-col md:flex-row items-center  md:items-start gap-10 bg-white p-6 md:py-18 rounded-xl shadow-md">
      
      {/* Left Column - Logo + Icon */}
      <div className="relative w-full md:w-1/2 flex justify-center items-center border rounded-lg p-6">
        <img src={bill.icon} alt={bill.bill_type} className="w-58 h-50 object-contain border border-gray-100" />
        {TypeIcon && (
          <TypeIcon className="absolute bottom-0 right-0 w-10 h-10 text-blue-600 bg-gray-200 p-1 rounded-sm" />
        )}
      </div>

      {/* Right Column - Bill Info */}
      <div className="flex flex-col gap-4 text-gray-700 w-full md:w-1/2 items-center md:items-start">
        <h2 className="text-2xl font-bold text-blue-700">{bill.organization}</h2>
        <p className="italic text-sm capitalize text-gray-600">{bill.bill_type} Bill</p>
        <p><span className="font-semibold">Amount:</span> ৳{bill.amount}</p>
        <p>
          <span className="font-semibold">Due Date:</span>{' '}
          {new Date(bill['due-date']).toLocaleDateString('en-GB', {
            day: '2-digit',
            month: 'long',
            year: 'numeric',
          })}
        </p>
        <button
          onClick={handlePayBill}
          className="mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 px-5 rounded-md w-max"
        >
          Pay Bill
        </button>
      </div>
    </div>
    </div>
  );
};

export default BillsDetails;
