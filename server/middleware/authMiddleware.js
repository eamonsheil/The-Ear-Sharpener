const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')

const protect = asyncHandler(async (req, res, next) => {
    let token

    

    // http headers should contain an authorization object
    // check that it starts with 'bearer' because
    // when the token is sent, it is formatted like this:
    // Bearer [token]
    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith('Bearer')
      ) {
        try {
            // Get token from header, assigning it to a variable
            token = req.headers.authorization.split(' ')[1]
            
            // Verify token
            const decoded = jwt.verify(token, process.env.JWT_SECRET)

            // Get user from the token (the token has the user id as a payload)
            // also assign it to request.user so that we can access req.user in any route that is protected
            // chaining on ".select('-password')" means we wont include the password hash --> We just don't need it here
            req.user = await User.findById(decoded.id).populate('chordScores', 'score').select('-password')
            // .then(p=>console.log(p))
            // .select('-password')

            next()  // allows us to call the next piece of middleware
        } 
        catch (error) {
            console.log(error)
            res.status(401) // "not authorized" error code
            throw new Error("Not Authorized")
        }
    }
    if (!token){
        res.status(401)
        throw new Error('Not authorized (no token)')
    }
})



module.exports = { protect }