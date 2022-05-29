const mongoose = require('mongoose');
const Schema = mongoose.Schema

const chordScoreSchema = Schema({
    score: Number,
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('ChordScore', chordScoreSchema)