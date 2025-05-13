import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { Link } from 'react-router';

const Footer = () => {
  return (
    <footer className="bg-blue-900 backdrop-blur-md text-gray-100 py-10 " data-aos="fade-up">
      <div className="w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center md:items-start text-center md:text-left gap-6">
        
        {/* Brand Info */}
        <div>
          <h3 className="text-2xl font-bold text-white">BillEase</h3>
          <p className="text-sm">Your trusted bill payment platform</p>
        </div>

        {/* Navigation Links */}
        <div className="space-y-2 flex flex-col md:flex-row gap-4">
          <Link to="/" className="block hover:text-blue-600">Home</Link>
          <Link to="/about" className="block hover:text-blue-600">About</Link>
          <Link to="/bills" className="block hover:text-blue-600">Bills</Link>
        </div>

        {/* Social Media */}
        <div className="flex gap-4 text-white text-2xl">
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <FaFacebookF className="hover:text-blue-800" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <FaTwitter className="hover:text-blue-800" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <FaInstagram className="hover:text-pink-600" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <FaLinkedinIn className="hover:text-blue-800" />
          </a>
        </div>
      </div>

      
    </footer>
  );
};

export default Footer;
