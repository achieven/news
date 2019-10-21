const postsDao = require('../dao/posts');
const uuidv1   = require('uuid/v1');

exports.create = async (text) => {
    const uuid = uuidv1();
    const createdAt = new Date().getTime();
    const votes = 0;
    return await postsDao.create(uuid, text, createdAt, votes);
};

exports.update = async (postId, text) => {
    return await postsDao.update(postId, text);
};

exports.upvote = (postId) => {
    postsDao.upvote(postId);
};

exports.downvote = (postId) => {
    postsDao.downvote(postId);
};