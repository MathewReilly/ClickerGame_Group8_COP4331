const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const User = require('./models/user.model');

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 5001;

mongoose.connect('mongodb+srv://Paul:444gEdWyGidazCnZ@cluster0.e0trkiw.mongodb.net/clicker?retryWrites=true&w=majority');

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

app.post('/api/register', async (req, res) => {
  console.log(req.body);
  try {
      await User.create({
          name: req.body.name,
          email: req.body.email,
          password: req.body.password,
          nickname: req.body.nickname,
      })
      res.json({status: 'ok'})
  } catch (err) {
     res.json({status: 'error', error: 'Duplicate email or nickname' });
  }
});

app.post('/api/login', async (req, res) => {
      const user = await User.findOne({
          email: req.body.email,
          password: req.body.password,
      })

      if (user) {
          return res.json({status: 'ok', user: true});
      } else {
          return res.json({status: 'error', user: false});
       }
});

// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`));