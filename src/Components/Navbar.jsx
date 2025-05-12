import React, { useState, useContext } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await logOut();
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <>
      <nav className="rounded-xl sticky top-0 bg-white/80 backdrop-blur-md shadow-md w-11/12 mx-auto flex items-center justify-between py-4 px-6 md:px-10 z-40">
        {/* Mobile Menu Button (Shown only on mobile) */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-black focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>

        {/* Logo */}
        <div className="text-xl font-bold text-blue-600">BillEase</div>

        {/* Centered Links for Desktop */}
        <div className="hidden md:flex space-x-6 font-bold text-black">
           <NavLink to="/"><a  className="hover:text-blue-600 hover:scale-105 transition">Home</a></NavLink>
          <NavLink to="/about"><a  className="hover:text-blue-600 hover:scale-105 transition">About</a></NavLink>
          <NavLink to="profile"><a className="hover:text-blue-600 hover:scale-105 transition">My Profile</a></NavLink>
          <NavLink to="bills"><a  className="hover:text-blue-600 hover:scale-105 transition">Bills</a></NavLink>
        </div>

        {/* Buttons for Desktop */}
        <div className="hidden md:flex items-center space-x-4">
          {!user ? (
            <>
              <Link to="/registration">
                <button className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-2 rounded hover:scale-105 transition">
                  Get Started
                </button>
              </Link>
              <Link to="/login">
                <button className="border border-blue-600 text-blue-600 px-4 py-2 rounded hover:bg-blue-100 hover:scale-105 transition">
                  Login
                </button>
              </Link>
            </>
          ) : (
            <>
              <span className="text-black font-medium">{user.displayName}</span>
              <button
                onClick={handleLogout}
                className="border border-blue-600 text-blue-600 px-4 py-2 rounded hover:bg-blue-100 hover:scale-105 transition"
              >
                Logout
              </button>
              <img
                src={user.photoURL}
                alt="Profile"
                className="w-10 h-10 rounded-full border border-gray-300"
              />
            </>
          )}
        </div>
      </nav>

      {/* Mobile Slide-in Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div className="flex justify-end p-4">
          <button
            onClick={() => setIsMenuOpen(false)}
            className="text-black focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <nav className="flex flex-col space-y-4 px-6 font-bold text-black">
          <div>
            {user? (
              <div className="flex items-center space-x-2"> 
                <img
                src={user.photoURL}
                alt="Profile"
                className="w-10 h-10 rounded-full border border-gray-300"
              />
               <p className="text-black font-medium">{user.displayName}</p>
              </div>
          ):("")}
          </div>
         <NavLink to="/"><a  className="hover:text-blue-600 hover:scale-105 transition">Home</a></NavLink>
          <NavLink to="/about"><a  className="hover:text-blue-600 hover:scale-105 transition">About</a></NavLink>
          <NavLink to="profile"><a className="hover:text-blue-600 hover:scale-105 transition">My Profile</a></NavLink>
          <NavLink to="bills"><a  className="hover:text-blue-600 hover:scale-105 transition">Bills</a></NavLink>
          {!user ? (
            <>
              <Link to="/registration">
                <button className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-2 rounded hover:scale-105 transition">
                  Get Started
                </button>
              </Link>
              <Link to="/login">
                <button className="border border-blue-600 text-blue-600 px-4 py-2 rounded hover:bg-blue-100 hover:scale-105 transition">
                  Login
                </button>
              </Link>
            </>
          ) : (
            <>
             
              <button
                onClick={handleLogout}
                className="border border-blue-600 text-blue-600 px-4 py-2 rounded hover:bg-blue-100 hover:scale-105 transition"
              >
                Logout
              </button>
             
            </>
          )}
        </nav>
      </div>
    </>
  );
};

export default Navbar;
