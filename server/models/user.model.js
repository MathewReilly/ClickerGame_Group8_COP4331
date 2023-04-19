const mongoose = require('mongoose');

const User = new mongoose.Schema(
    {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    nickname: { type: String, required: true, unique: true },
    currScore: { type: Number, default : 0 },
    quote: { type: String, required: false },
    },
    { collection: 'user-data' }
);

const model = mongoose.model('UserData', User);

module.exports = model;