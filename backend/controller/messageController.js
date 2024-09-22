// messageController.js
const db = require('../config/db');

// Function to handle storing the contact form data in the database
const storeMessage = async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    const query = 'INSERT INTO contacts (name, email, message) VALUES ($1, $2, $3) RETURNING *';
    const values = [name, email, message];
    const result = await db.query(query, values);

    res.status(201).json({
      message: 'Message stored successfully',
      data: result.rows[0],
    });
  } catch (error) {
    console.error('Error storing message:', error);
    res.status(500).json({ error: 'Database error' });
  }
};

module.exports = { storeMessage };