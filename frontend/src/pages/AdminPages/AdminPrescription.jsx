

import React, { useState, useEffect } from 'react';
import Sidebar from './sidebar';

export default function AdminPrescription() {
  const [prescriptions, setPrescriptions] = useState([]);

  useEffect(() => {
    fetchPrescriptions();
  }, []);

  const fetchPrescriptions = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/admin/Prescription/prescriptions');
      if (!response.ok) {
        throw new Error('Failed to fetch prescriptions');
      }
      const data = await response.json();
      setPrescriptions(data);
    } catch (error) {
      console.error('Error fetching prescriptions:', error);
    }
  };

  return (
    <div className="flex bg-gray-100 min-h-screen">
      <Sidebar />
      <div className="flex-1 p-8 ml-64"> {/* Added background color and padding */}
        <h1 className="text-3xl font-semibold text-gray-800 mb-6">Admin Prescriptions</h1>
        <div className="overflow-x-auto bg-white shadow-lg rounded-lg p-6">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-blue-500">
              <tr>
                <th className="text-left p-4 text-white font-medium">Doctor Name</th>
                <th className="text-left p-4 text-white font-medium">Patient Name</th>
                <th className="text-left p-4 text-white font-medium">Diagnosis</th>
                <th className="text-left p-4 text-white font-medium">Drugs</th>
                <th className="text-left p-4 text-white font-medium">Treatment Plan</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {prescriptions.map((prescription, index) => (
                <tr
                  key={index}
                  className="hover:bg-gray-100 transition duration-300 ease-in-out"
                >
                  <td className="p-4 border-r text-gray-700">{prescription.doctor_name}</td>
                  <td className="p-4 border-r text-gray-700">{prescription.patient_name}</td>
                  <td className="p-4 border-r text-gray-700">{prescription.diagnosis}</td>
                  <td className="p-4 border-r text-gray-700">{prescription.drugs}</td>
                  <td className="p-4 text-gray-700">{prescription.treatment_plan}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
