const mysql = require('../database/mysql');

const TOP_POSTS_NUMBER = 7;

exports.topPosts = async () => {
    try {
        const topPosts = await mysql.query(`select post.text, post.votes from top_posts top_post join posts post on top_post.id = post.id order by top_post.score desc limit ${TOP_POSTS_NUMBER}`);
        return topPosts[0];
    } catch (err) {
        console.log(err.message);
        throw err;
    }
};

exports.updateScore = async (postId) => {
    await mysql.query('select * from top_posts for update');
    await mysql.query(`select @score := (select (@points-1)/(power(@time+2,@gravity)))`);
    await mysql.query(`insert into top_posts (id, score) values('${postId}', @score) on duplicate key update score = @score`);
    await mysql.query(`select @lowest_id := id from top_posts order by score limit 1 for update`);
    await mysql.query(`select @count := count(*) from top_posts`);
    await mysql.query(`delete from top_posts where id = @lowest_id and @count = ${TOP_POSTS_NUMBER+2}`);
};