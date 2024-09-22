

const jwt = require('jsonwebtoken');
const db = require('../config/db');

exports.authenticateDoctor = async (req, res, next) => {
  const token = req.cookies['Doctor Token'];

  if (!token) {
    return res.status(401).json({ message: 'Authentication required' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    // Fetch the staff_id from the database using the email in the token
    const query = 'SELECT staff_id FROM medical_staff WHERE email = $1';
    const result = await db.query(query, [decoded.email]);
    
    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Doctor not found' });
    }
    
    req.user = {
      ...decoded,
      staff_id: result.rows[0].staff_id
    };
    
    next();
  } catch (error) {
    console.error('Error authenticating doctor:', error);
    return res.status(403).json({ message: 'Invalid or expired token' });
  }
};