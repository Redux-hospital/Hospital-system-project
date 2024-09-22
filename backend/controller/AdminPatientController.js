const db = require('../config/db');
const bcrypt = require('bcrypt');

exports.addPatient = async (req, res) => {
  const { username, email, password, gender, dob } = req.body;
  const profile_image = req.file ? `uploads/${req.file.filename}` : null;

  try {
    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert patient into database
    const query = 
     ` INSERT INTO patients (username, email, password, gender, dob, profile_image)
      VALUES ($1, $2, $3, $4, $5, $6)
      RETURNING id`
    ;
    const values = [username, email, hashedPassword, gender, dob, profile_image];

    const result = await db.query(query, values);

    res.status(201).json({ message: 'Patient added successfully', patientId: result.rows[0].id });
  } catch (error) {
    console.error('Error adding patient:', error);
    if (error.constraint === 'patients_username_key') {
      return res.status(400).json({ message: 'Username already exists' });
    }
    if (error.constraint === 'patients_email_key') {
      return res.status(400).json({ message: 'Email already exists' });
    }
    res.status(500).json({ message: 'Error adding patient' });
  }
};