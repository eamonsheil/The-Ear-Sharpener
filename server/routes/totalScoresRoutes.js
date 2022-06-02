const express = require('express');
const router = express.Router()
const { updateChordTotals, getTotals, updatePitchTotals } = require('../controllers/totalScoresController')
const { protect } = require('../middleware/authMiddleware')



router.get('/all/:id', getTotals)

router.patch('/chords/:id', updateChordTotals)

router.patch('/pitches/:id', updatePitchTotals)



module.exports = router;