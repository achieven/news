const mysql       = require('../database/mysql');
const topPostsDao = require('./top-posts');

exports.create = async (postId, text, createdAt, votes) => {
    try {
        await mysql.beginTransaction();
        await mysql.query(`insert into posts (id, text, createdAt, votes) values ('${postId}', '${text}', FROM_UNIXTIME(${createdAt}/1000), ${votes})`);
        await mysql.query(`select @points := votes, @time := unix_timestamp(createdAt)/3600, @gravity := 1.8 from posts where id='${postId}' for update`);
        await topPostsDao.updateScore(postId);
        await mysql.commit();
        return true;
    } catch (err) {
        await mysql.rollback();
        console.log(err.message);
        throw err;
    }
};

exports.edit = async (postId, text) => {
    try {
        await mysql.query(`update posts set text='${text}' where id='${postId}'`);
        return true;
    } catch (err) {
        console.log(err.message);
        throw err;
    }
};

exports.vote = async (postId, isUpvote) => {
    try {
        const sign = isUpvote ? '+' : '-';
        await mysql.beginTransaction();
        await mysql.query(`select @points := votes, @time := unix_timestamp(createdAt)/3600, @gravity := 1.8 from posts where id='${postId}' for update`);
        await mysql.query(`update posts set votes=(select @points${sign}1) where id='${postId}'`);
        await topPostsDao.updateScore(postId);
        await mysql.commit();
        return true;
    } catch (err) {
        await mysql.rollback();
        console.log(err.message);
        throw err;
    }
};

