
import React, { useState, useEffect } from "react";
import { ArrowLeft, Camera, Stethoscope, Save } from "lucide-react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getDoctorProfile, updateDoctorProfile, updateDoctorProfileImage } from "../../store/doctorSlice";

const DoctorProfileEditPage = () => {
  const dispatch = useDispatch();
  const { profile, error, loading } = useSelector((state) => state.doctor);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [specialty, setSpecialty] = useState("");
  const [bio, setBio] = useState("");
  const [profileImage, setProfileImage] = useState(null);
  const [localImageUrl, setLocalImageUrl] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    dispatch(getDoctorProfile());
  }, [dispatch]);

  useEffect(() => {
    if (profile) {
      setName(profile.staff_name || "");
      setEmail(profile.email || "");
      setSpecialty(profile.specialty || "");
      setBio(profile.bio || "");
      setProfileImage(profile.profile_image || null);
    }
  }, [profile]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await dispatch(
        updateDoctorProfile({
          staff_name: name,
          email,
          password,
          specialty,
          bio,
        })
      ).unwrap();
      toast.success("Profile updated successfully");
      setIsEditing(false);
      setPassword(""); // Clear password field after update
    } catch (error) {
      console.error("Error updating profile:", error);
      toast.error("Failed to update profile. Please try again later.");
    }
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (file) {
      try {
        const localUrl = URL.createObjectURL(file);
        setLocalImageUrl(localUrl);

        const result = await dispatch(updateDoctorProfileImage(file)).unwrap();

        setProfileImage(result.profile_image);
        toast.success("Profile image updated successfully");
      } catch (error) {
        console.error("Error uploading image:", error);
        toast.error("Failed to update profile image. Please try again later.");
        setLocalImageUrl(null);
      }
    }
  };

  const getCurrentImageUrl = () => {
    if (localImageUrl) {
      return localImageUrl;
    } else if (profileImage) {
      return `http://localhost:5000/${profileImage}`;
    }
    return "https://via.placeholder.com/150";
  };

  return (
    <>
      <ToastContainer />
      <div className="bg-blue-50 min-h-screen p-6">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:flex-shrink-0">
              <div className="p-8">
                <div className="relative">
                  <img
                    src={getCurrentImageUrl()}
                    alt="Profile"
                    className="w-48 h-48 rounded-full object-cover border-4 border-blue-500"
                  />
                  <label
                    htmlFor="profile-image-upload"
                    className="absolute bottom-0 right-0 bg-blue-500 text-white p-3 rounded-full hover:bg-blue-600 transition-colors cursor-pointer"
                  >
                    <Camera size={24} />
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
            </div>
            <div className="p-8 md:flex-1">
              <div className="flex items-center mb-6">
                <Link to="/home" className="text-blue-600 hover:text-blue-800 mr-4">
                  <ArrowLeft size={24} />
                </Link>
                <h2 className="text-3xl font-bold text-gray-800">
                  Edit Doctor Profile
                </h2>
              </div>

              {error && <div className="text-red-500 mb-4">{error}</div>}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
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
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
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
                  <label
                    htmlFor="specialty"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Specialty
                  </label>
                  <input
                    type="text"
                    id="specialty"
                    value={specialty}
                    onChange={(e) => setSpecialty(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                    disabled={!isEditing}
                  />
                </div>

                <div>
                  <label
                    htmlFor="bio"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Bio
                  </label>
                  <textarea
                    id="bio"
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows="4"
                    disabled={!isEditing}
                  ></textarea>
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
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
                      className="px-4 py-2 border border-transparent rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 flex items-center"
                    >
                      <Stethoscope className="mr-2" size={20} />
                      Edit Profile
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
                        className="px-4 py-2 border border-transparent rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 flex items-center"
                      >
                        <Save className="mr-2" size={20} />
                        Save Changes
                      </button>
                    </>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DoctorProfileEditPage;