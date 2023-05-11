const express = require('express');
const pool = require('./database');
const cors = require('cors');
const app = express();
const userRouter = require('./routes/user.js');
const port = 8000;

app.use(express.json());
app.use(cors({ origin: true, credentials: true }));
app.use(userRouter);

app.get('/', (req, res) => {
	res.send('Hello World!');
});

app.get('/allergy', async (req, res) => {
	const allergy = await pool
		.query('SELECT * from ams_table ORDER BY id')
		.then((results) => {
			return results.rows;
		});

	res.status(200).json(allergy);
});

app.get('/allergy/:id', async (req, res) => {
	const id = req.params.id;
	const allergy = await pool
		.query('SELECT * from ams_table WHERE id = $1', [id])
		.then((results) => {
			return results.rows[0];
		});

	if (allergy) {
		res.status(200).json(allergy);
	} else {
		res.sendStatus(404);
	}
});

app.post('/allergy', async (req, res) => {
	const { name, symptoms, severity, treatment, notes, img_url } = req.body;
	const allergy = await pool
		.query(
			'INSERT INTO ams_table ( name, symptoms, severity, treatment, notes, img_url) VALUES ($1, $2, $3, $4, $5, $6) RETURNING name, symptoms, severity, treatment, notes, img_url',
			[name, symptoms, severity, treatment, notes, img_url]
		)
		.then((results) => {
			return results.rows;
		});

	res.status(201).send('Allergy added');
	res.end();
});

app.put('/allergy/:id', (req, res) => {
	const id = parseInt(req.params.id);
	const { name, symptoms, severity, treatment, notes, high_risk, img_url } =
		req.body;
	const allergy = pool.query(
		'UPDATE ams_table SET name=$1, symptoms=$2, severity=$3, treatment=$4, notes=$5, high_risk=$6, img_url=$7 WHERE id=$8',
		[name, symptoms, severity, treatment, notes, high_risk, img_url, id],
		(error, results) => {
			if (error) {
				console.log(error);
				throw error;
			} else {
				return results.rows;
			}
		}
	);

	res.status(200).json(allergy);
});

app.delete('/allergy/:id', (req, res) => {
	const id = parseInt(req.params.id);
	const allergy = pool.query(
		'DELETE FROM ams_table WHERE id= $1',
		[id],
		(error, results) => {
			if (error) {
				throw error;
			} else {
				return results.rows;
			}
		}
	);

	res.status(200).json(allergy);
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
