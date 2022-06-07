const mongoose = require('mongoose');

const totalScoresSchema = mongoose.Schema({
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
    totalPitchesAttempted: {
        type: Number,
        default: 0
    },
    totalPitchesCorrect: {
        type: Number,
        default: 0
        },
    currentPitchStreak: {
        type: Number,
        default: 0
    }
})

module.exports = mongoose.model('TotalScores', totalScoresSchema)