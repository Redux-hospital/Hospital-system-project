
// Sidebar.js
import React, { useEffect } from 'react';
import { FaHome, FaUserMd, FaCalendarAlt, FaFileAlt, FaSignOutAlt } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout, checkAuthStatus } from '../../../store/authSlice'; // Update this path as necessary
import { getDoctorProfile } from '../../../store/doctorSlice'; // Ensure this path is correct

const Sidebar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isAuthenticated, userType } = useSelector((state) => state.auth);
  const { profile } = useSelector((state) => state.doctor);

  useEffect(() => {
    dispatch(checkAuthStatus());
    dispatch(getDoctorProfile()); // Fetch doctor profile when the sidebar is mounted
  }, [dispatch]);

  const handleLogout = async () => {
    try {
      await dispatch(logout());
      navigate('/login');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  // Hide the sidebar if the user is not authenticated or not a doctor
  if (!isAuthenticated || userType !== 'doctor') {
    return null;
  }

  return (
    <div className="flex flex-col h-screen w-64 bg-gray-800 text-white">
      <div className="flex flex-col items-center justify-center h-48 bg-gray-900">
        <img
          className="w-24 h-24 rounded-full mb-2"
          src={`http://localhost:5000/${profile?.profile_image}`}
          alt={profile?.staff_name || 'Doctor'}
        />
        <h1 className="text-xl font-semibold mt-2">Doctor Dashboard</h1>
        <p className="text-sm text-gray-300 mt-1">
          {profile?.staff_name || 'Doctor'}
        </p>
        {profile?.specialty && (
          <p className="text-xs text-gray-400 mt-1">{profile.specialty}</p>
        )}
      </div>
      <nav className="flex-1 mt-4">
        <ul className="space-y-2">
          <li>
            <Link to="/home" className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-700">
              <FaHome className="mr-3" /> Home
            </Link>
          </li>
          <li>
            <Link to="/DoctorProfile" className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-700">
              <FaUserMd className="mr-3" /> My Profile
            </Link>
          </li>
          <li>
            <Link to="/appointments" className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-700">
              <FaCalendarAlt className="mr-3" /> Appointments
            </Link>
          </li>
          <li>
            <Link to="/patients" className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-700">
              <FaUserMd className="mr-3" /> Patients
            </Link>
          </li>
          <li>
            <Link to="/reports" className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-700">
              <FaFileAlt className="mr-3" /> Reports
            </Link>
          </li>
        </ul>
      </nav>
      <div className="px-4 py-2 bg-gray-900">
        <button
          onClick={handleLogout}
          className="flex items-center text-gray-300 hover:bg-gray-700 w-full text-left px-4 py-2"
        >
          <FaSignOutAlt className="mr-3" /> Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
