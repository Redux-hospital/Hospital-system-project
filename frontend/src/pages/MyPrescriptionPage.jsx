
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { jsPDF } from "jspdf";
import "jspdf-autotable";
import { Download, Calendar, User } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Configure Axios to send credentials with every request
axios.defaults.withCredentials = true;

const PrescriptionCard = ({ prescription, patientName, onDownload }) => (
  <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-6">
    <div className="bg-blue-500 text-white px-6 py-4">
      <h2 className="text-xl font-semibold">Prescription from Dr. {prescription.doctor_name}</h2>
    </div>
    <div className="p-6">
      <div className="mb-4">
        <div className="flex items-center mb-2">
          <Calendar className="w-5 h-5 mr-2 text-gray-500" />
          <span className="text-sm text-gray-600">Date: {new Date().toLocaleDateString()}</span>
        </div>
        <div className="flex items-center">
          <User className="w-5 h-5 mr-2 text-gray-500" />
          <span className="text-sm text-gray-600">Patient: {patientName}</span>
        </div>
      </div>
      <div className="mb-4">
        <h3 className="font-semibold mb-2">Diagnosis:</h3>
        <p className="text-gray-700">{prescription.diagnosis}</p>
      </div>
      <div className="mb-4">
        <h3 className="font-semibold mb-2">Medications:</h3>
        <p className="text-gray-700">{prescription.drugs}</p>
      </div>
      <div className="mb-6">
        <h3 className="font-semibold mb-2">Treatment Plan:</h3>
        <p className="text-gray-700">{prescription.treatment_plan}</p>
      </div>
      <button
        className="flex items-center justify-center w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300"
        onClick={onDownload}
      >
        <Download className="w-5 h-5 mr-2" />
        Download PDF
      </button>
    </div>
  </div>
);

export default function MyPrescriptionPage() {
  const [prescriptions, setPrescriptions] = useState([]);
  const [patientName, setPatientName] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUserProfile();
    fetchPrescriptions();
  }, []);

  const fetchUserProfile = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/patients/profile');
      setPatientName(`${response.data.username}`);
    } catch (err) {
      console.error('Error fetching user profile:', err);
      setError('Failed to fetch user profile');
    }
  };

  const fetchPrescriptions = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/prescription');
      setPrescriptions(response.data);
    } catch (err) {
      console.error('Error fetching prescriptions:', err);
      setError('Failed to fetch prescriptions');
    } finally {
      setLoading(false);
    }
  };

  const downloadPDF = (prescription, patientName) => {
    const doc = new jsPDF();
    
    // Add title
    doc.setFontSize(20);
    doc.setTextColor(41, 128, 185); // Blue color
    doc.text("Medical Prescription", 105, 15, null, null, "center");
    
    // Add prescription details
    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0); // Black color
    doc.text(`Doctor: Dr. ${prescription.doctor_name}`, 20, 30);
    doc.text(`Date:${new Date().toLocaleDateString()}`, 20, 40);
    doc.text(`Patient: ${patientName}`, 20, 50);
    
    // Add prescription content
    doc.autoTable({
      startY: 60,
      styles: { fillColor: [249, 249, 249] },
      headStyles: { fillColor: [41, 128, 185], textColor: [255, 255, 255] },
      alternateRowStyles: { fillColor: [255, 255, 255] },
      head: [["Item", "Details"]],
      body: [
        ["Diagnosis", prescription.diagnosis],
        ["Medications", prescription.drugs],
        ["Treatment Plan", prescription.treatment_plan],
      ],
    });
    
    // Add footer
    doc.setFontSize(10);
    doc.setTextColor(128, 128, 128); // Gray color
    doc.text("© 2024 www.yourhospital.com. All rights reserved", 105, 280, null, null, "center");
    
    // Save the PDF
    doc.save(`Prescription_${new Date().toLocaleDateString()}_ ${patientName}_${prescription.doctor_name}.pdf`);
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center text-blue-600">My Prescriptions</h1>
        {error && <p className="text-red-500 mb-4 text-center">{error}</p>}
        {loading ? (
          <p className="text-center text-lg">Loading...</p>
        ) : prescriptions.length > 0 ? (
          <div className="grid md:grid-cols-2 gap-6">
            {prescriptions.map((prescription, index) => (
              <PrescriptionCard 
                key={index} 
                prescription={prescription} 
                patientName={patientName}
                onDownload={() => downloadPDF(prescription, patientName)} 
              />
            ))}
          </div>
        ) : (
          <p className="text-center text-lg">No prescriptions available.</p>
        )}
      </div>
      <Footer />
    </>
  );
}















