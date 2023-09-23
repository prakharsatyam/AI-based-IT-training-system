const mongoose = require('mongoose');
const course = require('./course');
const StudentSchema = new mongoose.Schema(
    {
        id: {
            type: String,
            default: uuidv4,
            unique: true
        },
        firstName: {
            type: String,
            required: true,
        },
        lastName: {
        type: String,
        required: true,
        },
        dateOfBirth: {
        type: Date,
        required: true,
        },
        email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        },
        phoneNumber: {
        type: String,
        required: true,
        },
        courses: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Course',
            }
        ],

    }
);

const Student =mongoose.model('Student',StudentSchema);
module.exports = Student