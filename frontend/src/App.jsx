

// App.js
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import AboutUsPage from './pages/AboutUs';
import ContactUsPage from './pages/ContactUsPage';
import OurDoctorPage from './pages/OurDoctorPage';
import HealthcareDashboard from './pages/ProfileHistoryPage';
import ProfileEditPage from './pages/ProfileEditPage';
import Dashboard from './pages/DoctorPages/Dashboard';
import DoctorProfileEditPage from './pages/DoctorPages/DoctorProfileEditPage';
// import AdminDashboard from './pages/AdminPages/AdminHome';
// import OverviewPage from './pages/AdminPages/AddDoctor';
// import Sidebar from './pages/AdminPages/sidebar';
import AdminHome from './pages/AdminPages/AdminHome';
import AddDoctor from './pages/AdminPages/AddDoctor';
import StaffManagementPage from './pages/AdminPages/StaffManagementPage';
import AddPatient from './pages/AdminPages/AddPatient';
import PatientRecordsPage from './pages/AdminPages/PatientRecordsPage';
import FeedbackPage from './pages/AdminPages/FeedbackPage';
import SchedulesPage from './pages/AdminPages/SchedulesPage';
import AdminLogin from './pages/AdminPages/Login';
import DoctorProfilePage from './pages/DoctorDetailsPage';
import Appointment from './pages/AdminPages/AdminAppointmentPatient';
import MyPrescriptionPage from './pages/MyPrescriptionPage';
import AdminPrescription from './pages/AdminPages/AdminPrescription';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/about" element={<AboutUsPage />} /> 
        <Route path="/contact" element={<ContactUsPage />} /> 
        <Route path="/doctor" element={<OurDoctorPage />} /> 
        <Route path="/doctor/:id" element={<DoctorProfilePage />} />
        <Route path="/history" element={<HealthcareDashboard />} /> 
        <Route path="/profile" element={<ProfileEditPage />} /> 

        <Route path="/prescription" element={<MyPrescriptionPage />} /> 

        {/* Doctor dashboard */}

        <Route path="/home" element={<Dashboard />} />
        <Route path="/DoctorProfile" element={<DoctorProfileEditPage />} />

        {/* Admin dashboard */}

        <Route path="/AdminDashboard" element={<AdminHome />} />
        <Route path="/AdminDashboard/add-doctor" element={<AddDoctor />} />
        <Route path="/AdminDashboard/manage-doctors" element={<StaffManagementPage />} />
        <Route path="/AdminDashboard/add-patient" element={<AddPatient />} />
        <Route path="/AdminDashboard/manage-patients" element={<PatientRecordsPage />} />
        <Route path="/AdminDashboard/show-feedback" element={<FeedbackPage />} />
        <Route path="/AdminDashboard/schedule" element={<SchedulesPage />} />
        <Route path="/AdminLogin" element={<AdminLogin />} />
        <Route path="/AdminDashboard/Appointement" element={<Appointment />} />
        <Route path="/AdminDashboard/Prescription" element={<AdminPrescription />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
