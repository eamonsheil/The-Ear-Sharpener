const mongoose = require('mongoose');

const pitchScoreSchema = mongoose.Schema({

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    correctAnswerStreak: Number,
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('PitchScore', pitchScoreSchema)