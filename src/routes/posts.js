const express = require('express');
const router  = express.Router();

const postsController = require('../controllers/posts')

router.post('/', async (req, res) => {
  const text = req.body.text;//TODO route validation
  try {
    await postsController.create(text);
    return res.json({error: false, content: true});
  } catch (err) {
    return res.status(500).json({error: true, content: "Internal Server Error"});//TODO put in const
  }
});

router.put('/:postId', async (req, res) => {
  const postId = req.params.postId;
  const text = req.body.text;//validate
  try {
    await postsController.update(postId, text);
    return res.json({error: false, content: true});
  } catch (err) {
    return res.status(500).json({error: true, content: "Internal Server Error"});
  }
});

router.put('/upvote/:postId', async (req, res) => {
  const postId = req.params.postId;//validate
  try {
    await postsController.upvote(postId);
    return res.json({error: false, content: true});
  } catch (err) {
    return res.status(500).json({error: true, content: "Internal Server Error"});
  }
});

router.put('/downvote/:postId', async (req, res) => {
  const postId = req.params.postId;//validate
  try {
    await postsController.downvote(postId);
    return res.json({error: false, content: true});
  } catch (err) {
    return res.status(500).json({error: true, content: "Internal Server Error"});
  }
});

module.exports = router;
