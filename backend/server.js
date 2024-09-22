

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const authRoutes = require('./routes/authRoutes');
const messageRoutes = require('./routes/messageRoutes');
const patientRoutes = require('./routes/patientRoutes');
const doctorRoutes = require('./routes/doctorRoutes');
const OurdoctorRoutes = require('./routes/OurDoctorsAndDetailsRoutes');
const appointmentRoutes = require('./routes/AppointmentFormRoutes');
const prescriptionRoutes = require('./routes/prescriptionRoutes');
const DoctorCommentRoutes = require('./routes/DoctorCommentRoutes');
///

const adminRoutes = require('./routes/adminRoutes');
const contactRoutes = require('./routes/contactRoutes');
const AdminpatientRoutes = require('./routes/AdminPatientRoutes');

////
const app = express();

app.use(cookieParser());
app.use(cors({
  origin: 'http://localhost:5173', // Replace with your frontend URL
  credentials: true
}));
app.use(express.json());
app.use('/uploads', express.static('uploads'));
app.use('/api/messages', messageRoutes);
app.use('/api/patients', patientRoutes);
app.use('/api/doctors', doctorRoutes);
app.use('/api/auth', authRoutes);
app.use('/api', OurdoctorRoutes);
app.use('/api/appointment', appointmentRoutes);
app.use('/api/prescription', prescriptionRoutes);
app.use('/api/comment', DoctorCommentRoutes);
///

app.use('/api/admin', adminRoutes);
app.use('/api/contacts', contactRoutes);
app.use('/api/patients', AdminpatientRoutes);
const AdminDoctorRoutes = require('./routes/AdminDoctorRoutes');
app.use('/api/admin', AdminDoctorRoutes);
const AdminManageDoctorRoutes = require('./routes/AdminManageDoctorRoutes');
app.use('/api/admin', AdminManageDoctorRoutes);
const AdminAllpatientRoutes = require('./routes/AdminAllPatientRoutes');
app.use('/api/Allpatients/', AdminAllpatientRoutes);
const scheduleRoutes = require('./routes/scheduleRoutes');
app.use('/api/schedules', scheduleRoutes);

const AdminPrescription = require('./routes/AdminPrescriptionRoutes');
app.use('/api/admin/Prescription', AdminPrescription);

///

const AdminAppointmentPatientRoutes = require('./routes/AdminAppointmentPatientRoutes');
app.use('/api/AdminPatientAppointments', AdminAppointmentPatientRoutes);
///
///
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));










