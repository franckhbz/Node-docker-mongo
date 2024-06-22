const mongoose = require('mongoose');

// Define el esquema de usuario
const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    bio: String
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
