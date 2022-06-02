const asyncHandler = require('express-async-handler');
const PitchScore = require('../models/pitchScoreModel');
const User = require('../models/userModel');


const getPitchScores = asyncHandler(async (req, res) => {
    const scores = await PitchScore.aggregate([
        { $sort: { correctAnswerStreak: -1 }},
        { $lookup: {
            from: "users",
            localField: "user",
            foreignField: "_id",
            as: "user"
            }
        },
        { $set: {
            user: { $first: "$user" }
        }},
        { $set: {
            name: "$user.name" 
        }},
        { $unset: [
            "_id",
            "user",
            "__v"
        ]}
    ])
    const topeScores = scores.slice(0, 20)

    res.status(200).json(topeScores)
})

const postPitchScore = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id)
    const score = await PitchScore.create({
        user: req.user.id,
        correctAnswerStreak: req.body.correctAnswerStreak 
    })
    res.json({user: user.name, correctAnswerStreak: score.correctAnswerStreak})
})

module.exports = {
    getPitchScores,
    postPitchScore
}