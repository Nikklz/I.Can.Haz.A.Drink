const dbconfig = require ('../config/dbconfig');
const pgp = require ('pg-promise')();
const db = pgp(dbconfig);
const dranksModel = {}

dranksModel.findAll = () => 
	db.any('SELECT * FROM DRANKS')

dranksModel.findOne = id =>
	db.one('SELECT * FROM DRANKS WHERE id = $1', [id])

dranksModel.create = bars => db.one (`INSERT INTO DRANKS\
	(barname = $[barname]\
	address = $[address]\
	zipcode = $[zipcode]\
	phone_number = $[phone_number]\
	bartype = $[bartype]\
	cost = $[cost]\
	WHERE id = $[id]\
	RETURNING *`, bars)

dranksModel.update = bars => db.one(`UPDATE DRANKS\
	SET (barname = $[barname]\
	address = $[address]\
	zipcode = $[zipcode]\
	phone_number = $[phone_number]\
	bartype = $[bartype]\
	cost = $[cost]\
	WHERE id = $[id]\
	RETURNING *`)

dranksModel.destroy = bars => db.none(`DELETE FROM DRANKS WHERE id=$1`)

module.exports = dranksModel;

