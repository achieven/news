# news


## prerequisites:
mysql (specifically was developed with mysql 8.0.16 on Linux Ubuntu 16.04) 
mysql -uroot -p news < news.sql

## start process:
node src/index.js



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

It is implemented in the DB exactly the way it is