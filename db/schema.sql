DROP TABLE IF EXISTS DRANKS;

CREATE TABLE IF NOT EXISTS DRANKS(
yelp_id TEXT UNIQUE,
upvote INTEGER,
downvote INTEGER);

