


import React from "react";
// import { useSelector } from 'react-redux';
import Sidebar from "./components/Sidebar";

const DoctorHome = () => {
  // const { user } = useSelector((state) => state.auth);

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 overflow-auto">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-4">Statistics</h1>
        </div>
      </div>
    </div>
  );
};

export default DoctorHome;
