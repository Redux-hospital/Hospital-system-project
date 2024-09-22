// controllers/contactController.js
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

exports.getContacts = async (req, res) => {
  const { page = 1, limit = 5 } = req.query;
  const offset = (page - 1) * limit;

  try {
    const { rows } = await db.query(
      'SELECT * FROM contacts ORDER BY contact_id DESC LIMIT $1 OFFSET $2',
      [limit, offset]
    );
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};

exports.getContactCount = async (req, res) => {
  try {
    const { rows } = await db.query('SELECT COUNT(*) FROM contacts');
    res.json({ count: parseInt(rows[0].count) });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};

exports.respondToContact = async (req, res) => {
  const { contactId, response } = req.body;

  try {
    // Update the database
    await db.query(
      'UPDATE contacts SET respond = $1 WHERE contact_id = $2',
      [response, contactId]
    );

    // Fetch the contact's email
    const { rows } = await db.query(
      'SELECT email FROM contacts WHERE contact_id = $1',
      [contactId]
    );

    if (rows.length === 0) {
      return res.status(404).json({ error: 'Contact not found' });
    }

    const contactEmail = rows[0].email;

    // Send email
    const mailOptions = {
      from: 'abedalmajedalajarmah@gmail.com',
      to: contactEmail,
      subject: 'Response to your contact message',
      text: response,
    };

    await transporter.sendMail(mailOptions);

    res.json({ message: 'Response sent successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};