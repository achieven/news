const postsDao = require('../dao/posts');
const uuidv1   = require('uuid/v1');

exports.create = async (text) => {
    const uuid = uuidv1();
    const createdAt = new Date().getTime();
    const votes = 0;
    return await postsDao.create(uuid, text, createdAt, votes);
};

exports.edit = async (postId, text) => {
    return await postsDao.edit(postId, text);
};

exports.upvote = async (postId) => {
    const isUpvote = true;
    return await postsDao.vote(postId, isUpvote);
};

exports.downvote = async (postId) => {
    const isUpvote = false;
    return await postsDao.vote(postId, isUpvote);
};

exports.topPosts =  async () => {
    return await postsDao.topPosts();
};