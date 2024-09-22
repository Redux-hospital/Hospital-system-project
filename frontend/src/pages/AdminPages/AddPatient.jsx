// import React, { useState } from 'react';
// import Sidebar from '../AdminPages/sidebar';

// const AddPatient = () => {
//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [image, setImage] = useState(null);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Here you would typically send the form data to your backend
//     console.log('Submitting patient data:', { username, email, image });
//   };

//   return (
//  <>
//  <Sidebar/>
//  <div className="max-w-md mx-auto mt-10">
//       <h2 className="text-2xl font-bold mb-4">Add New Patient</h2>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div>
//           <label htmlFor="username" className="block mb-1">Username</label>
//           <input
//             type="text"
//             id="username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             className="w-full px-3 py-2 border rounded"
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="email" className="block mb-1">Email</label>
//           <input
//             type="email"
//             id="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="w-full px-3 py-2 border rounded"
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="image" className="block mb-1">Profile Image</label>
//           <input
//             type="file"
//             id="image"
//             onChange={(e) => setImage(e.target.files[0])}
//             className="w-full px-3 py-2 border rounded"
//             accept="image/*"
//           />
//         </div>
//         <button type="submit" className="w-full bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">
//           Add Patient
//         </button>
//       </form>
//     </div>
//  </>
//   );
// };

// export default AddPatient;





// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Sidebar from '../AdminPages/sidebar';
// import axios from 'axios';
// import Swal from 'sweetalert2';

// const AddPatient = () => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     username: '',
//     email: '',
//     password: '',
//     gender: '',
//     dob: '',
//     profile_image: null,
//   });

//   const handleChange = (e) => {
//     const { name, value, type, files } = e.target;
//     setFormData(prevState => ({
//       ...prevState,
//       [name]: type === 'file' ? files[0] : value
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const data = new FormData();
//     for (const key in formData) {
//       data.append(key, formData[key]);
//     }

//     try {
//       const response = await axios.post('http://localhost:5000/api/patients', data, {
//         headers: { 'Content-Type': 'multipart/form-data' }
//       });
//       Swal.fire({
//         title: 'Success!',
//         text: 'Patient added successfully',
//         icon: 'success',
//         confirmButtonText: 'OK'
//       }).then(() => {
//         navigate('/AdminDashboard/add-patient'); // Adjust this route as needed
//       });
//     } catch (error) {
//       Swal.fire({
//         title: 'Error!',
//         text: 'Failed to add patient',
//         icon: 'error',
//         confirmButtonText: 'OK'
//       });
//     }
//   };

//   return (
//     <div className="flex">
//       <Sidebar />
//       <div className="flex-1 p-10 bg-gray-100">
//         <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
//           <h2 className="text-2xl font-bold mb-6 text-center text-green-600">Add New Patient</h2>
//           <form onSubmit={handleSubmit} className="space-y-4">
//             <div>
//               <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
//               <input type="text" id="username" name="username" value={formData.username} onChange={handleChange} className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500" required />
//             </div>
//             <div>
//               <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
//               <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500" required />
//             </div>
//             <div>
//               <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
//               <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500" required />
//             </div>
//             <div>
//               <label htmlFor="gender" className="block text-sm font-medium text-gray-700">Gender</label>
//               <select id="gender" name="gender" value={formData.gender} onChange={handleChange} className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500" required>
//                 <option value="">Select Gender</option>
//                 <option value="male">Male</option>
//                 <option value="female">Female</option>
//               </select>
//             </div>
//             <div>
//               <label htmlFor="dob" className="block text-sm font-medium text-gray-700">Date of Birth</label>
//               <input type="date" id="dob" name="dob" value={formData.dob} onChange={handleChange} className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500" required />
//             </div>
//             <div>
//               <label htmlFor="profile_image" className="block text-sm font-medium text-gray-700">Profile Image</label>
//               <input type="file" id="profile_image" name="profile_image" onChange={handleChange} className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500" accept="image/*" />
//             </div>
//             <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
//               Add Patient
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AddPatient;





import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../AdminPages/sidebar';
import axios from 'axios';
import Swal from 'sweetalert2';

const AddPatient = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    gender: '',
    dob: '',
    profile_image: null,
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === 'file' ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    for (const key in formData) {
      data.append(key, formData[key]);
    }

    try {
      const response = await axios.post('http://localhost:5000/api/patients', data, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      Swal.fire({
        title: 'Success!',
        text: 'Patient added successfully',
        icon: 'success',
        confirmButtonText: 'OK',
      }).then(() => {
        // تفريغ الحقول بعد النجاح
        setFormData({
          username: '',
          email: '',
          password: '',
          gender: '',
          dob: '',
          profile_image: null,
        });
        navigate('/AdminDashboard/add-patient'); // Adjust this route as needed
      });
    } catch (error) {
      Swal.fire({
        title: 'Error!',
        text: 'Failed to add patient',
        icon: 'error',
        confirmButtonText: 'OK',
      });
    }
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-10 bg-gray-100">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold mb-6 text-center text-green-600">Add New Patient</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
              <input type="text" id="username" name="username" value={formData.username} onChange={handleChange} className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500" required />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500" required />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500" required />
            </div>
            <div>
              <label htmlFor="gender" className="block text-sm font-medium text-gray-700">Gender</label>
              <select id="gender" name="gender" value={formData.gender} onChange={handleChange} className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500" required>
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <div>
              <label htmlFor="dob" className="block text-sm font-medium text-gray-700">Date of Birth</label>
              <input type="date" id="dob" name="dob" value={formData.dob} onChange={handleChange} className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500" required />
            </div>
            <div>
              <label htmlFor="profile_image" className="block text-sm font-medium text-gray-700">Profile Image</label>
              <input type="file" id="profile_image" name="profile_image" onChange={handleChange} className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500" accept="image/*" />
            </div>
            <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
              Add Patient
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddPatient;
