

// admin-appointmentController.js
const db = require('../config/db');
const jwt = require('jsonwebtoken');

exports.authenticateToken = (req, res, next) => {
  const token = req.cookies['Patient Token'];

  if (!token) {
    return res.status(401).json({ message: 'Authentication required' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(403).json({ message: 'Invalid or expired token' });
  }
};

exports.getAvailableSlots = async (req, res) => {
  const { doctorId } = req.params;
  try {
    const result = await db.query(
      'SELECT * FROM doctor_availability WHERE staff_id = $1 AND is_booked = FALSE AND available_start_date >= CURRENT_DATE ORDER BY available_start_date, available_start_time',
      [doctorId]
    );
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching available slots:', error);
    res.status(500).json({ error: 'An error occurred while fetching available slots' });
  }
};

exports.bookAppointment = async (req, res) => {
  const { available_id } = req.body;
  const patientId = req.user.id; // Get patient ID from the token

  try {
    await db.query('BEGIN');
    
    // Check if the slot is still available
    const slotCheck = await db.query(
      'SELECT * FROM doctor_availability WHERE available_id = $1 AND is_booked = FALSE',
      [available_id]
    );
    
    if (slotCheck.rows.length === 0) {
      await db.query('ROLLBACK');
      return res.status(400).json({ message: 'This slot is no longer available' });
    }
    
    // Book the appointment
    const result = await db.query(
      'INSERT INTO appointments (available_id, id, status) VALUES ($1, $2, $3) RETURNING appointment_id',
      [available_id, patientId, 'SCHEDULED']
    );
    
    // Mark the slot as booked
    await db.query(
      'UPDATE doctor_availability SET is_booked = TRUE WHERE available_id = $1',
      [available_id]
    );
    
    await db.query('COMMIT');
    
    res.status(201).json({ appointment_id: result.rows[0].appointment_id, message: 'Appointment booked successfully' });
  } catch (error) {
    await db.query('ROLLBACK');
    console.error('Error booking appointment:', error);
    res.status(500).json({ error: 'An error occurred while booking the appointment' });
  }
};