const express = require('express');
const router = express.Router()
const { updateTotals, getTotals } = require('../controllers/totalScoresController')
const { protect } = require('../middleware/authMiddleware')

router.route('/:id')
.patch(updateTotals)
.get(getTotals)

module.exports = router;