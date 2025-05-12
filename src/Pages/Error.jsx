import React from 'react';
import { useNavigate } from 'react-router';
import { FaExclamationTriangle } from 'react-icons/fa';

const Error = () => {
  const navigate = useNavigate();

  const handleBackHome = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-300 text-center p-6">
      <FaExclamationTriangle className="text-yellow-500 text-6xl mb-4" />
      <h1 className="text-4xl font-bold text-gray-800 mb-2">Oops! Something went wrong.</h1>
      <p className="text-gray-600 mb-6">The page you are looking for doesn't exist or an unexpected error occurred.</p>
      <button
        onClick={handleBackHome}
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md shadow-md transition"
      >
        Back to Home
      </button>
    </div>
  );
};

export default Error;
