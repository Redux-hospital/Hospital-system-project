const db = require('../config/db');

exports.getAdminPrescriptions = async (req, res) => {
  try {
    const query = `
      SELECT 
        hr.diagnosis, 
        hr.drugs, 
        hr.treatment_plan, 
        ms.staff_name AS doctor_name, 
        p.username AS patient_name
      FROM 
        healthcare_records hr
      JOIN 
        medical_staff ms ON hr.staff_id = ms.staff_id
      JOIN 
        patients p ON hr.id = p.id
      WHERE 
        hr.is_deleted = FALSE
    `;
    
    const result = await db.query(query);
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching prescriptions:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};