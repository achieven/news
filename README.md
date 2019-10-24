# news


## prerequisites:
install mysql (specifically was developed with mysql 8.0.16 on Linux Ubuntu 16.04)   
inside mysql - create database news
restore database from dump file: npm run prepare (or) mysql -uroot -p news < src/database/news.sql

## start process:
npm start (or) node src/index.js



## explanation:
### score algorithm:
Taken from this article: https://medium.com/hacking-and-gonzo/how-hacker-news-ranking-algorithm-works-1d9b0cf2c08d.  
```
Score = (P-1) / (T+2)^G

where,
P = points of an item (and -1 is to negate submitters vote)
T = time since submission (in hours)
G = Gravity, defaults to 1.8 in news.arc
```

### top posts endpoint:
The top-posts endpoint is implemented by a table which has TOP_POSTS_NUMBER + TOP_POSTS_OFFSET rows.  

The TOP_POSTS_OFFSET parameter is for the event of downvote for a post which is inside the TOP_POSTS_NUMBER, so that another post which was outside the TOP_POSTS_NUMBER will be able to be retrieved by the top posts endpoint.  

This implementation has a potential, though not so probable (in my opinion) problem, when downvoting consecutive posts inside the TOP_POSTS_NUMBER without any upvote to the posts outside the TOP_POSTS_NUMBER. Such event will result in high posts not entering the TOP_POSTS_NUMBER.  

The other option I saw was on every upvote to recalculate all the posts which are outside the TOP_POSTS_NUMBER, which seems it could be a heavy action in case there are a lot of posts.      

##TODOS:  
dockerize with docker-compose  

route validation   

return to client errors which we want them to be aware of instead of general "internal server error"

catch errors in case postId doesn't exist and show it to user 

update scores function - get variables in node instead of in mysql. current syntax fits better if we want it as stored procedure    

insert into errors db instead of logging them  

add sanity tests  

use knex or other alternative for safer query build  

don't allow empty text

check transaction isolation - maybe change to read committed