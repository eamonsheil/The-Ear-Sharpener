const express = require('express');
const router = express.Router()
const { getScores, postScore } = require('../controllers/chordScoreController')
const { protect } = require('../middleware/authMiddleware')

router.route('/chord_scores')
.get(getScores)
.post(protect, postScore);


module.exports = router;