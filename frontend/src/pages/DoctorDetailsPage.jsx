// // admin-DoctorProfilePage.jsx
// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';

// const DoctorProfilePage = () => {
//   const [doctor, setDoctor] = useState(null);
//   const { id } = useParams();

//   useEffect(() => {
//     fetchDoctor();
//   }, [id]);

//   const fetchDoctor = async () => {
//     try {
//       const response = await fetch(`http://localhost:5000/api/doctors/${id}`);
//       const data = await response.json();
//       setDoctor(data);
//     } catch (error) {
//       console.error('Error fetching doctor:', error);
//     }
//   };

//   if (!doctor) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="bg-gray-100 flex flex-col min-h-screen">
//       <Navbar />
//       <div className="flex-grow py-10">
//         <div className="container mx-auto px-4">
//           <div className="bg-white rounded-lg shadow-lg overflow-hidden">
//             <div className="md:flex">
//               <div className="md:flex-shrink-0">
//                 <img
//                   className="h-48 w-full object-cover md:w-48"
//                   src={`http://localhost:5000/${doctor.profile_image}` || 'https://via.placeholder.com/150'}
//                   alt={doctor.staff_name}
//                 />
//               </div>
//               <div className="p-8">
//                 <h1 className="text-3xl font-bold text-gray-800 mb-2">{doctor.staff_name}</h1>
//                 <h2 className="text-xl text-gray-600 mb-4">{doctor.specialty}</h2>
//                 <p className="text-gray-700 mb-4">{doctor.bio}</p>
//                 <a
//                   href={`mailto:${doctor.email}`}
//                   className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//                 >
//                   Contact Doctor
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default DoctorProfilePage;










// // admin-DoctorProfilePage.jsx
// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
// import AppointmentForm from './admin-AppointmentForm';

// const DoctorProfilePage = () => {
//   const [doctor, setDoctor] = useState(null);
//   const [showAppointmentForm, setShowAppointmentForm] = useState(false);
//   const { id } = useParams();

//   useEffect(() => {
//     fetchDoctor();
//   }, [id]);

//   const fetchDoctor = async () => {
//     try {
//       const response = await fetch(`http://localhost:5000/api/doctors/${id}`);
//       const data = await response.json();
//       setDoctor(data);
//     } catch (error) {
//       console.error('Error fetching doctor:', error);
//     }
//   };

//   if (!doctor) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="bg-gray-100 flex flex-col min-h-screen">
//       <Navbar />
//       <div className="flex-grow py-10">
//         <div className="container mx-auto px-4">
//           <div className="bg-white rounded-lg shadow-lg overflow-hidden">
//             <div className="md:flex">
//               <div className="md:flex-shrink-0">
//                 <img
//                   className="h-48 w-full object-cover md:w-48"
//                   src={`http://localhost:5000/${doctor.profile_image}` || 'https://via.placeholder.com/150'}
//                   alt={doctor.staff_name}
//                 />
//               </div>
//               <div className="p-8">
//                 <h1 className="text-3xl font-bold text-gray-800 mb-2">{doctor.staff_name}</h1>
//                 <h2 className="text-xl text-gray-600 mb-4">{doctor.specialty}</h2>
//                 <p className="text-gray-700 mb-4">{doctor.bio}</p>
//                 <div className="flex space-x-4">
//                   <a
//                     href={`mailto:${doctor.email}`}
//                     className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//                   >
//                     Contact Doctor
//                   </a>
//                   <button
//                     onClick={() => setShowAppointmentForm(true)}
//                     className="inline-block bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
//                   >
//                     Book an Appointment
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//           {showAppointmentForm && (
//             <AppointmentForm
//               doctor={doctor}
//               onClose={() => setShowAppointmentForm(false)}
//             />
//           )}
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default DoctorProfilePage;



///////////////////////////////////////////////////////doctorprofilepage work ///////////

// // components/DoctorProfilePage.jsx
// import React, { useState, useEffect, useCallback } from 'react';
// import { useParams } from 'react-router-dom';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
// import AppointmentForm from './AppointmentForm';
// import Swal from 'sweetalert2';
// import axios from 'axios';

// const ContactDoctorModal = ({ isOpen, onClose, doctor }) => {
//   const [message, setMessage] = useState('');

//   const handleSend = useCallback(async () => {
//     try {
//       await axios.post('http://localhost:5000/api/contact-doctor', {
//         doctorId: doctor.staff_id,
//         message: message
//       });
//       onClose();
//       Swal.fire({
//         title: 'Success!',
//         text: 'Your message has been sent successfully.',
//         icon: 'success',
//         confirmButtonText: 'OK'
//       });
//     } catch (error) {
//       console.error('Error sending message:', error);
//       Swal.fire({
//         title: 'Error!',
//         text: 'An error occurred while sending your message. Please try again.',
//         icon: 'error',
//         confirmButtonText: 'OK'
//       });
//     }
//   }, [doctor.staff_id, message, onClose]);

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
//       <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
//         <h3 className="text-2xl font-semibold mb-4">Contact Dr. {doctor.staff_name}</h3>
//         <p className="mb-4">Email: {doctor.email}</p>
//         <textarea
//           value={message}
//           onChange={(e) => setMessage(e.target.value)}
//           className="w-full p-2 border border-gray-300 rounded mb-4"
//           rows="5"
//           placeholder="Write your message here..."
//         />
//         <div className="flex justify-end space-x-2">
//           <button
//             onClick={handleSend}
//             className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
//           >
//             Send
//           </button>
//           <button
//             onClick={onClose}
//             className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
//           >
//             Cancel
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// const DoctorProfilePage = () => {
//   const [doctor, setDoctor] = useState(null);
//   const [showAppointmentForm, setShowAppointmentForm] = useState(false);
//   const [showContactModal, setShowContactModal] = useState(false);
//   const { id } = useParams();

//   useEffect(() => {
//     fetchDoctor();
//   }, [id]);

//   const fetchDoctor = async () => {
//     try {
//       const response = await fetch(`http://localhost:5000/api/doctors/${id}`);
//       const data = await response.json();
//       setDoctor(data);
//     } catch (error) {
//       console.error('Error fetching doctor:', error);
//     }
//   };

//   if (!doctor) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="bg-gray-100 flex flex-col min-h-screen">
//       <Navbar />
//       <div className="flex-grow py-10">
//         <div className="container mx-auto px-4">
//           <div className="bg-white rounded-lg shadow-lg overflow-hidden">
//             <div className="md:flex">
//               <div className="md:flex-shrink-0">
//                 <img
//                   className="h-48 w-full object-cover md:w-48"
//                   src={`http://localhost:5000/${doctor.profile_image}` || 'https://via.placeholder.com/150'}
//                   alt={doctor.staff_name}
//                 />
//               </div>
//               <div className="p-8">
//                 <h1 className="text-3xl font-bold text-gray-800 mb-2">{doctor.staff_name}</h1>
//                 <h2 className="text-xl text-gray-600 mb-4">{doctor.specialty}</h2>
//                 <p className="text-gray-700 mb-4">{doctor.bio}</p>
//                 <div className="flex space-x-4">
//                   <button
//                     onClick={() => setShowContactModal(true)}
//                     className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//                   >
//                     Contact Doctor
//                   </button>
//                   <button
//                     onClick={() => setShowAppointmentForm(true)}
//                     className="inline-block bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
//                   >
//                     Book an Appointment
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//           {showAppointmentForm && (
//             <AppointmentForm
//               doctor={doctor}
//               onClose={() => setShowAppointmentForm(false)}
//             />
//           )}
//           <ContactDoctorModal
//             isOpen={showContactModal}
//             onClose={() => setShowContactModal(false)}
//             doctor={doctor}
//           />
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default DoctorProfilePage;












// import React, { useState, useEffect, useCallback } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
// import AppointmentForm from './AppointmentForm';
// import CommentSection from './CommentSection';
// import Swal from 'sweetalert2';

// const ContactDoctorModal = ({ isOpen, onClose, doctor }) => {
//   const [message, setMessage] = useState('');

//   const handleSend = useCallback(async () => {
//     try {
//       await axios.post('http://localhost:5000/api/contact-doctor', {
//         doctorId: doctor.staff_id,
//         message: message
//       });
//       onClose();
//       Swal.fire({
//         title: 'Success!',
//         text: 'Your message has been sent successfully.',
//         icon: 'success',
//         confirmButtonText: 'OK'
//       });
//     } catch (error) {
//       console.error('Error sending message:', error);
//       Swal.fire({
//         title: 'Error!',
//         text: 'An error occurred while sending your message. Please try again.',
//         icon: 'error',
//         confirmButtonText: 'OK'
//       });
//     }
//   }, [doctor.staff_id, message, onClose]);

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
//       <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
//         <h3 className="text-2xl font-semibold mb-4">Contact Dr. {doctor.staff_name}</h3>
//         <p className="mb-4">Email: {doctor.email}</p>
//         <textarea
//           value={message}
//           onChange={(e) => setMessage(e.target.value)}
//           className="w-full p-2 border border-gray-300 rounded mb-4"
//           rows="5"
//           placeholder="Write your message here..."
//         />
//         <div className="flex justify-end space-x-2">
//           <button
//             onClick={handleSend}
//             className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
//           >
//             Send
//           </button>
//           <button
//             onClick={onClose}
//             className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
//           >
//             Cancel
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// const DoctorProfilePage = () => {
//   const [doctor, setDoctor] = useState(null);
//   const [showAppointmentForm, setShowAppointmentForm] = useState(false);
//   const [showContactModal, setShowContactModal] = useState(false);
//   const [comments, setComments] = useState([]);
//   const { id } = useParams();

//   useEffect(() => {
//     fetchDoctor();
//     fetchComments();
//   }, [id]);

//   const fetchDoctor = async () => {
//     try {
//       const response = await fetch(`http://localhost:5000/api/doctors/${id}`);
//       const data = await response.json();
//       setDoctor(data);
//     } catch (error) {
//       console.error('Error fetching doctor:', error);
//     }
//   };

//   const fetchComments = async () => {
//     try {
//       const response = await axios.get(`http://localhost:5000/api/comment/doctors/${id}/comments`);
//       setComments(response.data);
//     } catch (error) {
//       console.error('Error fetching comments:', error);
//     }
//   };
//   const addComment = async (commentText, parentCommentId = null) => {
//     try {
//       const response = await axios.post('http://localhost:5000/api/comment/doctors/comments', {
//         doctor_id: id,
//         patient_id: 1, // Replace with actual patient ID from auth
//         parent_comment_id: parentCommentId,
//         comment_text: commentText
//       });
//       setComments([response.data, ...comments]);
//     } catch (error) {
//       console.error('Error adding comment:', error);
//       Swal.fire({
//         title: 'Error!',
//         text: 'An error occurred while adding your comment. Please try again.',
//         icon: 'error',
//         confirmButtonText: 'OK'
//       });
//     }
//   };

//   if (!doctor) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="bg-gray-100 flex flex-col min-h-screen">
//       <Navbar />
//       <div className="flex-grow py-10">
//         <div className="container mx-auto px-4">
//           <div className="bg-white rounded-lg shadow-lg overflow-hidden">
//             <div className="md:flex">
//               <div className="md:flex-shrink-0">
//                 <img
//                   className="h-48 w-full object-cover md:w-48"
//                   src={`http://localhost:5000/${doctor.profile_image}` || 'https://via.placeholder.com/150'}
//                   alt={doctor.staff_name}
//                 />
//               </div>
//               <div className="p-8">
//                 <h1 className="text-3xl font-bold text-gray-800 mb-2">{doctor.staff_name}</h1>
//                 <h2 className="text-xl text-gray-600 mb-4">{doctor.specialty}</h2>
//                 <p className="text-gray-700 mb-4">{doctor.bio}</p>
//                 <div className="flex space-x-4">
//                   <button
//                     onClick={() => setShowContactModal(true)}
//                     className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//                   >
//                     Contact Doctor
//                   </button>
//                   <button
//                     onClick={() => setShowAppointmentForm(true)}
//                     className="inline-block bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
//                   >
//                     Book an Appointment
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//           {showAppointmentForm && (
//             <AppointmentForm
//               doctor={doctor}
//               onClose={() => setShowAppointmentForm(false)}
//             />
//           )}
//           <ContactDoctorModal
//             isOpen={showContactModal}
//             onClose={() => setShowContactModal(false)}
//             doctor={doctor}
//           />
//           <CommentSection comments={comments} addComment={addComment} />
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default DoctorProfilePage;






/////////////////////////////////////////////work/////////////////////////


// import React, { useState, useEffect, useCallback } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
// import AppointmentForm from './AppointmentForm';
// import CommentSection from './CommentSection';
// import Swal from 'sweetalert2';

// const ContactDoctorModal = ({ isOpen, onClose, doctor }) => {
//   const [message, setMessage] = useState('');

//   const handleSend = useCallback(async () => {
//     try {
//       await axios.post('http://localhost:5000/api/contact-doctor', {
//         doctorId: doctor.staff_id,
//         message: message
//       });
//       onClose();
//       Swal.fire({
//         title: 'Success!',
//         text: 'Your message has been sent successfully.',
//         icon: 'success',
//         confirmButtonText: 'OK'
//       });
//     } catch (error) {
//       console.error('Error sending message:', error);
//       Swal.fire({
//         title: 'Error!',
//         text: 'An error occurred while sending your message. Please try again.',
//         icon: 'error',
//         confirmButtonText: 'OK'
//       });
//     }
//   }, [doctor.staff_id, message, onClose]);

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
//       <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
//         <h3 className="text-2xl font-semibold mb-4">Contact Dr. {doctor.staff_name}</h3>
//         <p className="mb-4">Email: {doctor.email}</p>
//         <textarea
//           value={message}
//           onChange={(e) => setMessage(e.target.value)}
//           className="w-full p-2 border border-gray-300 rounded mb-4"
//           rows="5"
//           placeholder="Write your message here..."
//         />
//         <div className="flex justify-end space-x-2">
//           <button
//             onClick={handleSend}
//             className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
//           >
//             Send
//           </button>
//           <button
//             onClick={onClose}
//             className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
//           >
//             Cancel
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// const DoctorProfilePage = () => {
//   const [doctor, setDoctor] = useState(null);
//   const [showAppointmentForm, setShowAppointmentForm] = useState(false);
//   const [showContactModal, setShowContactModal] = useState(false);
//   const [comments, setComments] = useState([]);
//   const { id } = useParams();

//   useEffect(() => {
//     fetchDoctor();
//     fetchComments();
//   }, [id]);

//   const fetchDoctor = async () => {
//     try {
//       const response = await fetch(`http://localhost:5000/api/doctors/${id}`);
//       const data = await response.json();
//       setDoctor(data);
//     } catch (error) {
//       console.error('Error fetching doctor:', error);
//     }
//   };

//   const fetchComments = async () => {
//     try {
//       const response = await axios.get(`http://localhost:5000/api/comment/doctors/${id}/comments`);
//       setComments(response.data);
//     } catch (error) {
//       console.error('Error fetching comments:', error);
//     }
//   };
  
//   const addComment = async (commentText, parentCommentId = null) => {
//     try {
//       const response = await axios.post('http://localhost:5000/api/comment/doctors/comments', {
//         doctor_id: id,
//         parent_comment_id: parentCommentId,
//         comment_text: commentText
//       }, {
//         withCredentials: true
//       });
//       setComments([response.data, ...comments]);
//     } catch (error) {
//       console.error('Error adding comment:', error);
//       Swal.fire({
//         title: 'Error!',
//         text: 'An error occurred while adding your comment. Please try again.',
//         icon: 'error',
//         confirmButtonText: 'OK'
//       });
//     }
//   };

//   if (!doctor) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="bg-gray-100 flex flex-col min-h-screen">
//       <Navbar />
//       <div className="flex-grow py-10">
//         <div className="container mx-auto px-4">
//           <div className="bg-white rounded-lg shadow-lg overflow-hidden">
//             <div className="md:flex">
//               <div className="md:flex-shrink-0">
//                 <img
//                   className="h-48 w-full object-cover md:w-48"
//                   src={`http://localhost:5000/${doctor.profile_image}` || 'https://via.placeholder.com/150'}
//                   alt={doctor.staff_name}
//                 />
//               </div>
//               <div className="p-8">
//                 <h1 className="text-3xl font-bold text-gray-800 mb-2">{doctor.staff_name}</h1>
//                 <h2 className="text-xl text-gray-600 mb-4">{doctor.specialty}</h2>
//                 <p className="text-gray-700 mb-4">{doctor.bio}</p>
//                 <div className="flex space-x-4">
//                   <button
//                     onClick={() => setShowContactModal(true)}
//                     className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//                   >
//                     Contact Doctor
//                   </button>
//                   <button
//                     onClick={() => setShowAppointmentForm(true)}
//                     className="inline-block bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
//                   >
//                     Book an Appointment
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//           {showAppointmentForm && (
//             <AppointmentForm
//               doctor={doctor}
//               onClose={() => setShowAppointmentForm(false)}
//             />
//           )}
//           <ContactDoctorModal
//             isOpen={showContactModal}
//             onClose={() => setShowContactModal(false)}
//             doctor={doctor}
//           />
//           <CommentSection comments={comments} addComment={addComment} />
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default DoctorProfilePage;















import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AppointmentForm from './AppointmentForm';
import CommentSection from './CommentSection';
import Swal from 'sweetalert2';

const ContactDoctorModal = ({ isOpen, onClose, doctor }) => {
  const [message, setMessage] = useState('');

  const handleSend = useCallback(async () => {
    try {
      await axios.post('http://localhost:5000/api/contact-doctor', {
        doctorId: doctor.staff_id,
        message: message
      });
      onClose();
      Swal.fire({
        title: 'Success!',
        text: 'Your message has been sent successfully.',
        icon: 'success',
        confirmButtonText: 'OK'
      });
    } catch (error) {
      console.error('Error sending message:', error);
      Swal.fire({
        title: 'Error!',
        text: 'An error occurred while sending your message. Please try again.',
        icon: 'error',
        confirmButtonText: 'OK'
      });
    }
  }, [doctor.staff_id, message, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
        <h3 className="text-2xl font-semibold mb-4">Contact Dr. {doctor.staff_name}</h3>
        <p className="mb-4">Email: {doctor.email}</p>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mb-4"
          rows="5"
          placeholder="Write your message here..."
        />
        <div className="flex justify-end space-x-2">
          <button
            onClick={handleSend}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Send
          </button>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

const DoctorProfilePage = () => {
  const [doctor, setDoctor] = useState(null);
  const [showAppointmentForm, setShowAppointmentForm] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);
  const [comments, setComments] = useState([]);
  const { id } = useParams();
  const [currentUserId, setCurrentUserId] = useState(null);

  useEffect(() => {
    fetchDoctor();
    fetchComments();
    fetchCurrentUser();
  }, [id]);

  const fetchDoctor = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/doctors/${id}`);
      const data = await response.json();
      setDoctor(data);
    } catch (error) {
      console.error('Error fetching doctor:', error);
    }
  };

  const fetchComments = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/comment/doctors/${id}/comments`);
      setComments(response.data);
    } catch (error) {
      console.error('Error fetching comments:', error);
    }
  };

  const fetchCurrentUser = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/patients/profile', { withCredentials: true });
      setCurrentUserId(response.data.id);
    } catch (error) {
      console.error('Error fetching current user:', error);
    }
  };
  
  const addComment = async (commentText, parentCommentId = null) => {
    try {
      const response = await axios.post('http://localhost:5000/api/comment/doctors/comments', {
        doctor_id: id,
        parent_comment_id: parentCommentId,
        comment_text: commentText
      }, {
        withCredentials: true
      });
      setComments([response.data, ...comments]);
    } catch (error) {
      console.error('Error adding comment:', error);
      Swal.fire({
        title: 'Error!',
        text: 'An error occurred while adding your comment. Please try again.',
        icon: 'error',
        confirmButtonText: 'OK'
      });
    }
  };

  const updateComment = async (commentId, newText) => {
    try {
      const response = await axios.put(`http://localhost:5000/api/comment/doctors/comments/${commentId}`, {
        comment_text: newText
      }, {
        withCredentials: true
      });
      setComments(comments.map(comment => 
        comment.comment_id === commentId ? { ...comment, comment_text: newText } : comment
      ));
    } catch (error) {
      console.error('Error updating comment:', error);
      Swal.fire({
        title: 'Error!',
        text: 'An error occurred while updating your comment. Please try again.',
        icon: 'error',
        confirmButtonText: 'OK'
      });
    }
  };

  const deleteComment = async (commentId) => {
    try {
      await axios.delete(`http://localhost:5000/api/comment/doctors/comments/${commentId}`, {
        withCredentials: true
      });
      setComments(comments.filter(comment => comment.comment_id !== commentId));
    } catch (error) {
      console.error('Error deleting comment:', error);
      Swal.fire({
        title: 'Error!',
        text: 'An error occurred while deleting your comment. Please try again.',
        icon: 'error',
        confirmButtonText: 'OK'
      });
    }
  };

  if (!doctor) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-gray-100 flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow py-10">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:flex-shrink-0">
                <img
                  className="h-48 w-full object-cover md:w-48"
                  src={`http://localhost:5000/${doctor.profile_image}` || 'https://via.placeholder.com/150'}
                  alt={doctor.staff_name}
                />
              </div>
              <div className="p-8">
                <h1 className="text-3xl font-bold text-gray-800 mb-2">{doctor.staff_name}</h1>
                <h2 className="text-xl text-gray-600 mb-4">{doctor.specialty}</h2>
                <p className="text-gray-700 mb-4">{doctor.bio}</p>
                <div className="flex space-x-4">
                  <button
                    onClick={() => setShowContactModal(true)}
                    className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                  >
                    Contact Doctor
                  </button>
                  <button
                    onClick={() => setShowAppointmentForm(true)}
                    className="inline-block bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                  >
                    Book an Appointment
                  </button>
                </div>
              </div>
            </div>
          </div>
          {showAppointmentForm && (
            <AppointmentForm
              doctor={doctor}
              onClose={() => setShowAppointmentForm(false)}
            />
          )}
          <ContactDoctorModal
            isOpen={showContactModal}
            onClose={() => setShowContactModal(false)}
            doctor={doctor}
          />
          <CommentSection 
            comments={comments} 
            addComment={addComment}
            updateComment={updateComment}
            deleteComment={deleteComment}
            currentUserId={currentUserId}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DoctorProfilePage;