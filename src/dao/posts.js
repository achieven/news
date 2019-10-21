const mysql = require('../database/mysql');

exports.create = async (uuid, text, createdAt, votes) => {
    try {
        const query = `insert into posts (id, text, createdAt, votes) values ('${uuid}', '${text}', FROM_UNIXTIME(${createdAt}/1000), ${votes})`;
        await mysql.query(query);//TODO use knex}
        return true;
    } catch (err) {
        console.log(err.message);
        throw err;
    }
};

exports.update = async (uuid, text) => {
    try {
        const query = `update posts set text='${text}' where id='${uuid}'`;
        await mysql.query(query);
        return true;
    } catch (err) {
        console.log(err.message);
        throw err;
    }
};

exports.upvote = (uuid, text) => {
    mysql.query()//
};

exports.downvote = (uuid, text) => {
    mysql.query()//
};