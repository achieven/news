const express = require('express');
const router  = express.Router();

const postsController = require('../controllers/posts')
//TODO route validation
router.post('/', async (req, res) => {
    const text = req.body.text;
    try {
        const result = await postsController.create(text);
        return res.json({error: false, content: result});
    } catch (err) {
        console.log(err.message);
        return res.status(500).json({error: true, content: "Internal Server Error"});//TODO put in const
    }
});

router.put('/:postId', async (req, res) => {
    const postId = req.params.postId;
    const text = req.body.text;
    try {
        const result = await postsController.edit(postId, text);
        return res.json({error: false, content: result});
    } catch (err) {
        console.log(err.message);
        return res.status(500).json({error: true, content: "Internal Server Error"});
    }
});

router.put('/upvote/:postId', async (req, res) => {
    const postId = req.params.postId;
    try {
        const result = await postsController.upvote(postId);
        return res.json({error: false, content: result});
    } catch (err) {
        return res.status(500).json({error: true, content: "Internal Server Error"});
    }
});

router.put('/downvote/:postId', async (req, res) => {
    const postId = req.params.postId;
    try {
        const result = await postsController.downvote(postId);
        return res.json({error: false, content: result});
    } catch (err) {
        console.log(err.message);
        return res.status(500).json({error: true, content: "Internal Server Error"});
    }
});

router.get('/top-posts', async (req, res) => {
  try {
      const result = await postsController.topPosts();
    return res.json({error: false, content: result});
  } catch (err) {
      console.log(err.message);
      return res.status(500).json({error: true, content: "Internal Server Error"});
  }
});

module.exports = router;
