const express = require('express');
const mongoose = require('mongoose');

const users = require('');

const app = express();

// DB Config
const db = require('./config/keys').mongoURI;

// Connecto to MongoDB
mongoose
  .connect(db)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log('err'));

app.get('/', (req, res) => res.send('Hello World'));

const port = process.env.POR || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
