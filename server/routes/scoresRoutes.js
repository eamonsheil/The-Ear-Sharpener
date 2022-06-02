const express = require('express');
const router = express.Router()
const { getChordScores, postChordScore } = require('../controllers/chordScoreController')
const { getPitchScores, postPitchScore } = require('../controllers/pitchScoreController')
const { protect } = require('../middleware/authMiddleware')

router.route('/chord_scores')
.get(getChordScores)
.post(protect, postChordScore);

router.route('/pitch_scores')
.get(getPitchScores)
.post(protect, postPitchScore)

module.exports = router;