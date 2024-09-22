

// import React, { useState } from 'react';
// import axios from 'axios';
// import Sidebar from '../AdminPages/sidebar';
// import Swal from 'sweetalert2';

// const AddDoctor = () => {
//   const [formData, setFormData] = useState({
//     staff_name: '',
//     email: '',
//     password: '',
//     specialty: '',
//     bio: ''
//   });
//   const [profileImage, setProfileImage] = useState(null);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleImageChange = (e) => {
//     setProfileImage(e.target.files[0]);
//   };

//   const resetForm = () => {
//     setFormData({
//       staff_name: '',
//       email: '',
//       password: '',
//       specialty: '',
//       bio: ''
//     });
//     setProfileImage(null);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const data = new FormData();
//     for (const key in formData) {
//       data.append(key, formData[key]);
//     }
//     if (profileImage) {
//       data.append('profile_image', profileImage);
//     }

//     try {
//       const response = await axios.post('http://localhost:5000/api/admin/add-doctor', data, {
//         headers: { 'Content-Type': 'multipart/form-data' }
//       });
//       Swal.fire('Success', 'Doctor added successfully', 'success');
//       resetForm(); // Clear the form after successful submission
//     } catch (error) {
//       Swal.fire('Error', 'Failed to add doctor', 'error');
//       console.error('Error adding doctor:', error);
//     }
//   };

//   return (
//     <>
//       <Sidebar />
//       <div className="max-w-md mx-auto mt-10">
//         <h2 className="text-2xl font-bold mb-4">Add New Doctor</h2>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <label htmlFor="staff_name" className="block mb-1">Name</label>
//             <input
//               type="text"
//               id="staff_name"
//               name="staff_name"
//               value={formData.staff_name}
//               onChange={handleChange}
//               className="w-full px-3 py-2 border rounded"
//               required
//             />
//           </div>
//           <div>
//             <label htmlFor="email" className="block mb-1">Email</label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               className="w-full px-3 py-2 border rounded"
//               required
//             />
//           </div>
//           <div>
//             <label htmlFor="password" className="block mb-1">Password</label>
//             <input
//               type="password"
//               id="password"
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//               className="w-full px-3 py-2 border rounded"
//               required
//             />
//           </div>
//           <div>
//             <label htmlFor="specialty" className="block mb-1">Specialty</label>
//             <input
//               type="text"
//               id="specialty"
//               name="specialty"
//               value={formData.specialty}
//               onChange={handleChange}
//               className="w-full px-3 py-2 border rounded"
//               required
//             />
//           </div>
//           <div>
//             <label htmlFor="bio" className="block mb-1">Bio</label>
//             <textarea
//               id="bio"
//               name="bio"
//               value={formData.bio}
//               onChange={handleChange}
//               className="w-full px-3 py-2 border rounded"
//             />
//           </div>
//           <div>
//             <label htmlFor="profile_image" className="block mb-1">Profile Image</label>
//             <input
//               type="file"
//               id="profile_image"
//               onChange={handleImageChange}
//               className="w-full px-3 py-2 border rounded"
//               accept="image/*"
//             />
//           </div>
//           <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
//             Add Doctor
//           </button>
//         </form>
//       </div>
//     </>
//   );
// };

// export default AddDoctor;






import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const AddDoctor = ({ onAddDoctor }) => {
  const [formData, setFormData] = useState({
    staff_name: "",
    email: "",
    password: "",
    specialty: "",
    bio: "",
  });
  const [profileImage, setProfileImage] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setProfileImage(e.target.files[0]);
  };

  const resetForm = () => {
    setFormData({
      staff_name: "",
      email: "",
      password: "",
      specialty: "",
      bio: "",
    });
    setProfileImage(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    for (const key in formData) {
      data.append(key, formData[key]);
    }
    if (profileImage) {
      data.append("profile_image", profileImage);
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/api/admin/add-doctor",
        data,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      resetForm();
      if (onAddDoctor) {
        onAddDoctor(response.data.doctor);
      }
    } catch (error) {
      Swal.fire("Error", "Failed to add doctor", "error");
      console.error("Error adding doctor:", error);
    }
  };

  return (
    <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="staff_name"
              className="block mb-1 text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="staff_name"
              name="staff_name"
              value={formData.staff_name}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block mb-1 text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="password"
              className="block mb-1 text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label
              htmlFor="specialty"
              className="block mb-1 text-sm font-medium text-gray-700"
            >
              Specialty
            </label>
            <input
              type="text"
              id="specialty"
              name="specialty"
              value={formData.specialty}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="bio"
            className="block mb-1 text-sm font-medium text-gray-700"
          >
            Bio
          </label>
          <textarea
            id="bio"
            name="bio"
            value={formData.bio}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-24 resize-none"
          />
        </div>
        <div>
          <label
            htmlFor="profile_image"
            className="block mb-1 text-sm font-medium text-gray-700"
          >
            Profile Image
          </label>
          <input
            type="file"
            id="profile_image"
            onChange={handleImageChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
            accept="image/*"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200"
        >
          Add Doctor
          
        </button>
      </form>
    </div>
  );
};

export default AddDoctor;