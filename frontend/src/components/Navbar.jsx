


import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout, checkAuthStatus, getProfile } from '../store/authSlice';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(checkAuthStatus());
    if (isAuthenticated) {
      dispatch(getProfile());
    }
  }, [dispatch, isAuthenticated]);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogout = async () => {
    try {
      await dispatch(logout());
      navigate('/login');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  const getProfileImageUrl = () => {
    if (user && user.profile_image) {
      return `http://localhost:5000/${user.profile_image}`;
    }
    return "https://via.placeholder.com/40";
  };

  return (
    <nav className="bg-white shadow-md py-4">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="text-2xl font-bold text-gray-800">
          <Link to="/">WebsiteName</Link>
        </div>
        <ul className="hidden md:flex space-x-8">
          <li>
            <Link to="/" className="text-gray-600 hover:text-blue-500">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-gray-600 hover:text-blue-500">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="text-gray-600 hover:text-blue-500">
              Contact
            </Link>
          </li>
          <li>
            <Link to="/doctor" className="text-gray-600 hover:text-blue-500">
              Our Doctor
            </Link>
          </li>
        </ul>
        <div className="relative flex items-center space-x-4">
          {isAuthenticated ? (
            <>
              <img
                src={getProfileImageUrl()}
                alt="User"
                className="w-10 h-10 rounded-full cursor-pointer object-cover"
                onClick={handleDropdownToggle}
              />
              {isDropdownOpen && (
                <div
                  ref={dropdownRef}
                  className="absolute top-full right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10"
                >
                  <ul className="py-2">
                    <li>
                      <Link to="/profile" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                        My Profile
                      </Link>
                    </li>
                    <li>
                      <Link to="/history" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                        My History
                      </Link>
                    </li>
                    <li>
                      <Link to="/prescription" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                        My Prescription
                      </Link>
                    </li>
                    <li>
                      <button
                        onClick={handleLogout}
                        className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                      >
                        Logout
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </>
          ) : (
            <Link to="/login" className="text-gray-600 hover:text-blue-500">
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;