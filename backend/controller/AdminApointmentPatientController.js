

const db = require('../config/db');
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: 'abedalmajedalajarmah@gmail.com',
    pass: 'ndgx zdev lywb gohb'
  },
});

exports.getAppointments = async (req, res) => {
  try {
    const query = `
      SELECT 
        a.appointment_id, 
        p.username AS patient_name, 
        ms.staff_name AS doctor_name, 
        da.available_start_date, 
        da.available_start_time,
        CASE
          WHEN a.is_Deleted = TRUE THEN 'Cancelled'
          WHEN a.is_Done = TRUE THEN 'Completed'
          ELSE 'Scheduled'
        END AS status
      FROM 
        appointments a
      JOIN 
        patients p ON a.id = p.id
      JOIN 
        doctor_availability da ON a.available_id = da.available_id
      JOIN 
        medical_staff ms ON da.staff_id = ms.staff_id
    `;
    const { rows } = await db.query(query);
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

exports.cancelAppointment = async (req, res) => {
  const { appointmentId, reason } = req.body;

  try {
    await db.query('BEGIN');

    // Check if the appointment exists and its status
    const checkQuery = `
      SELECT is_Done, is_Deleted
      FROM appointments 
      WHERE appointment_id = $1
    `;
    const { rows: checkRows } = await db.query(checkQuery, [appointmentId]);

    if (checkRows.length === 0) {
      await db.query('ROLLBACK');
      return res.status(404).json({ success: false, message: 'Appointment not found' });
    }

    if (checkRows[0].is_done) {
      await db.query('ROLLBACK');
      return res.status(400).json({ success: false, message: 'Cannot cancel a completed appointment' });
    }

    if (checkRows[0].is_deleted) {
      await db.query('ROLLBACK');
      return res.status(400).json({ success: false, message: 'This appointment is already cancelled' });
    }

    // Update appointment status
    const updateQuery = `
      UPDATE appointments 
      SET is_Deleted = TRUE 
      WHERE appointment_id = $1 
      RETURNING id
    `;
    const { rows } = await db.query(updateQuery, [appointmentId]);

    const patientId = rows[0].id;

    // Get patient email
    const emailQuery = 'SELECT email FROM patients WHERE id = $1';
    const { rows: emailRows } = await db.query(emailQuery, [patientId]);
    const patientEmail = emailRows[0].email;

    // Send email
    const mailOptions = {
      from: 'abedalmajedalajarmah@gmail.com',
      to: patientEmail,
      subject: 'Appointment Cancellation',
      text: `Your appointment has been cancelled. Reason: ${reason}`,
    };

    await transporter.sendMail(mailOptions);

    await db.query('COMMIT');
    res.json({ success: true, message: 'Appointment cancelled successfully' });
  } catch (error) {
    await db.query('ROLLBACK');
    console.error(error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

exports.getAppointmentCount = async (req, res) => {
  try {
    const query = 'SELECT COUNT(*) as count FROM appointments WHERE is_Deleted = FALSE AND is_Done = FALSE';
    const { rows } = await db.query(query);
    const count = parseInt(rows[0].count, 10) || 0;
    res.json({ count });
  } catch (error) {
    console.error('Error in getAppointmentCount:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};