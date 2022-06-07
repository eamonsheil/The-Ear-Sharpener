const mongoose = require('mongoose');
const db = mongoose.Connection;
const TotalScores = require('../models/totalScoresModel')


const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add a Name']
    },
    email: {
        type: String,
        required: [true, 'Please add a email'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Please add a password']
    },
    totalScores: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'TotalScores'
    },
    chordScores: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'ChordScore'
    }

},
{
    timestamps: true // gives us a created at/updated at field
});



module.exports = mongoose.model('User', userSchema)