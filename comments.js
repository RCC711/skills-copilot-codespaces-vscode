// Create web server
// Create express app
// Create a route for GET request to '/comments'
// Respond with an array of comments
// Start the server on port 3000
// Run the program and verify that you get an array of comments when you visit http://localhost:3000/comments

const express = require('express');
const app = express();

app.get('/comments', (req, res) => {
  res.json([
    {
      username: 'Todd',
      comment: 'lol that is so funny'
    },
    {
      username: 'Skyler',
      comment: 'I like to go birdwatching with my dog'
    },
    {
      username: 'Sk8erBoi',
      comment: 'Plz delete your account, Todd'
    },
    {
      username: 'onlysayswoof',
      comment: 'woof woof woof'
    }
  ]);
});

app.listen(3000);
