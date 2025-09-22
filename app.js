// app.js
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.json({ message: 'Hello from Node.js demo app' });
});

module.exports = app;
