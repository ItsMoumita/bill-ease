import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams, useNavigate } from 'react-router-dom';

const OrganizerDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [bill, setBill] = useState(null);

  useEffect(() => {
    fetch('/Bills.json')
      .then(res => res.json())
      .then(data => {
        const selected = data.find(item => item.id === parseInt(id));
        if (selected) {
          setBill(selected);
        } else {
          navigate('/'); // redirect if not found
        }
      });
  }, [id, navigate]);

  if (!bill) {
    return <div className="text-center mt-10 text-xl text-gray-700">Loading details...</div>;
  }

  return (
   <div className="w-11/12 mx-auto rounded-xl mt-9 mb-9 flex flex-col min-h-[71vh] bg-gradient-to-r from-blue-500 to-cyan-500" data-aos="fade-up">
     {/* <Helmet>
                    <title>BillEase | {bill.bill_type} </title>
                </Helmet> */}
        <div className="max-w-4xl md:h-[67vh] mx-auto mt-10  shadow-lg rounded-2xl p-6 w-11/12 mb-9 bg-white">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
        <img
          src={bill.icon}
          alt={bill.bill_type}
          className="h-48 w-48 object-contain"
        />
        <div className="flex-1">
          <h2 className="text-3xl font-bold  text-gray-700 ">{bill.organization}</h2>
          <p className="text-sm text-gray-600 font-semibold mb-4 capitalize">{bill.bill_type}</p>
          <p className="text-gray-700 mb-4">{bill.description}</p>
          <p className="mb-2 text-gray-600"><span>Amount:</span> ৳{bill.amount}</p>
          <p className="mb-2 text-gray-600"><span>Due Date:</span> {new Date(bill['due-date']).toLocaleDateString()}</p>
          <p className="mb-4 text-gray-600"><span>Account Number:</span> {bill.account_number}</p>
          <div>
            <strong className="block mb-2 text-gray-600">Services:</strong>
            <ul className="list-disc list-inside text-gray-700">
              {bill.services.map((service, idx) => (
                <li key={idx}>{service}</li>
              ))}
            </ul>
          </div>
          <button
            onClick={() => navigate(-1)}
            className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-2 rounded hover:scale-105 transition mt-8"
          >
            ← Back
          </button>
        </div>
      </div>
    </div>
   </div>
  );
};

export default OrganizerDetails;
