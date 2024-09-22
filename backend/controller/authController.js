



const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('../config/db');

exports.signup = async (req, res) => {
  try {
    const { username, email, password, gender, dob } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const query = `
      INSERT INTO patients (username, email, password, gender, dob, is_approved)
      VALUES ($1, $2, $3, $4, $5, $6)
      RETURNING id
    `;
    const values = [username, email, hashedPassword, gender, dob, true];
    const result = await db.query(query, values);
    res.status(201).json({ message: 'Patient registered successfully', patientId: result.rows[0].id });
  } catch (error) {
    res.status(500).json({ message: 'Error registering patient', error: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password, userType } = req.body;
    let query, user;

    if (userType === 'patient') {
      query = 'SELECT * FROM patients WHERE email = $1';
    } else if (userType === 'doctor') {
      query = 'SELECT * FROM medical_staff WHERE email = $1';
    } else {
      return res.status(400).json({ message: 'Invalid user type' });
    }

    const result = await db.query(query, [email]);
    user = result.rows[0];

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    if (!user.is_approved) {
      return res.status(403).json({ message: 'Your account is not approved yet' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const tokenPayload = {
      id: user.id,
      email: user.email,
      userType,
      staff_name: userType === 'doctor' ? user.staff_name : null
    };

    const token = jwt.sign(tokenPayload, process.env.JWT_SECRET, { expiresIn: '1h' });
    const tokenName = userType === 'doctor' ? 'Doctor Token' : 'Patient Token';

    res.cookie(tokenName, token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 3600000 // 1 hour
    });

    res.json({ userType, message: 'Login successful' });
  } catch (error) {
    res.status(500).json({ message: 'Error during login', error: error.message });
  }
};

exports.logout = (req, res) => {
  res.clearCookie('Doctor Token');
  res.clearCookie('Patient Token');
  res.clearCookie('AdminToken');

  res.json({ message: 'Logged out successfully' });
};

exports.checkAuthStatus = (req, res) => {
  const doctorToken = req.cookies['Doctor Token'];
  const patientToken = req.cookies['Patient Token'];
  const token = doctorToken || patientToken;

  if (!token) {
    return res.status(401).json({ message: 'Not authenticated' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    res.json({
      isAuthenticated: true,
      userType: decoded.userType,
      user: {
        id: decoded.id,
        email: decoded.email,
        staff_name: decoded.userType === 'doctor' ? decoded.staff_name : null
      }
    });
  } catch (error) {
    res.status(401).json({ message: 'Invalid token' });
  }
};