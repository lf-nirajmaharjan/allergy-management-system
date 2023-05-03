const { Pool } = require('pg');

const pool = new Pool({
	host: 'localhost',
	port: 5432,
	database: 'ams',
	user: 'postgres',
	password: 'admin',
});

module.exports = pool;
