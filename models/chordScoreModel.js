const mongoose = require('mongoose');
const Schema = mongoose.Schema

const chordScoreSchema = Schema({ 
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    score: Number,
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('ChordScore', chordScoreSchema)