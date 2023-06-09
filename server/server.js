const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcrypt');
const User = require('./models/user.model');
const jwt = require('jsonwebtoken');

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 5001;

mongoose.connect('mongodb+srv://Paul:444gEdWyGidazCnZ@cluster0.e0trkiw.mongodb.net/clicker?retryWrites=true&w=majority');

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

app.post('/register', async (req, res) => {
    const {name, email, password, nickname} = req.body;
    const user = await User.findOne({email});

    if (user) {
        return res.status(400).json({message: 'User already exists'});
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({name, email, password: hashedPassword, nickname});
    await newUser.save();

    res.json({message: 'User created successfully'});
});

app.post('/login', async (req, res) => {
    const {email, password} = req.body;
    const user = await User.findOne({email});

    if (!user) {
        return res.status(400).json({message: 'User does not exist'});
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (!isPasswordCorrect) {
        return res.status(400).json({message: 'Invalid credentials'});
    }

    const token = jwt.sign({email: user.email, id: user._id}, 'test', {expiresIn: '1h'});

    res.json({token, userID: user._id, nickname: user.nickname, currScore: user.currScore});
});

app.put('/updateScore', async (req, res) => {
    const {nickname, score} = req.body;
    const user = await User.findOneAndUpdate({nickname}, {currScore:score});
    res.json({message: 'Score updated successfully'});
    });

const leaderboardSchema = new mongoose.Schema({
    username: String,
    score: Number 
});

const Leaderboard = mongoose.model('clicker.user-data', leaderboardSchema);
module.exports = Leaderboard; 


    app.get('/leaderboard', async (req, res) => {
        //const user = await User.findOne({email: 'ross.ss'});
        const leaderboardData = await User.find().sort({ currScore: -1 }).limit(8);
    res.send(leaderboardData);
        });




// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`));