// admin-doctorController.js
const db = require('../config/db');
const nodemailer = require('nodemailer');

exports.getAllDoctors = async (req, res) => {
  try {
    const result = await db.query(
      'SELECT staff_id, staff_name, email, profile_image, specialty, bio FROM medical_staff WHERE is_approved = TRUE'
    );
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching doctors:', error);
    res.status(500).json({ error: 'An error occurred while fetching doctors' });
  }
};

exports.getDoctorById = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await db.query(
      'SELECT staff_id, staff_name, email, profile_image, specialty, bio FROM medical_staff WHERE staff_id = $1 AND is_approved = TRUE',
      [id]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Doctor not found' });
    }
    res.json(result.rows[0]);
  } catch (error) {
    console.error('Error fetching doctor:', error);
    res.status(500).json({ error: 'An error occurred while fetching the doctor' });
  }
};

exports.addDoctor = async (req, res) => {
  const { staff_name, email, password, specialty, bio } = req.body;
  const profile_image = req.file ? `uploads/${req.file.filename}` : null;

  try {
    const result = await db.query(
      'INSERT INTO medical_staff (staff_name, email, password, profile_image, specialty, bio) VALUES ($1, $2, $3, $4, $5, $6) RETURNING staff_id',
      [staff_name, email, password, profile_image, specialty, bio]
    );
    res.status(201).json({ staff_id: result.rows[0].staff_id, message: 'Doctor added successfully' });
  } catch (error) {
    console.error('Error adding doctor:', error);
    res.status(500).json({ error: 'An error occurred while adding the doctor' });
  }
};



// Configure nodemailer transporter
const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: 'abedalmajedalajarmah@gmail.com',
      pass: 'ndgx zdev lywb gohb'
    },
  });
  
  exports.contactDoctor = async (req, res) => {
    const { doctorId, message } = req.body;
  
    try {
      // Fetch doctor's email from the database
      const doctorResult = await db.query('SELECT email FROM medical_staff WHERE staff_id = $1', [doctorId]);
      
      if (doctorResult.rows.length === 0) {
        return res.status(404).json({ error: 'Doctor not found' });
      }
  
      const doctorEmail = doctorResult.rows[0].email;
  
      // Send email
      const mailOptions = {
        from: 'abedalmajedalajarmah@gmail.com',
        to: doctorEmail,
        subject: 'New message from a patient',
        text: message,
      };
  
      await transporter.sendMail(mailOptions);
  
      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ error: 'An error occurred while sending the email' });
    }
  };