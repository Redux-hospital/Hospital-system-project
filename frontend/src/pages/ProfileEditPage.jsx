import React, { useState, useEffect } from "react";
import { ArrowLeft, Camera } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { getProfile, updateProfile, updateProfileImage } from '../store/authSlice';
import Swal from 'sweetalert2';

const ProfileEditPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(state => state.auth.user);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profileImage, setProfileImage] = useState(null);
  const [localImageUrl, setLocalImageUrl] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    dispatch(getProfile())
      .unwrap()
      .then((userData) => {
        setName(userData.username || "");
        setEmail(userData.email || "");
        setProfileImage(userData.profile_image || null);
      })
      .catch((error) => {
        console.error('Error fetching profile:', error);
        Swal.fire('Error', 'Failed to fetch profile data', 'error');
      });
  }, [dispatch]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await dispatch(updateProfile({ username: name, email, password })).unwrap();
      Swal.fire('Success', 'Profile updated successfully', 'success');
      setIsEditing(false);
      setPassword(""); // Clear password field after update
    } catch (error) {
      console.error('Error updating profile:', error);
      Swal.fire('Error', 'Failed to update profile', 'error');
    }
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (file) {
      try {
        // Create a local URL for the selected image
        const localUrl = URL.createObjectURL(file);
        setLocalImageUrl(localUrl);

        // Upload the image
        const result = await dispatch(updateProfileImage(file)).unwrap();
        
        // Update the profileImage state with the new image path from the server
        setProfileImage(result.profile_image);
        
        Swal.fire('Success', 'Profile image updated successfully', 'success');
      } catch (error) {
        console.error('Error uploading image:', error);
        Swal.fire('Error', 'Failed to update profile image', 'error');
        // Reset the local image URL if upload fails
        setLocalImageUrl(null);
      }
    }
  };

  // Function to get the current image URL
  const getCurrentImageUrl = () => {
    if (localImageUrl) {
      return localImageUrl;
    } else if (profileImage) {
      return `http://localhost:5000/${profileImage}`;
    }
    return "data:image/jpeg;base64,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";
  };

  return (
    <>
      <Navbar />
      <div className="bg-gray-100 min-h-screen p-6">
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-8">
            <div className="flex items-center mb-6">
              <Link to="/" className="text-gray-600 hover:text-blue-500 mr-4">
                <ArrowLeft size={24} />
              </Link>
              <h2 className="text-2xl font-bold">Edit Profile</h2>
            </div>

            <div className="mb-8 flex justify-center">
              <div className="relative">
                <img
                  src={getCurrentImageUrl()}
                  alt="Profile"
                  className="w-36 h-36 rounded-full object-cover"
                />
                <label htmlFor="profile-image-upload" className="absolute bottom-0 right-0 bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition-colors cursor-pointer">
                  <Camera size={20} />
                </label>
                <input
                  id="profile-image-upload"
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                  disabled={!isEditing}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                  disabled={!isEditing}
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                  New Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  disabled={!isEditing}
                />
              </div>

              <div className="flex justify-end space-x-4">
                {!isEditing ? (
                  <button
                    type="button"
                    onClick={() => setIsEditing(true)}
                    className="px-4 py-2 border border-transparent rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Edit
                  </button>
                ) : (
                  <>
                    <button
                      type="button"
                      onClick={() => setIsEditing(false)}
                      className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-2 border border-transparent rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                    >
                      Save
                    </button>
                  </>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProfileEditPage;