const mongoose = require('mongoose');

const totalScoresSchema = mongoose.Schema({
    // _id: mongoose.Schema.Types.ObjectId,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    totalChordsAttempted: {
        type: Number,
        default: 0
        },
    totalChordsCorrect: {
        type: Number,
        default: 0
        },
})

module.exports = mongoose.model('TotalScores', totalScoresSchema)