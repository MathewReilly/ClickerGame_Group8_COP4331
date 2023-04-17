const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = process.env.PORT || 5001;

// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`));

mongoose.connect('mongodb+srv://Paul:444gEdWyGidazCnZ@cluster0.e0trkiw.mongodb.net/clicker?retryWrites=true&w=majority');

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

// create a GET route
app.get('/express_backend', (req, res) => { 
  res.send({ express: 'This came from server.js!!!!' });
});

//test