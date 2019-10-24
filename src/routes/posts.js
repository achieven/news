const express = require('express');
const router  = express.Router();

const postsController = require('../controllers/posts')
//TODO route validation
//TODO return to client only known errors
router.post('/', async (req, res) => {
    const text = req.body.text;
    try {
        const response = await postsController.create(text);
        return res.json({error: false, content: response});
    } catch (err) {
        return res.status(500).json({error: true, content: "Internal Server Error"});
    }
});

router.put('/:postId', async (req, res) => {
    const postId = req.params.postId;
    const text = req.body.text;
    try {
        const response = await postsController.edit(postId, text);
        return res.json({error: false, content: response});
    } catch (err) {
        return res.status(500).json({error: true, content: "Internal Server Error"});
    }
});

router.put('/upvote/:postId', async (req, res) => {
    const postId = req.params.postId;
    try {
        const response = await postsController.upvote(postId);
        return res.json({error: false, content: response});
    } catch (err) {
        return res.status(500).json({error: true, content: "Internal Server Error"});
    }
});

router.put('/downvote/:postId', async (req, res) => {
    const postId = req.params.postId;
    try {
        const response = await postsController.downvote(postId);
        return res.json({error: false, content: response});
    } catch (err) {
        console.log(err.message);
        return res.status(500).json({error: true, content: "Internal Server Error"});
    }
});

router.get('/top-posts', async (req, res) => {
  try {
      const response = await postsController.topPosts();
    return res.json({error: false, content: response});
  } catch (err) {
      console.log(err.message);
      return res.status(500).json({error: true, content: "Internal Server Error"});
  }
});

module.exports = router;
