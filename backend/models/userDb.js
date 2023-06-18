const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "Please enter the first name"],
    },
    lastName: {
        type: String,
        required: [true, "Please enter the last name"],
    },
    enrollmentNo: {
        type: String,
        required: [true, "Please enter the enrollment number"],
    },
    password: {
        type: String,
        required: [true, "Please enter the password"]
    },
    isAdmin: {
        type: Boolean
    },
    branch: {
        type: String,
        enum: ['CSE', 'IT', 'ECE'] // Add enum validation for branch field
    },
    batch: {
        type: Number,
        enum: [19,20,21,22] // Change enum validation to numbers for batch field
    }
});

module.exports = mongoose.model('User', userSchema);
