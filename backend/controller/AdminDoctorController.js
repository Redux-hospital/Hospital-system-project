

const db = require("../config/db");
const bcrypt = require("bcrypt");

exports.addDoctor = async (req, res) => {
  const { staff_name, email, password, specialty, bio } = req.body;
  const profile_image = req.file ? `uploads/${req.file.filename}` : null;
  try {
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);
    // Insert the new doctor into the database
    const query = 
    `  INSERT INTO medical_staff (staff_name, email, password, profile_image, specialty, bio, is_approved)
      VALUES ($1, $2, $3, $4, $5, $6, $7)
      RETURNING *`;
    const values = [
      staff_name,
      email,
      hashedPassword,
      profile_image,
      specialty,
      bio,
      true,
    ];
    const result = await db.query(query, values);
    const newDoctor = result.rows[0];

    // Remove sensitive information before sending response
    delete newDoctor.password;

    res.status(201).json({
      message: "Doctor added successfully",
      doctor: newDoctor,
    });
  } catch (error) {
    console.error("Error adding doctor:", error);
    res.status(500).json({ message: "Error adding doctor" });
  }
};
