// Create web server
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');

app.use(bodyParser.json());

// Create a new comment
app.post('/comments', (req, res) => {
  const comment = req.body;
  const comments = JSON.parse(fs.readFileSync('./comments.json'));
  comments.push(comment);
  fs.writeFileSync('./comments.json', JSON.stringify(comments));
  res.json(comment);
});

// Get all comments
app.get('/comments', (req, res) => {
  const comments = JSON.parse(fs.readFileSync('./comments.json'));
  res.json(comments);
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});