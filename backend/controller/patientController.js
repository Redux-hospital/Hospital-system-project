
const pool = require('../config/db');
const bcrypt = require('bcrypt');

exports.getProfile = async (req, res) => {
  try {
    const { id } = req.user; // Assuming you have middleware to extract user from token

    // Updated query to get all patient details
    const patientQuery = 
     ` SELECT 
        p.id, p.username, p.email, p.gender, p.dob, p.profile_image, 
        p.gender AS sex, 
        DATE_PART('year', AGE(p.dob)) AS age, 
        p.blood_type AS blood, 
        CASE WHEN p.is_approved THEN 'Active' ELSE 'Inactive' END AS status, 
        p.haveAllergy, p.chronic_diseases
      FROM patients p 
      WHERE p.id = $1`
     ;
  
    // Merged query to get appointment details including doctor's name and appointment count
const appointmentQuery = `
SELECT 
  a.appointment_id, 
  ms.staff_name AS doctor_name,
  da.available_start_date || ' ' || da.available_start_time AS appointment_time,
  a.status,
  (SELECT COUNT(*) AS appointment_count
   FROM appointments 
   WHERE id = $1 AND is_Deleted = false) AS appointment_count
FROM appointments a
JOIN doctor_availability da ON a.available_id = da.available_id
JOIN medical_staff ms ON da.staff_id = ms.staff_id
WHERE a.id = $1 AND a.is_Deleted = false
ORDER BY da.available_start_date DESC, da.available_start_time DESC
`;


    const patientResult = await pool.query(patientQuery, [id]);
    const appointmentResult = await pool.query(appointmentQuery, [id]);

    if (patientResult.rows.length === 0) {
      return res.status(404).json({ message: 'Patient not found' });
    }

    const patientData = patientResult.rows[0];
    const appointments = appointmentResult.rows;

    // Combine all the data
    const profileData = {
      ...patientData,
      appointments: appointments,
      appointment_count: appointments.length
    };

    res.json(profileData);
  } catch (error) {
    console.error('Error in getProfile:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

exports.updateProfile = async (req, res) => {
  try {
    const { id } = req.user;
    const { username, email, password } = req.body;

    let query = 'UPDATE patients SET username = $1, email = $2';
    let values = [username, email];

    if (password) {
      const hashedPassword = await bcrypt.hash(password, 10);
      query += ', password = $3';
      values.push(hashedPassword);
    }

    query += ' WHERE id = $' + (values.length + 1) + ' RETURNING id, username, email, gender, dob, profile_image';
    values.push(id);

    const { rows } = await pool.query(query, values);

    if (rows.length === 0) {
      return res.status(404).json({ message: 'Patient not found' });
    }

    res.json(rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

exports.updateProfileImage = async (req, res) => {
  try {
    const { id } = req.user;
    const profileImage = req.file ? req.file.path : null;

    if (!profileImage) {
      return res.status(400).json({ message: 'No image file uploaded' });
    }

    const query = 'UPDATE patients SET profile_image = $1 WHERE id = $2 RETURNING id, profile_image';
    const { rows } = await pool.query(query, [profileImage, id]);

    if (rows.length === 0) {
      return res.status(404).json({ message: 'Patient not found' });
    }

    res.json({ profileImage: rows[0].profile_image });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};