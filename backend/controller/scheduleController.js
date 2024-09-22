


// controllers/scheduleController.js
const db = require('../config/db');

exports.getSchedules = async (req, res) => {
  try {
    const result = await db.query(
      'SELECT da.*, ms.staff_name, ms.specialty FROM doctor_availability da ' +
      'JOIN medical_staff ms ON da.staff_id = ms.staff_id ' +
      'WHERE da.is_deleted = FALSE'
    );
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.getScheduleByStaffId = async (req, res) => {
  const { staffId } = req.params;
  try {
    const result = await db.query(
      'SELECT * FROM doctor_availability ' +
      'WHERE staff_id = $1 AND is_deleted = FALSE',
      [staffId]
    );
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.getScheduleByDate = async (req, res) => {
  const { date } = req.params;
  try {
    const result = await db.query(
      'SELECT da.*, ms.staff_name, ms.specialty FROM doctor_availability da ' +
      'JOIN medical_staff ms ON da.staff_id = ms.staff_id ' +
      'WHERE da.available_start_date = $1 AND da.is_deleted = FALSE',
      [date]
    );
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
};



exports.getScheduleCount = async (req, res) => {
  try {
    const result = await db.query(
      'SELECT COUNT(*) FROM doctor_availability WHERE is_deleted = FALSE'
    );
    res.json({ count: parseInt(result.rows[0].count) });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
};