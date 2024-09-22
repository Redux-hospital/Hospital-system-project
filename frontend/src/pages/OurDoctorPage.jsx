


// // admin-OurDoctorPage.jsx
// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';

// const OurDoctorPage = () => {
//   const [doctors, setDoctors] = useState([]);
//   const [filteredDoctors, setFilteredDoctors] = useState([]);
//   const [specialties, setSpecialties] = useState([]);
//   const [selectedSpecialty, setSelectedSpecialty] = useState('');
//   const [searchTerm, setSearchTerm] = useState('');
//   const [currentPage, setCurrentPage] = useState(1);
//   const [doctorsPerPage] = useState(6);

//   useEffect(() => {
//     fetchDoctors();
//   }, []);

//   useEffect(() => {
//     filterDoctors();
//   }, [doctors, selectedSpecialty, searchTerm]);

//   const fetchDoctors = async () => {
//     try {
//       const response = await fetch('http://localhost:5000/api/doctors');
//       const data = await response.json();
//       setDoctors(data);
//       const uniqueSpecialties = [...new Set(data.map(doctor => doctor.specialty))];
//       setSpecialties(uniqueSpecialties);
//     } catch (error) {
//       console.error('Error fetching doctors:', error);
//     }
//   };

//   const filterDoctors = () => {
//     let filtered = doctors;
//     if (selectedSpecialty) {
//       filtered = filtered.filter(doctor => doctor.specialty === selectedSpecialty);
//     }
//     if (searchTerm) {
//       filtered = filtered.filter(doctor => 
//         doctor.staff_name.toLowerCase().includes(searchTerm.toLowerCase())
//       );
//     }
//     setFilteredDoctors(filtered);
//     setCurrentPage(1);
//   };

//   // Get current doctors
//   const indexOfLastDoctor = currentPage * doctorsPerPage;
//   const indexOfFirstDoctor = indexOfLastDoctor - doctorsPerPage;
//   const currentDoctors = filteredDoctors.slice(indexOfFirstDoctor, indexOfLastDoctor);

//   // Change page
//   const paginate = (pageNumber) => setCurrentPage(pageNumber);

//   return (
//     <div className="bg-gray-100 flex flex-col min-h-screen">
//       <Navbar />
//       <div className="flex-grow py-10">
//         <div className="container mx-auto px-4">
//           <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
//             Our Doctors
//           </h1>
//           <div className="mb-6 flex flex-col md:flex-row justify-between items-center">
//             <select 
//               className="mb-4 md:mb-0 p-2 border rounded"
//               value={selectedSpecialty}
//               onChange={(e) => setSelectedSpecialty(e.target.value)}
//             >
//               <option value="">All Specialties</option>
//               {specialties.map((specialty, index) => (
//                 <option key={index} value={specialty}>{specialty}</option>
//               ))}
//             </select>
//             <input
//               type="text"
//               placeholder="Search by name"
//               className="p-2 border rounded"
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//             />
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {currentDoctors.map((doctor) => (
//               <div key={doctor.staff_id} className="bg-white rounded-lg shadow-lg overflow-hidden">
//                 <img
//                   src={`http://localhost:5000/${doctor.profile_image}` || 'https://via.placeholder.com/150'}
//                   alt={doctor.staff_name}
//                   className="w-full h-40 object-cover"
//                 />
//                 <div className="p-6">
//                   <h2 className="text-2xl font-bold text-gray-800 mb-2">{doctor.staff_name}</h2>
//                   <h3 className="text-lg text-gray-600 mb-4">{doctor.specialty}</h3>
//                   <p className="text-gray-700 mb-4">{doctor.bio}</p>
//                   <Link to={`/doctor/${doctor.staff_id}`} className="text-blue-500 hover:underline">
//                     View Profile
//                   </Link>
//                 </div>
//               </div>
//             ))}
//           </div>
//           <div className="mt-8 flex justify-center">
//             {[...Array(Math.ceil(filteredDoctors.length / doctorsPerPage)).keys()].map((number) => (
//               <button
//                 key={number + 1}
//                 onClick={() => paginate(number + 1)}
//                 className={`mx-1 px-3 py-1 rounded ${
//                   currentPage === number + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200'
//                 }`}
//               >
//                 {number + 1}
//               </button>
//             ))}
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default OurDoctorPage;











import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const OurDoctorPage = () => {
  const [doctors, setDoctors] = useState([]);
  const [filteredDoctors, setFilteredDoctors] = useState([]);
  const [specialties, setSpecialties] = useState([]);
  const [selectedSpecialty, setSelectedSpecialty] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [doctorsPerPage] = useState(6);

  useEffect(() => {
    fetchDoctors();
  }, []);

  useEffect(() => {
    filterDoctors();
  }, [doctors, selectedSpecialty, searchTerm]);

  const fetchDoctors = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/doctors");
      const data = await response.json();
      setDoctors(data);
      const uniqueSpecialties = [
        ...new Set(data.map((doctor) => doctor.specialty)),
      ];
      setSpecialties(uniqueSpecialties);
    } catch (error) {
      console.error("Error fetching doctors:", error);
    }
  };

  const filterDoctors = () => {
    let filtered = doctors;
    if (selectedSpecialty) {
      filtered = filtered.filter(
        (doctor) => doctor.specialty === selectedSpecialty
      );
    }
    if (searchTerm) {
      filtered = filtered.filter((doctor) =>
        doctor.staff_name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    setFilteredDoctors(filtered);
    setCurrentPage(1);
  };

  // Get current doctors
  const indexOfLastDoctor = currentPage * doctorsPerPage;
  const indexOfFirstDoctor = indexOfLastDoctor - doctorsPerPage;
  const currentDoctors = filteredDoctors.slice(
    indexOfFirstDoctor,
    indexOfLastDoctor
  );

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="bg-neutral-800 flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow py-10">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center text-white mb-8">
            Our Doctors
          </h1>
          <div className="mb-6 flex flex-col md:flex-row justify-between items-center">
            <select
              className="mb-4 md:mb-0 p-2 border rounded bg-neutral-700 text-white"
              value={selectedSpecialty}
              onChange={(e) => setSelectedSpecialty(e.target.value)}
            >
              <option value="">All Specialties</option>
              {specialties.map((specialty, index) => (
                <option key={index} value={specialty}>
                  {specialty}
                </option>
              ))}
            </select>
            <input
              type="text"
              placeholder="Search by name"
              className="p-2 border rounded bg-neutral-700 text-white"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentDoctors.map((doctor) => (
              <motion.div
                key={doctor.staff_id}
                className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30"
              >
                <div className="h-96 w-72">
                  <img
                    src={
                      `http://localhost:5000/${doctor.profile_image}` ||
                      "https://via.placeholder.com/150"
                    }
                    alt={doctor.staff_name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                  <h2 className="font-dmserif text-3xl font-bold text-white mb-2">
                    {doctor.staff_name}
                  </h2>
                  <h3 className="text-lg text-white mb-4">
                    {doctor.specialty}
                  </h3>
                  <br />
                  {/* <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    {doctor.bio}
                  </p> */}
                  <Link
                    to={`/doctor/${doctor.staff_id}`}
                    className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60"
                  >
                    View Profile
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="mt-8 flex justify-center">
            {[
              ...Array(
                Math.ceil(filteredDoctors.length / doctorsPerPage)
              ).keys(),
            ].map((number) => (
              <button
                key={number + 1}
                onClick={() => paginate(number + 1)}
                className={`mx-1 px-3 py-1 rounded ${
                  currentPage === number + 1
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-black"
                }`}
              >
                {number + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default OurDoctorPage;
