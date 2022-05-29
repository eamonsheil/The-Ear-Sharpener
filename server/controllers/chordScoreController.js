const asyncHandler = require('express-async-handler');
const ChordScore = require('../models/chordScoreModel');
const User = require('../models/userModel');


const getScores = asyncHandler(async (req, res) => {
    const scores = await ChordScore.find()
    res.status(200).json(scores)
})

const postScore = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id)
    const score = await ChordScore.create({
        user: req.user.id,
        score: req.body.score 
    })
    res.json({user: user.name, score: score.score})
})

module.exports = {
    getScores,
    postScore
}