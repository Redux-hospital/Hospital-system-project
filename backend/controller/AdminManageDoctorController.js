// Backend: controllers/adminController.js
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

exports.getAllStaff = async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM medical_staff ORDER BY staff_id DESC');
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching staff:', error);
    res.status(500).json({ error: 'An error occurred while fetching staff' });
  }
};

exports.approveStaff = async (req, res) => {
  const { id } = req.params;
  const { isApproved } = req.body;

  try {
    const result = await db.query(
      'UPDATE medical_staff SET is_approved = $1 WHERE staff_id = $2 RETURNING *',
      [isApproved, id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Staff member not found' });
    }

    const staffMember = result.rows[0];

    // Send email
    const mailOptions = {
      from: 'abedalmajedalajarmah@gmail.com',
      to: staffMember.email,
      subject: `Your account status has been updated`,
      text: `Your account has been ${isApproved ? 'approved' : 'disapproved'}.`,
    };

    await transporter.sendMail(mailOptions);

    res.json({ message: 'Staff member updated successfully', staff: staffMember });
  } catch (error) {
    console.error('Error updating staff member:', error);
    res.status(500).json({ error: 'An error occurred while updating staff member' });
  }
};



// New function to get doctor count
exports.getDoctorCount = async (req, res) => {
  try {
    const result = await db.query('SELECT COUNT(*) FROM medical_staff WHERE specialty IS NOT NULL');
    res.json({ count: parseInt(result.rows[0].count) });
  } catch (error) {
    console.error('Error fetching doctor count:', error);
    res.status(500).json({ error: 'An error occurred while fetching doctor count' });
  }
};