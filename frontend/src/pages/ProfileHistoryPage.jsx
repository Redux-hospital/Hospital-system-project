// import React from 'react'

// function ProfileHistoryPage() {
//   return (
//     <div>ProfileHistoryPage</div>
//   )
// }

// export default ProfileHistoryPage



// import React from 'react';
// import { User, Download } from 'lucide-react';
// import Navbar from "../components/Navbar"
// import Footer from "../components/Footer"

// const PatientProfile = () => {
//   const patientData = {
//     name: 'Mrs. Maria Waston',
//     email: 'mariawaston2022@gmail.com',
//     sex: 'Female',
//     age: 28,
//     blood: 'A+',
//     status: 'Active',
//     department: 'Cardiology',
//     registeredDate: '20 Jan, 2023',
//     appointment: 35,
//     bedNumber: '#0365',
//     vitals: {
//       bloodPressure: '120/89',
//       heartRate: 120,
//       glucose: 97,
//       cholesterol: 85
//     },
//     history: [
//       { date: '20 Jan, 2023', diagnosis: 'Malaria', severity: 'High', visits: 2, status: 'Under Treatment' },
//       { date: '12 Jan, 2022', diagnosis: 'Viral Fever', severity: 'Low', visits: 1, status: 'Closed' },
//       { date: '20 Jan, 2021', diagnosis: 'Covid 19', severity: 'High', visits: 6, status: 'Closed' }
//     ]
//   };

//   return (
//     <>
//     <Navbar/>
//     <div className="bg-white p-6 rounded-lg shadow-lg max-w-3xl mx-auto">
//       <div className="grid grid-cols-3 gap-4 mb-6">
//         {[
//           { label: 'Sex', value: patientData.sex },
//           { label: 'Age', value: patientData.age },
//           { label: 'Blood', value: patientData.blood },
//           { label: 'Status', value: patientData.status },
//           { label: 'Appointment', value: patientData.appointment },
//         ].map((item, index) => (
//           <div key={index}>
//             <p className="text-gray-600 text-sm">{item.label}</p>
//             <p className="font-semibold">{item.value}</p>
//           </div>
//         ))}
//       </div>

//       <h3 className="text-lg font-semibold mb-3">Patient Current Vitals</h3>
//       <div className="grid grid-cols-4 gap-4 mb-6">
//         {Object.entries(patientData.vitals).map(([key, value]) => (
//           <div key={key} className="bg-gray-100 p-3 rounded">
//             <p className="text-gray-600 text-sm capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</p>
//             <p className="font-semibold">{value}</p>
//             <p className="text-green-600 text-xs">In the norm</p>
//           </div>
//         ))}
//       </div>

//       <h3 className="text-lg font-semibold mb-3">Patient History</h3>
//       <div className="overflow-x-auto">
//         <table className="w-full">
//           <thead>
//             <tr className="bg-gray-100">
//               <th className="text-left p-2">Date Of Visit</th>
//               <th className="text-left p-2">Diagnosis</th>
//               <th className="text-left p-2">Severity</th>
//               <th className="text-left p-2">Total Visits</th>
//               <th className="text-left p-2">Status</th>
//               <th className="text-left p-2">Documents</th>
//             </tr>
//           </thead>
//           <tbody>
//             {patientData.history.map((visit, index) => (
//               <tr key={index} className="border-b">
//                 <td className="p-2">{visit.date}</td>
//                 <td className="p-2">{visit.diagnosis}</td>
//                 <td className="p-2">
//                   <span className={`px-2 py-1 rounded-full text-xs ${visit.severity === 'High' ? 'bg-red-100 text-red-600' : 'bg-green-100 text-green-600'}`}>
//                     {visit.severity}
//                   </span>
//                 </td>
//                 <td className="p-2">{visit.visits}</td>
//                 <td className="p-2">
//                   <span className={`px-2 py-1 rounded-full text-xs ${visit.status === 'Under Treatment' ? 'bg-red-100 text-red-600' : 'bg-green-100 text-green-600'}`}>
//                     {visit.status}
//                   </span>
//                 </td>
//                 <td className="p-2">
//                   <button className="flex items-center text-blue-600">
//                     <Download size={16} className="mr-1" /> Download
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//     <Footer/>
//     </>
//   );
// };

// export default PatientProfile;





// import React from 'react';
// import { User, Download } from 'lucide-react';
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

// const PatientProfile = () => {
//   const patientData = {
//     name: 'Mrs. Maria Waston',
//     email: 'mariawaston2022@gmail.com',
//     sex: 'Female',
//     age: 28,
//     blood: 'A+',
//     status: 'Active',
//     department: 'Cardiology',
//     registeredDate: '20 Jan, 2023',
//     appointment: 35,
//     bedNumber: '#0365',
//     vitals: {
//       bloodPressure: '120/89',
//       heartRate: 120,
//       glucose: 97,
//       cholesterol: 85
//     },
//     history: [
//       { date: '20 Jan, 2023', diagnosis: 'Malaria', severity: 'High', visits: 2, status: 'Under Treatment' },
//       { date: '12 Jan, 2022', diagnosis: 'Viral Fever', severity: 'Low', visits: 1, status: 'Closed' },
//       { date: '20 Jan, 2021', diagnosis: 'Covid 19', severity: 'High', visits: 6, status: 'Closed' }
//     ]
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="bg-white p-6 rounded-lg shadow-lg max-w-3xl mx-auto my-8"> {/* Added my-8 for vertical margin */}
//         <div className="grid grid-cols-3 gap-4 mb-6">
//           {[
//             { label: 'Sex', value: patientData.sex },
//             { label: 'Age', value: patientData.age },
//             { label: 'Blood', value: patientData.blood },
//             { label: 'Status', value: patientData.status },
//             { label: 'Appointment', value: patientData.appointment },
//           ].map((item, index) => (
//             <div key={index}>
//               <p className="text-gray-600 text-sm">{item.label}</p>
//               <p className="font-semibold">{item.value}</p>
//             </div>
//           ))}
//         </div>

//         <h3 className="text-lg font-semibold mb-3">Patient Current Vitals</h3>
//         <div className="grid grid-cols-4 gap-4 mb-6">
//           {Object.entries(patientData.vitals).map(([key, value]) => (
//             <div key={key} className="bg-gray-100 p-3 rounded">
//               <p className="text-gray-600 text-sm capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</p>
//               <p className="font-semibold">{value}</p>
//               <p className="text-green-600 text-xs">In the norm</p>
//             </div>
//           ))}
//         </div>

//         <h3 className="text-lg font-semibold mb-3">Patient History</h3>
//         <div className="overflow-x-auto">
//           <table className="w-full">
//             <thead>
//               <tr className="bg-gray-100">
//                 <th className="text-left p-2">Date Of Visit</th>
//                 <th className="text-left p-2">Diagnosis</th>
//                 <th className="text-left p-2">Severity</th>
//                 <th className="text-left p-2">Total Visits</th>
//                 <th className="text-left p-2">Status</th>
//                 <th className="text-left p-2">Documents</th>
//               </tr>
//             </thead>
//             <tbody>
//               {patientData.history.map((visit, index) => (
//                 <tr key={index} className="border-b">
//                   <td className="p-2">{visit.date}</td>
//                   <td className="p-2">{visit.diagnosis}</td>
//                   <td className="p-2">
//                     <span className={`px-2 py-1 rounded-full text-xs ${visit.severity === 'High' ? 'bg-red-100 text-red-600' : 'bg-green-100 text-green-600'}`}>
//                       {visit.severity}
//                     </span>
//                   </td>
//                   <td className="p-2">{visit.visits}</td>
//                   <td className="p-2">
//                     <span className={`px-2 py-1 rounded-full text-xs ${visit.status === 'Under Treatment' ? 'bg-red-100 text-red-600' : 'bg-green-100 text-green-600'}`}>
//                       {visit.status}
//                     </span>
//                   </td>
//                   <td className="p-2">
//                     <button className="flex items-center text-blue-600">
//                       <Download size={16} className="mr-1" /> Download
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default PatientProfile;



// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

// const PatientProfile = () => {
//   const [patientData, setPatientData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchPatientProfile = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/api/patients/profile', {
//           withCredentials: true // If you're using cookies for authentication
//         });
//         setPatientData(response.data);
//         setLoading(false);
//       } catch (err) {
//         setError('Failed to fetch patient profile');
//         setLoading(false);
//       }
//     };

//     fetchPatientProfile();
//   }, []);

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>{error}</div>;
//   if (!patientData) return <div>No patient data available</div>;

//   return (
//     <>
//       <Navbar />
//       <div className="bg-white p-6 rounded-lg shadow-lg max-w-3xl mx-auto my-8">
//         <div className="grid grid-cols-2 gap-4 mb-6">
//           <div>
//             <img src={`http://localhost:5000/${patientData.profile_image}` || '/default-avatar.png'} alt="Profile" className="w-32 h-32 rounded-full" />
//           </div>
//           <div>
//             <h2 className="text-2xl font-bold">{patientData.username}</h2>
//             <p className="text-gray-600">{patientData.email}</p>
//           </div>
//         </div>
//         <div className="grid grid-cols-3 gap-4 mb-6">
//           {[
//             { label: 'Sex', value: patientData.sex },
//             { label: 'Age', value: patientData.dob },
//             { label: 'Blood', value: patientData.blood },
//             { label: 'Status', value: patientData.status },
//             { label: 'Appointment', value: patientData.appointment },
//           ].map((item, index) => (
//             <div key={index}>
//               <p className="text-gray-600 text-sm">{item.label}</p>
//               <p className="font-semibold">{item.value}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default PatientProfile;




// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

// const PatientProfile = () => {
//   const [patientData, setPatientData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchPatientProfile = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/api/patients/profile', {
//           withCredentials: true // If you're using cookies for authentication
//         });
//         setPatientData(response.data);
//         setLoading(false);
//       } catch (err) {
//         setError('Failed to fetch patient profile');
//         setLoading(false);
//       }
//     };

//     fetchPatientProfile();
//   }, []);

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>{error}</div>;
//   if (!patientData) return <div>No patient data available</div>;

//   return (
//     <>
//       <Navbar />
//       <div className="bg-white p-6 rounded-lg shadow-lg max-w-3xl mx-auto my-8">
//         <div className="grid grid-cols-2 gap-4 mb-6">
//           <div>
//             <img src={`http://localhost:5000/${patientData.profile_image}` || '/default-avatar.png'} alt="Profile" className="w-32 h-32 rounded-full" />
//           </div>
//           <div>
//             <h2 className="text-2xl font-bold">{patientData.username}</h2>
//             <p className="text-gray-600">{patientData.email}</p>
//           </div>
//         </div>
//         <div className="grid grid-cols-3 gap-4 mb-6">
//           {[
//             { label: 'Sex', value: patientData.sex },
//             { label: 'Age', value: patientData.dob },
//             { label: 'Blood Type', value: patientData.blood },
//             { label: 'Status', value: patientData.status },
//             { label: 'Appointments', value: patientData.appointment },
//             { label: 'Allergies', value: patientData.haveallergy },
//             { label: 'Chronic Diseases', value: patientData.chronic_diseases },
//           ].map((item, index) => (
//             <div key={index} className="mb-4">
//               <p className="text-gray-600 text-sm">{item.label}</p>
//               <p className="font-semibold">{item.value}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default PatientProfile;




// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

// const PatientProfile = () => {
//   const [patientData, setPatientData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchPatientProfile = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/api/patients/profile', {
//           withCredentials: true // If you're using cookies for authentication
//         });
//         setPatientData(response.data);
//         setLoading(false);
//       } catch (err) {
//         setError('Failed to fetch patient profile');
//         setLoading(false);
//       }
//     };

//     fetchPatientProfile();
//   }, []);

//   // Function to calculate age from date of birth
//   const calculateAge = (dob) => {
//     const birthDate = new Date(dob);
//     const today = new Date();
//     let age = today.getFullYear() - birthDate.getFullYear();
//     const monthDiff = today.getMonth() - birthDate.getMonth();
//     if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
//       age--;
//     }
//     return age;
//   };

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>{error}</div>;
//   if (!patientData) return <div>No patient data available</div>;

//   return (
//     <>
//       <Navbar />
//       <div className="bg-white p-6 rounded-lg shadow-lg max-w-3xl mx-auto my-8">
//         <div className="grid grid-cols-2 gap-4 mb-6">
//           <div>
//             <img src={ `http://localhost:5000/${patientData.profile_image}`           || '/default-avatar.png'} alt="Profile" className="w-32 h-32 rounded-full" />
//           </div>
//           <div>
//             <h2 className="text-2xl font-bold">{patientData.username}</h2>
//             <p className="text-gray-600">{patientData.email}</p>
//           </div>
//         </div>
//         <div className="grid grid-cols-3 gap-4 mb-6">
//           {[
//             { label: 'Sex', value: patientData.gender },
//             { label: 'Age', value: calculateAge(patientData.age) },
//             { label: 'Blood Type', value: patientData.blood },
//             { label: 'Status', value: patientData.status },
//             { label: 'Appointments', value: patientData.appointment },
//             { label: 'Allergies', value: patientData.haveallergy },
//             { label: 'Chronic Diseases', value: patientData.chronic_diseases },
//           ].map((item, index) => (
//             <div key={index}>
//               <p className="text-gray-600 text-sm">{item.label}</p>
//               <p className="font-semibold">{item.value}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default PatientProfile;










///////////////////////////////////////////////////////////////////////////////work with malek////////////////////////////


// import React, { useState, useEffect, useRef } from 'react';
// import axios from 'axios';
// import { Download } from 'lucide-react';
// import html2canvas from 'html2canvas';
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

// const PatientProfile = () => {
//   const [patientData, setPatientData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const appointmentRefs = useRef([]);

//   useEffect(() => {
//     const fetchPatientProfile = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/api/patients/profile', {
//           withCredentials: true
//         });
//         setPatientData(response.data);
//         setLoading(false);
//       } catch (err) {
//         setError('Failed to fetch patient profile');
//         setLoading(false);
//       }
//     };

//     fetchPatientProfile();
//   }, []);

//   const calculateAge = (dob) => {
//     const birthDate = new Date(dob);
//     const today = new Date();
//     let age = today.getFullYear() - birthDate.getFullYear();
//     const monthDiff = today.getMonth() - birthDate.getMonth();
//     if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
//       age--;
//     }
//     return age;
//   };

//   const downloadAppointmentDetails = async (index) => {
//     const element = appointmentRefs.current[index];
//     if (element) {
//       const canvas = await html2canvas(element);
//       const image = canvas.toDataURL("image/png");
//       const link = document.createElement('a');
//       link.href = image;
//       link.download = `appointment_${index + 1}.png`;
//       link.click();
//     }
//   };

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>{error}</div>;
//   if (!patientData) return <div>No patient data available</div>;

//   return (
//     <>
//       <Navbar />
//       <div className="bg-white p-6 rounded-lg shadow-lg max-w-3xl mx-auto my-8">
//         <div className="grid grid-cols-2 gap-4 mb-6">
//           <div>
//             <img src={`http://localhost:5000/${patientData.profile_image}` || '/default-avatar.png'} alt="Profile" className="w-32 h-32 rounded-full" />
//           </div>
//           <div>
//             <h2 className="text-2xl font-bold">{patientData.username}</h2>
//             <p className="text-gray-600">{patientData.email}</p>
//           </div>
//         </div>
//         <div className="grid grid-cols-3 gap-4 mb-6">
//           {[
//             { label: 'Sex', value: patientData.gender },
//             { label: 'Age', value: calculateAge(patientData.age) },
//             { label: 'Blood Type', value: patientData.blood },
//             { label: 'Status', value: patientData.status },
//             { label: 'Appointments', value: patientData.appointment_count },
//             { label: 'Allergies', value: patientData.haveallergy },
//             { label: 'Chronic Diseases', value: patientData.chronic_diseases },
//           ].map((item, index) => (
//             <div key={index}>
//               <p className="text-gray-600 text-sm">{item.label}</p>
//               <p className="font-semibold">{item.value}</p>
//             </div>
//           ))}
//         </div>
        
//         <h3 className="text-lg font-semibold mb-3">Appointment History</h3>
//         <div className="overflow-x-auto">
//           <table className="w-full">
//             <thead>
//               <tr className="bg-gray-100">
//                 <th className="text-left p-2">Doctor Name</th>
//                 <th className="text-left p-2">Time Of Appointement</th>

//                 <th className="text-left p-2">Status</th>
//                 <th className="text-left p-2">Documents</th>
//               </tr>
//             </thead>
//             <tbody>
//               {patientData.appointments?.map((appointment, index) => (
//                 <tr key={index} className="border-b" ref={el => appointmentRefs.current[index] = el}>
//                   <td className="p-2">{appointment.doctor_name}</td>
//                   <td className="p-2">{appointment.appointment_time}</td>
                 
//                   <td className="p-2">
//                     <span className={`px-2 py-1 rounded-full text-xs ${appointment.status === 'Under Treatment' ? 'bg-red-100 text-red-600' : 'bg-green-100 text-green-600'}`}>
//                       {appointment.status}
//                     </span>
//                   </td>
//                   <td className="p-2">
//                     <button className="flex items-center text-blue-600" onClick={() => downloadAppointmentDetails(index)}>
//                       <Download size={16} className="mr-1" /> Download
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default PatientProfile;







// import React, { useState, useEffect, useRef } from 'react';
// import axios from 'axios';
// import { Download } from 'lucide-react';
// import jsPDF from 'jspdf';
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

// const PatientProfile = () => {
//   const [patientData, setPatientData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchPatientProfile = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/api/patients/profile', {
//           withCredentials: true
//         });
//         setPatientData(response.data);
//         setLoading(false);
//       } catch (err) {
//         setError('Failed to fetch patient profile');
//         setLoading(false);
//       }
//     };

//     fetchPatientProfile();
//   }, []);

//   const calculateAge = (dob) => {
//     const birthDate = new Date(dob);
//     const today = new Date();
//     let age = today.getFullYear() - birthDate.getFullYear();
//     const monthDiff = today.getMonth() - birthDate.getMonth();
//     if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
//       age--;
//     }
//     return age;
//   };

// const downloadAppointmentDetails = (index) => {
//   const appointment = patientData.appointments[index];
//   const pdf = new jsPDF('p', 'mm', 'a4');
  
//   // Set colors
//   const primaryColor = '#007bff';
//   const secondaryColor = '#6c757d';
  
//   // Header
//   pdf.setFillColor(primaryColor);
//   pdf.rect(0, 0, 210, 40, 'F');
//   pdf.setTextColor(255, 255, 255);
//   pdf.setFontSize(24);
//   pdf.text('Hospital Management System', 105, 20, { align: 'center' });
//   pdf.setFontSize(16);
//   pdf.text(`Appointment Details for ${patientData.username}`, 105, 35, { align: 'center' });
  
//   // Reset text color
//   pdf.setTextColor(0, 0, 0);
  
//   // Patient Information
//   pdf.setFontSize(18);
//   pdf.setTextColor(primaryColor);
//   pdf.text('Patient Information:', 20, 60);
//   pdf.setFontSize(12);
//   pdf.setTextColor(0, 0, 0);
//   pdf.text(`Name: ${patientData.username}`, 25, 70);
//   pdf.text(`Email: ${patientData.email}`, 25, 80);
//   pdf.text(`Gender: ${patientData.gender}`, 25, 90);
//   pdf.text(`Age: ${calculateAge(patientData.age)}`, 25, 100);
//   pdf.text(`Blood Type: ${patientData.blood}`, 25, 110);
  
//   // Appointment Information
//   pdf.setFontSize(18);
//   pdf.setTextColor(primaryColor);
//   pdf.text('Appointment Details:', 20, 130);
//   pdf.setFontSize(12);
//   pdf.setTextColor(0, 0, 0);
//   pdf.text(`Doctor Name: ${appointment.doctor_name}`, 25, 140);
//   pdf.text(`Time of Appointment: ${appointment.appointment_time}`, 25, 150);
  
//   // Additional Information
//   pdf.setFontSize(18);
//   pdf.setTextColor(primaryColor);
//   pdf.text('Additional Information:', 20, 170);
//   pdf.setFontSize(12);
//   pdf.setTextColor(0, 0, 0);
//   pdf.text(`Allergies: ${patientData.haveallergy}`, 25, 180);
//   pdf.text(`Chronic Diseases: ${patientData.chronic_diseases}`, 25, 190);
  
//   // Footer with copyright
//   pdf.setFontSize(10);
//   pdf.setTextColor(secondaryColor);
//   const websiteName = 'www.yourhospital.com';
//   pdf.text(`© ${new Date().getFullYear()} ${websiteName}. All rights reserved.`, 105, 285, { align: 'center' });
  
//   // Download the PDF
//   pdf.save(`appointment_${index + 1}.pdf`);
// };










//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>{error}</div>;
//   if (!patientData) return <div>No patient data available</div>;

//   return (
//     <>
//       <Navbar />
//       <div className="bg-white p-6 rounded-lg shadow-lg max-w-3xl mx-auto my-8">
//         <div className="grid grid-cols-2 gap-4 mb-6">
//           <div>
//             <img
//               src={`http://localhost:5000/${patientData.profile_image}` || '/default-avatar.png'}
//               alt="Profile"
//               className="w-32 h-32 rounded-full"
//             />
//           </div>
//           <div>
//             <h2 className="text-2xl font-bold">{patientData.username}</h2>
//             <p className="text-gray-600">{patientData.email}</p>
//           </div>
//         </div>
//         <div className="grid grid-cols-3 gap-4 mb-6">
//           {[
//             { label: 'Sex', value: patientData.gender },
//             { label: 'Age', value: calculateAge(patientData.age) },
//             { label: 'Blood Type', value: patientData.blood },
//             { label: 'Status', value: patientData.status },
//             { label: 'Appointments', value: patientData.appointment_count },
//             { label: 'Allergies', value: patientData.haveallergy },
//             { label: 'Chronic Diseases', value: patientData.chronic_diseases },
//           ].map((item, index) => (
//             <div key={index}>
//               <p className="text-gray-600 text-sm">{item.label}</p>
//               <p className="font-semibold">{item.value}</p>
//             </div>
//           ))}
//         </div>

//         <h3 className="text-lg font-semibold mb-3">Appointment History</h3>
//         <div className="overflow-x-auto">
//           <table className="w-full">
//             <thead>
//               <tr className="bg-gray-100">
//                 <th className="text-left p-2">Doctor Name</th>
//                 <th className="text-left p-2">Time Of Appointment</th>
//                 <th className="text-left p-2">Status</th>
//                 <th className="text-left p-2">Documents</th>
//               </tr>
//             </thead>
//             <tbody>
//               {patientData.appointments?.map((appointment, index) => (
//                 <tr key={index} className="border-b">
//                   <td className="p-2">{appointment.doctor_name}</td>
//                   <td className="p-2">{appointment.appointment_time}</td>
//                   <td className="p-2">
//                     <span
//                       className={`px-2 py-1 rounded-full text-xs ${
//                         appointment.status === 'Under Treatment'
//                           ? 'bg-red-100 text-red-600'
//                           : 'bg-green-100 text-green-600'
//                       }`}
//                     >
//                       {appointment.status}
//                     </span>
//                   </td>
//                   <td className="p-2">
//                     <button
//                       className="flex items-center text-blue-600"
//                       onClick={() => downloadAppointmentDetails(index)}
//                     >
//                       <Download size={16} className="mr-1" /> Download
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default PatientProfile;





import React, { useState, useEffect } from "react";
import axios from "axios";
import { Download } from "lucide-react";
import jsPDF from "jspdf";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const PatientProfile = () => {
  const [patientData, setPatientData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPatientProfile = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/patients/profile",
          {
            withCredentials: true,
          }
        );
        setPatientData(response.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch patient profile");
        setLoading(false);
      }
    };

    fetchPatientProfile();
  }, []);

  const downloadAppointmentDetails = (index) => {
    const appointment = patientData.appointments[index];
    const pdf = new jsPDF("p", "mm", "a4");

    // Set colors
    const primaryColor = "#007bff";
    const secondaryColor = "#6c757d";

    // Header
    pdf.setFillColor(primaryColor);
    pdf.rect(0, 0, 210, 40, "F");
    pdf.setTextColor(255, 255, 255);
    pdf.setFontSize(24);
    pdf.text("Hospital Management System", 105, 20, { align: "center" });
    pdf.setFontSize(16);
    pdf.text(`Appointment Details for ${patientData.username}`, 105, 35, {
      align: "center",
    });

    // Reset text color
    pdf.setTextColor(0, 0, 0);

    // Patient Information
    pdf.setFontSize(18);
    pdf.setTextColor(primaryColor);
    pdf.text("Patient Information:", 20, 60);
    pdf.setFontSize(12);
    pdf.setTextColor(0, 0, 0);
    pdf.text(`Name: ${patientData.username}`, 25, 70);
    pdf.text(`Email: ${patientData.email}`, 25, 80);
    pdf.text(`Gender: ${patientData.gender}`, 25, 90);
    pdf.text(`Age: ${patientData.age}`, 25, 100);
    pdf.text(`Blood Type: ${patientData.blood}`, 25, 110);

    // Appointment Information
    pdf.setFontSize(18);
    pdf.setTextColor(primaryColor);
    pdf.text("Appointment Details:", 20, 130);
    pdf.setFontSize(12);
    pdf.setTextColor(0, 0, 0);
    pdf.text(`Doctor Name: ${appointment.doctor_name}`, 25, 140);
    pdf.text(`Time of Appointment: ${appointment.appointment_time}`, 25, 150);

    // Additional Information
    pdf.setFontSize(18);
    pdf.setTextColor(primaryColor);
    pdf.text("Additional Information:", 20, 170);
    pdf.setFontSize(12);
    pdf.setTextColor(0, 0, 0);
    pdf.text(`Allergies: ${patientData.haveallergy}`, 25, 180);
    pdf.text(`Chronic Diseases: ${patientData.chronic_diseases}`, 25, 190);

    // Footer with copyright
    pdf.setFontSize(10);
    pdf.setTextColor(secondaryColor);
    const websiteName = "www.yourhospital.com";
    pdf.text(
      `Â© ${new Date().getFullYear()} ${websiteName}. All rights reserved.`,
      105,
      285,
      { align: "center" }
    );

    // Download the PDF
    pdf.save(`appointment_${index + 1}.pdf`);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!patientData) return <div>No patient data available</div>;

  return (
    <>
      <Navbar />
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-3xl mx-auto my-8">
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <img
              src={
                `http://localhost:5000/${patientData.profile_image}` ||
                "/default-avatar.png"
              }
              alt="Profile"
              className="w-32 h-32 rounded-full"
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold">{patientData.username}</h2>
            <p className="text-gray-600">{patientData.email}</p>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4 mb-6">
          {[
            { label: "Sex", value: patientData.gender },
            { label: "Age", value: patientData.age },
            { label: "Blood Type", value: patientData.blood },
            { label: "Status", value: patientData.status },
            { label: "Appointments", value: patientData.appointment_count },
            { label: "Allergies", value: patientData.haveallergy },
            { label: "Chronic Diseases", value: patientData.chronic_diseases },
          ].map((item, index) => (
            <div key={index}>
              <p className="text-gray-600 text-sm">{item.label}</p>
              <p className="font-semibold">{item.value}</p>
            </div>
          ))}
        </div>

        <h3 className="text-lg font-semibold mb-3">Appointment History</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-100">
                <th className="text-left p-2">Doctor Name</th>
                <th className="text-left p-2">Time Of Appointment</th>
                <th className="text-left p-2">Status</th>
                <th className="text-left p-2">Documents</th>
              </tr>
            </thead>
            <tbody>
              {patientData.appointments?.map((appointment, index) => (
                <tr key={index} className="border-b">
                  <td className="p-2">{appointment.doctor_name}</td>
                  <td className="p-2">{appointment.appointment_time}</td>
                  <td className="p-2">
                    <span
                      className={`px-2 py-1 rounded-full text-xs ${
                        appointment.status === "Under Treatment"
                          ? "bg-red-100 text-red-600"
                          : "bg-green-100 text-green-600"
                      }`}
                    >
                      {appointment.status}
                    </span>
                  </td>
                  <td className="p-2">
                    <button
                      className="flex items-center text-blue-600"
                      onClick={() => downloadAppointmentDetails(index)}
                    >
                      <Download size={16} className="mr-1" /> Download
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PatientProfile;