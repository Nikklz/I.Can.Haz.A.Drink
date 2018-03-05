const dbconfig = require ('../config/dbconfig');
const pgp = require ('pg-promise')();
const db = pgp(dbconfig);
const dranksModel = {};

dranksModel.findAll = () => 
	db.any('SELECT * FROM DRANKS')

dranksModel.findOne = id =>
	db.one('SELECT * FROM DRANKS WHERE id = $1', id)

dranksModel.create = bar => 
db.one (`INSERT INTO DRANKS (yelp_id, upvote, downvote) VALUES ($[yelp_id], $[upvote], $[downvote])
	RETURNING *`, bar)

dranksModel.update = bar => db.one(`UPDATE DRANKS\
	SET (yelp_id = $[yelp_id]\
	upvote = $[upvote]\
	downvote = $[downvote]\
	WHERE yelp_id = $[yelp_id]\
	RETURNING *`, bar)

dranksModel.destroy = bar => db.none(`DELETE FROM DRANKS WHERE id=$1`, bar)

module.exports = dranksModel;

