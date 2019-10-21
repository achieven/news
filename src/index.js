const express = require('express');
const app     = express();
const bodyParser = require('body-parser');

const postsRoutes  = require('./routes/posts');
const scoresRoutes  = require('./routes/scores');

const PORT = 3000;
app.listen(PORT, (req, res) => {
   console.log(`listening on port ${PORT}`)
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/posts', postsRoutes);
app.use('/scores', scoresRoutes);