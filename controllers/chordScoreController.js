const asyncHandler = require('express-async-handler');
const ChordScore = require('../models/chordScoreModel');
const User = require('../models/userModel');


const getChordScores = asyncHandler(async (req, res) => {
    const scores = await ChordScore.aggregate([
        { $sort: { score: -1 }},
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
    const topScores = scores.slice(0, 20)
    res.status(200).json(topScores)
})


const postChordScore = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id)
    const score = await ChordScore.create({
        user: req.user.id,
        score: req.body.score 
    })
    res.json({user: user.name, score: score.score})
})



module.exports = {
    getChordScores,
    postChordScore
}