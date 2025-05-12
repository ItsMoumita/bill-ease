import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate, useLocation } from 'react-router-dom';

const Bills = () => {
    const [bills, setBills] = useState([]);
    const [paidBills, setPaidBills] = useState([]); // Track paid bills
    const [filter, setFilter] = useState(''); // Track selected bill type
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        fetch('/Bills.json')
            .then((res) => res.json())
            .then((data) => setBills(data))
            .catch((error) => console.error("Error loading bills:", error));
    }, []);

    useEffect(() => {
        if (location.state?.paidBillId && !paidBills.includes(location.state.paidBillId)) {
            setPaidBills((prev) => [...prev, location.state.paidBillId]);
        }
    }, [location.state, paidBills]);

    const handlePay = (id) => {
        if (paidBills.includes(id)) {
            alert('This bill has already been paid.');

            return;
        }
        navigate(`/bills/${id}`);
    };

    const filteredBills = filter
        ? bills.filter((bill) => bill.bill_type === filter)
        : bills;

    return (
        <div className="w-11/12 mx-auto my-10 grid grid-cols-1 gap-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl p-6">
            <Helmet>
                <title>BillEase | Bills </title>
            </Helmet>
            <h1 className='text-4xl font-bold text-white text-center mb-6'>My Bills</h1>

            <div className="mb-4">
                <label className="block text-white text-lg font-medium mb-2">Filter by Bill Type:</label>
                <select
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                    <option className='text-gray-700' value="">All</option>
                    {[...new Set(bills.map((bill) => bill.bill_type))].map((type) => (
                        <option className='text-gray-600' key={type} value={type}>{type}</option>
                    ))}
                </select>
            </div>

            {filteredBills.map((bill) => (
                <div
                    key={bill.id}
                    className="bg-white border border-gray-200 p-4 rounded-lg flex md:gap-18 items-center justify-between shadow-sm md:px-12 hover:scale-101 transition duration-300 ease-in-out"
                >
                    <div className="flex items-center gap-4">
                        <img
                            src={bill.icon}
                            alt={bill.bill_type}
                            className="w-46 h-46 object-contain"
                        />
                    </div>

                    <div className="flex-1 flex flex-col md:flex-row justify-between items-center px-4 text-sm md:text-2xl text-gray-700">
                        <div className="flex flex-col">
                            <span className="text-base font-bold text-gray-800">{bill.organization}</span>
                            <span className="italic text-gray-600">{bill.bill_type}</span>
                        </div>
                        <div className="font-medium">Amount: ৳{bill.amount}</div>
                        <div className="">Due Date: {new Date(bill['due-date']).toLocaleDateString('en-GB', {
                            day: '2-digit', month: 'long', year: 'numeric'
                        })}</div>
                    </div>

                    <div className="flex items-center gap-4">
                        {paidBills.includes(bill.id) ? (
                            <div className='flex items-center gap-4'>
                                <button
                                    onClick={() => handlePay(bill.id)}
                                    className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-xl px-12 py-2 rounded hover:scale-105 transition"
                                >
                                    Pay
                                </button>
                                <span className="text-green-500 text-2xl">✅</span>
                            </div>

                        ) : (
                            <button
                                onClick={() => handlePay(bill.id)}
                                className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-xl px-12 py-2 rounded hover:scale-105 transition"
                            >
                                Pay
                            </button>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Bills;
