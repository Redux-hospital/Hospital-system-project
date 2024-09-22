



const db = require('../config/db');
const bcrypt = require('bcrypt');





exports.getDoctorProfile = async (req, res) => {
    try {
      const staffId = req.user.staff_id;
      console.log('Fetching profile for doctor ID:', staffId);
  
      const query = 'SELECT staff_id, staff_name, email, specialty, bio, profile_image FROM medical_staff WHERE staff_id = $1';
      const result = await db.query(query, [staffId]);
      
      console.log('Query result:', result.rows[0]);
  
      if (result.rows.length === 0) {
        return res.status(404).json({ message: 'Doctor not found' });
      }
      res.json(result.rows[0]);
    } catch (error) {
      console.error('Error fetching doctor profile:', error);
      res.status(500).json({ message: 'Error fetching doctor profile', error: error.message });
    }
  };




exports.updateDoctorProfile = async (req, res) => {
    try {
      const doctorId = req.user.staff_id;
      const { staff_name, email, password, specialty, bio } = req.body;
      let query = 'UPDATE medical_staff SET staff_name = $1, email = $2, specialty = $3, bio = $4';
      let values = [staff_name, email, specialty, bio];
      if (password) {
        const hashedPassword = await bcrypt.hash(password, 10);
        query += ', password = $5';
        values.push(hashedPassword);
      }
      query += ' WHERE staff_id = $' + (values.length + 1) + ' RETURNING staff_id, staff_name, email, specialty, bio, profile_image';
      values.push(doctorId);
      const result = await db.query(query, values);
      if (result.rows.length === 0) {
        return res.status(404).json({ message: 'Doctor not found' });
      }
      res.json(result.rows[0]);
    } catch (error) {
      console.error('Error updating doctor profile:', error);
      res.status(500).json({ message: 'Error updating doctor profile', error: error.message });
    }
  };
  
  exports.updateProfileImage = async (req, res) => {
    try {
      const doctorId = req.user.staff_id;
      const profileImage = req.file ? req.file.path : null;
      if (!profileImage) {
        return res.status(400).json({ message: 'No image file uploaded' });
      }
      const query = 'UPDATE medical_staff SET profile_image = $1 WHERE staff_id = $2 RETURNING staff_id, profile_image';
      const result = await db.query(query, [profileImage, doctorId]);
      if (result.rows.length === 0) {
        return res.status(404).json({ message: 'Doctor not found' });
      }
      res.json(result.rows[0]);
    } catch (error) {
      console.error('Error updating profile image:', error);
      res.status(500).json({ message: 'Error updating profile image', error: error.message });
    }
  };