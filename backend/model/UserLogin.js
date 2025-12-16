const mongoose = require('mongoose');

const userLoginSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('User', userLoginSchema)