const mysql = require('../database/mysql');

const TOP_POSTS_NUMBER = 3;
// TODO insert into errors db
// TODO add sanity tests
// TODO use knex
// TODO set transaction to read committed?
exports.create = async (postId, text, createdAt, votes) => {
    try {
        await mysql.query(`insert into posts (id, text, createdAt, votes) values ('${postId}', '${text}', FROM_UNIXTIME(${createdAt}/1000), ${votes})`);
        return true;
    } catch (err) {
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
        await mysql.query('select * from top_posts for update');
        await mysql.query(`select @score := (select (@points-1)/(power(@time+2,@gravity)))`);
        await mysql.query(`insert into top_posts (id, score) values('${postId}', @score) on duplicate key update score = @score`);
        await mysql.query(`select @lowest_id := id from top_posts order by score limit 1 for update`);
        await mysql.query(`select @count := count(*) from top_posts`);
        await mysql.query(`delete from top_posts where id = @lowest_id and @count = ${TOP_POSTS_NUMBER+2}`);
        await mysql.commit();
        return true;
    } catch (err) {
        await mysql.rollback();
        console.log(err.message);
        throw err;
    }
};

exports.topPosts = async () => {
    try {
        const topPosts = await mysql.query(`select post.text, post.votes from top_posts top_post join posts post on top_post.id = post.id order by top_post.score desc limit ${TOP_POSTS_NUMBER}`);
        return topPosts[0];
    } catch (err) {
        console.log(err.message);
        throw err;
    }
};