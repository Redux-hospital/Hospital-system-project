// // admin-AppointmentForm.jsx
// import React, { useState, useEffect } from 'react';

// const AppointmentForm = ({ doctor, onClose }) => {
//   const [availableSlots, setAvailableSlots] = useState([]);
//   const [selectedSlot, setSelectedSlot] = useState('');
//   const [patientId, setPatientId] = useState('');

//   useEffect(() => {
//     fetchAvailableSlots();
//   }, [doctor.staff_id]);

//   const fetchAvailableSlots = async () => {
//     try {
//       const response = await fetch(`http://localhost:5000/api/doctors/${doctor.staff_id}/available-slots`);
//       const data = await response.json();
//       setAvailableSlots(data);
//     } catch (error) {
//       console.error('Error fetching available slots:', error);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch('http://localhost:5000/api/appointments', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           available_id: selectedSlot,
//           id: patientId,
//         }),
//       });
//       const data = await response.json();
//       if (response.ok) {
//         alert('Appointment booked successfully!');
//         onClose();
//       } else {
//         alert(`Failed to book appointment: ${data.message}`);
//       }
//     } catch (error) {
//       console.error('Error booking appointment:', error);
//       alert('Failed to book appointment. Please try again.');
//     }
//   };

//   return (
//     <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
//       <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
//         <h3 className="text-lg font-bold mb-4">Book an Appointment with {doctor.staff_name}</h3>
//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="patientId">
//               Patient ID
//             </label>
//             <input
//               type="text"
//               id="patientId"
//               value={patientId}
//               onChange={(e) => setPatientId(e.target.value)}
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="slot">
//               Available Slots
//             </label>
//             <select
//               id="slot"
//               value={selectedSlot}
//               onChange={(e) => setSelectedSlot(e.target.value)}
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               required
//             >
//               <option value="">Select a slot</option>
//               {availableSlots.map((slot) => (
//                 <option key={slot.available_id} value={slot.available_id}>
//                   {new Date(slot.available_start_date).toLocaleDateString()} {slot.available_start_time} - {slot.available_end_time}
//                 </option>
//               ))}
//             </select>
//           </div>
//           <div className="flex items-center justify-between">
//             <button
//               type="submit"
//               className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//             >
//               Book Appointment
//             </button>
//             <button
//               type="button"
//               onClick={onClose}
//               className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//             >
//               Cancel
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AppointmentForm;







// // admin-AppointmentForm.jsx
// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

// const AppointmentForm = ({ doctor, onClose }) => {
//   const [availableSlots, setAvailableSlots] = useState([]);
//   const [selectedSlot, setSelectedSlot] = useState('');
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetchAvailableSlots();
//   }, [doctor.staff_id]);

//   const fetchAvailableSlots = async () => {
//     try {
//       const response = await fetch(`http://localhost:5000/api/doctors/${doctor.staff_id}/available-slots`, {
//         credentials: 'include' // This is important for sending cookies
//       });
//       if (response.status === 401) {
//         // Redirect to login page if unauthorized
//         navigate('/login');
//         return;
//       }
//       const data = await response.json();
//       setAvailableSlots(data);
//     } catch (error) {
//       console.error('Error fetching available slots:', error);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch('http://localhost:5000/api/appointments', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           available_id: selectedSlot,
//         }),
//         credentials: 'include' // This is important for sending cookies
//       });
//       const data = await response.json();
//       if (response.status === 401) {
//         // Redirect to login page if unauthorized
//         navigate('/login');
//         return;
//       }
//       if (response.ok) {
//         alert('Appointment booked successfully!');
//         onClose();
//       } else {
//         alert(`Failed to book appointment: ${data.message}`);
//       }
//     } catch (error) {
//       console.error('Error booking appointment:', error);
//       alert('Failed to book appointment. Please try again.');
//     }
//   };

//   return (
//     <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
//       <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
//         <h3 className="text-lg font-bold mb-4">Book an Appointment with {doctor.staff_name}</h3>
//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="slot">
//               Available Slots
//             </label>
//             <select
//               id="slot"
//               value={selectedSlot}
//               onChange={(e) => setSelectedSlot(e.target.value)}
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               required
//             >
//               <option value="">Select a slot</option>
//               {availableSlots.map((slot) => (
//                 <option key={slot.available_id} value={slot.available_id}>
//                   {new Date(slot.available_start_date).toLocaleDateString()} {slot.available_start_time} - {slot.available_end_time}
//                 </option>
//               ))}
//             </select>
//           </div>
//           <div className="flex items-center justify-between">
//             <button
//               type="submit"
//               className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//             >
//               Book Appointment
//             </button>
//             <button
//               type="button"
//               onClick={onClose}
//               className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//             >
//               Cancel
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AppointmentForm;




import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const AppointmentForm = ({ doctor, onClose }) => {
  const [availableSlots, setAvailableSlots] = useState([]);
  const [selectedSlot, setSelectedSlot] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetchAvailableSlots();
  }, [doctor.staff_id]);

  const fetchAvailableSlots = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/appointment/doctors/${doctor.staff_id}/available-slots`, {
        credentials: 'include'
      });
      if (response.status === 401) {
        navigate('/login');
        return;
      }
      const data = await response.json();
      setAvailableSlots(data);
    } catch (error) {
      console.error('Error fetching available slots:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/appointment/appointments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          available_id: selectedSlot,
        }),
        credentials: 'include'
      });
      const data = await response.json();
      if (response.status === 401) {
        navigate('/login');
        return;
      }
      if (response.ok) {
        Swal.fire({
          title: 'Success!',
          text: 'Appointment booked successfully!',
          icon: 'success',
          confirmButtonText: 'OK'
        }).then(() => {
          onClose();
        });
      } else {
        Swal.fire({
          title: 'Error!',
          text: `Failed to book appointment: ${data.message}`,
          icon: 'error',
          confirmButtonText: 'OK'
        });
      }
    } catch (error) {
      console.error('Error booking appointment:', error);
      Swal.fire({
        title: 'Error!',
        text: 'Failed to book appointment. Please try again.',
        icon: 'error',
        confirmButtonText: 'OK'
      });
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
      <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
        <h3 className="text-lg font-bold mb-4">Book an Appointment with {doctor.staff_name}</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="slot">
              Available Slots
            </label>
            <select
              id="slot"
              value={selectedSlot}
              onChange={(e) => setSelectedSlot(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            >
              <option value="">Select a slot</option>
              {availableSlots.map((slot) => (
                <option key={slot.available_id} value={slot.available_id}>
                  {new Date(slot.available_start_date).toLocaleDateString()} {slot.available_start_time} - {slot.available_end_time}
                </option>
              ))}
            </select>
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Book Appointment
            </button>
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AppointmentForm;