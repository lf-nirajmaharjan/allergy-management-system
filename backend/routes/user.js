const express = require('express');
const router = express.Router();
const pool = require('../database');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

router.post('/register', (req, res) => {
	const { username, password, email } = req.body;
	bcrypt.hash(password, 12).then(async (hashed_password) => {
		const user = await pool
			.query(
				'INSERT INTO users ( username, password, email) VALUES ($1, $2, $3) RETURNING username, email',
				[username, hashed_password, email]
			)
			.then((results) => {
				return results.rows;
			});
		res.status(201).send(user);
		res.end();
	});
});

module.exports = router;
