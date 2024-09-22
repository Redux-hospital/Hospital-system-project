// import Sidebar from "../AdminPages/sidebar";
// import Cards from "./cards";

// // src/pages/Home.jsx
// const AdminHome = () => {
//   return (
//     <>
//         <Sidebar/>
//         <Cards/>
//     {/* <div className="p-8">
//       <h1 className="text-2xl font-bold mb-4">Dashboard Statistics</h1>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//         <div className="bg-blue-500 text-white p-6 rounded shadow">
//           <h2 className="text-xl">Total Doctors</h2>
//           <p className="text-4xl">50</p>
//         </div>
//         <div className="bg-green-500 text-white p-6 rounded shadow">
//           <h2 className="text-xl">Total Patients</h2>
//           <p className="text-4xl">200</p>
//         </div>
//         <div className="bg-red-500 text-white p-6 rounded shadow">
//           <h2 className="text-xl">Feedbacks</h2>
//           <p className="text-4xl">30</p>
//         </div>
//       </div>
//     </div> */}
//     </>
//   );
// };

// export default AdminHome;



import React from 'react';
import Sidebar from "../AdminPages/sidebar";
import Cards from "./cards";

const AdminHome = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-10">
        <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>
        <Cards />
      </div>
    </div>
  );
};

export default AdminHome;