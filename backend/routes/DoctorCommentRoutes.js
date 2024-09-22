// const express = require('express');
// const router = express.Router();
// const doctorController = require('../controller/DoctorCommentController');
// const upload = require('../middleware/multerConfig');

// // Add a comment
// router.post('/doctors/comments', doctorController.addComment);

// // Get comments for a specific doctor
// router.get('/doctors/:doctor_id/comments', doctorController.getCommentsByDoctor);

// module.exports = router;


//////////////////////////////////////////////////work////////////////////

// const express = require('express');
// const router = express.Router();
// const doctorController = require('../controller/DoctorCommentController');
// const { authenticateToken } = require('../middleware/authMiddleware');

// // Add a comment (protected route)
// router.post('/doctors/comments', authenticateToken, doctorController.addComment);

// // Get comments for a specific doctor
// router.get('/doctors/:doctor_id/comments', doctorController.getCommentsByDoctor);

// module.exports = router;









const express = require('express');
const router = express.Router();
const doctorController = require('../controller/DoctorCommentController');
const { authenticateToken } = require('../middleware/authMiddleware');

router.post('/doctors/comments', authenticateToken, doctorController.addComment);
router.get('/doctors/:doctor_id/comments', doctorController.getCommentsByDoctor);
router.put('/doctors/comments/:comment_id', authenticateToken, doctorController.updateComment);
router.delete('/doctors/comments/:comment_id', authenticateToken, doctorController.deleteComment);

module.exports = router;


