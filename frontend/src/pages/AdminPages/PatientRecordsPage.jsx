





// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Sidebar from '../AdminPages/sidebar';
// import Swal from 'sweetalert2';

// const PatientRecordsPage = () => {
//   const [patients, setPatients] = useState([]);

//   useEffect(() => {
//     fetchPatients();
//   }, []);

//   const fetchPatients = async () => {
//     try {
//       const response = await axios.get('http://localhost:5000/api/Allpatients');
//       setPatients(response.data);
//     } catch (error) {
//       console.error('Error fetching patients:', error);
//     }
//   };

//   const handleApproval = async (id, isApproved) => {
//     try {
//       await axios.put('http://localhost:5000/api/Allpatients/approval', { id, isApproved });
//       await fetchPatients(); // Refresh the list after updating
//       Swal.fire({
//         icon: 'success',
//         title: 'Success!',
//         text: `Patient ${isApproved ? 'approved' : 'disapproved'} successfully.`,
//         timer: 1500,
//         showConfirmButton: false
//       });
//     } catch (error) {
//       console.error('Error updating approval status:', error);
//       Swal.fire({
//         icon: 'error',
//         title: 'Error',
//         text: 'Failed to update approval status.',
//       });
//     }
//   };

//   return (
//     <div className="flex">
//       <Sidebar />
//       <div className="flex-1 p-4 ml-64">
//         <h2 className="text-2xl font-bold mb-4">Patient Records</h2>
//         <table className="min-w-full bg-white">
//           <thead>
//             <tr>
//               <th className="py-2 px-4 border-b">Username</th>
//               <th className="py-2 px-4 border-b">Email</th>
//               <th className="py-2 px-4 border-b">image</th>
//               <th className="py-2 px-4 border-b">Gender</th>
//               <th className="py-2 px-4 border-b">Date of Birth</th>
//               <th className="py-2 px-4 border-b">Approval Status</th>
//               <th className="py-2 px-4 border-b">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {patients.map((patient) => (
//               <tr key={patient.id}>
//                 <td className="py-2 px-4 border-b">{patient.username}</td>
//                 <td className="py-2 px-4 border-b">{patient.email}</td>
//                 <img  className="w-10 h-10 object-cover rounded-full" src={`http://localhost:5000/${patient.profile_image}`} />
//                 <td className="py-2 px-4 border-b">{patient.gender}</td>
//                 <td className="py-2 px-4 border-b">{new Date(patient.dob).toLocaleDateString()}</td>
//                 <td className="py-2 px-4 border-b">{patient.is_approved ? 'Approved' : 'Not Approved'}</td>
//                 <td className="py-2 px-4 border-b">
//                   <button
//                     onClick={() => handleApproval(patient.id, !patient.is_approved)}
//                     className={`${
//                       patient.is_approved ? 'bg-red-500' : 'bg-green-500'
//                     } text-white px-2 py-1 rounded`}
//                   >
//                     {patient.is_approved ? 'Disapprove' : 'Approve'}
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default PatientRecordsPage;









import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from '../AdminPages/sidebar';
import Swal from 'sweetalert2';

const PatientRecordsPage = () => {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    fetchPatients();
  }, []);

  const fetchPatients = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/Allpatients');
      setPatients(response.data);
    } catch (error) {
      console.error('Error fetching patients:', error);
    }
  };

  const handleApproval = async (id, isApproved) => {
    try {
      await axios.put('http://localhost:5000/api/Allpatients/approval', { id, isApproved });
      setPatients(patients.map(patient => 
        patient.id === id ? { ...patient, is_approved: isApproved } : patient
      ));
      Swal.fire({
        icon: 'success',
        title: 'Success!',
        text: `Patient ${isApproved ? 'approved' : 'disapproved'} successfully.`,
        timer: 1500,
        showConfirmButton: false
      });
    } catch (error) {
      console.error('Error updating approval status:', error);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Failed to update approval status.',
      });
    }
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-4 ml-64">
        <h2 className="text-2xl font-bold mb-4">Patient Records</h2>
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Username</th>
              <th className="py-2 px-4 border-b">Email</th>
              <th className="py-2 px-4 border-b">Image</th>
              <th className="py-2 px-4 border-b">Gender</th>
              <th className="py-2 px-4 border-b">Date of Birth</th>
              <th className="py-2 px-4 border-b">Approval Status</th>
              <th className="py-2 px-4 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {patients.map((patient) => (
              <tr key={patient.id}>
                <td className="py-2 px-4 border-b">{patient.username}</td>
                <td className="py-2 px-4 border-b">{patient.email}</td>
                <td className="py-2 px-4 border-b">
                  <img className="w-10 h-10 object-cover rounded-full" src={`http://localhost:5000/${patient.profile_image}`} alt={patient.username} />
                </td>
                <td className="py-2 px-4 border-b">{patient.gender}</td>
                <td className="py-2 px-4 border-b">{new Date(patient.dob).toLocaleDateString()}</td>
                <td className="py-2 px-4 border-b">{patient.is_approved ? 'Approved' : 'Not Approved'}</td>
                <td className="py-2 px-4 border-b">
                  <button
                    onClick={() => handleApproval(patient.id, !patient.is_approved)}
                    className={`${
                      patient.is_approved ? 'bg-red-500' : 'bg-green-500'
                    } text-white px-2 py-1 rounded`}
                  >
                    {patient.is_approved ? 'Disapprove' : 'Approve'}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PatientRecordsPage;