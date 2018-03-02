

const pgp = require('pg-promise')()

function dbConfig() {
  if (process.env.NODE_ENV === 'development' || !process.env.NODE_ENV) {
    // this would be the config of the DB when in development on our machines
    return pgp({
	host: 'localhost;',
	port: 5432,
	database: 'DRANKS'
    });
  } else if (process.env.NODE_ENV === 'production') {
    // HEROKU sets process.env.NODE_ENV to 'production' once pushed to that env
    return pgp(process.env.DATABASE_URL);
  }
}

const db = setDatabase();

module.exports = db;

module.exports = dbConfig;