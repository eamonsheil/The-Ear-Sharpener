const express = require('express');
const router = express.Router()
const { registerUser, loginUser, getMe, logoutUser } = require('../controllers/userController')
const { protect } = require('../middleware/authMiddleware')

router.post('/', registerUser)  //when we make a post request to /users
router.post('/login', loginUser)  //when we make a post request to /users
router.get('/me', protect, getMe)  //when we make a post request to /users
router.get('/logout', logoutUser)



module.exports = router;