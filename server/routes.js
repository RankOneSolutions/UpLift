import express from 'express';
const router = express.Router();
const { Pool } = require('pg');

const pool = new Pool({
	                  connectionString: process.env.DATABASE_URL,
	                  ssl: true
});

router.get('/', (req, res) => {
  res.render('index.html');
});

router.get('/db', async (req, res) => {
	    try {
		          const client = await pool.connect()
		          const result = await client.query('SELECT * FROM cute_animals');
		          const results = { 'results': (result) ? result.rows : null};
		          res.send( results.results );
		          client.release();
		        } catch (err) {
				      console.error(err);
				      res.send("Error " + err);
				    }
	  })

export default router;
