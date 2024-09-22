

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

exports.getAllPatients = async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM patients');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.getPatientCount = async (req, res) => {
  try {
    const result = await db.query('SELECT COUNT(*) FROM patients');
    res.json({ count: parseInt(result.rows[0].count) });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
};




exports.updateApprovalStatus = async (req, res) => {
  const { id, isApproved } = req.body;
  try {
    const result = await db.query(
      'UPDATE patients SET is_approved = $1 WHERE id = $2 RETURNING *',
      [isApproved, id]
    );
    
    if (result.rows.length > 0) {
      const patient = result.rows[0];
      
      // Send email
      const mailOptions = {
        from: 'abedalmajedalajarmah@gmail.com',
        to: patient.email,
        subject: 'Account Approval Status Update',
        text: isApproved 
          ? 'Your account has been approved. You can now log in to the system.' 
          : 'Your account has been disapproved. Please contact support for more information.'
      };

      await transporter.sendMail(mailOptions);

      res.json(patient);
    } else {
      res.status(404).json({ error: 'Patient not found' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
};