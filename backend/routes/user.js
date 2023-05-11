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

router.post('/login', async (req, res) => {
	const { username, password } = req.body;
	const user = await pool
		.query('SELECT * FROM users WHERE username = $1', [username])
		.then((results) => {
			return results.rows;
		});
	if (user.length === 0) {
		res.status(404).send('User Not found');
	} else {
		const userInfo = user[0];
		const isPasswordCorrect = await bcrypt.compare(password, userInfo.password);
		if (isPasswordCorrect) {
			const payload = { username: userInfo.username };
			const secret = 'SECRET';
			jwt.sign(payload, secret, (error, token) => {
				if (error) throw new Error('Sign in error!');
				res.status(200).send(token);
			});
		} else {
			res.status(404).send('User Not found');
		}
	}
});

module.exports = router;
