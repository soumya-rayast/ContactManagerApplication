const asyncHandler = require("express-async-handler")
// @desc Register a user
// @route POSt /api/users/register
// @access Public

const registerUser = asyncHandler(async (req, res) => {
    res.json({ message: "Register the user" })
})
// @desc login a user
// @route POSt /api/users/login
// @access Public

const loginUser = asyncHandler(async (req, res) => {
    res.json({ message: "Login user" })
})

// @desc current user info
// @route POSt /api/users/login
// @access private

const currentUser = asyncHandler(async (req, res) => {
    res.json({ message: "Current User  Information" })
})

module.exports = { registerUser, loginUser, currentUser }