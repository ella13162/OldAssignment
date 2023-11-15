const express = require('express');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// Resolve the absolute path for the database file
const dbPath = path.resolve(__dirname, './myexperiences.db');
console.log(__dirname, './myexperiences.db')

// Initialize the database
 const db = new sqlite3.Database(dbPath, sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
      console.error('ERROR: ' + err.message);
      // Instead of throwing, we'll just log the error.
    } 
    else {
     console.log(`Connected to the ${dbPath} SQLite database.`);
   }
});

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Endpoint to get a list of experiences
app.get('/experiences', (req, res) => {
  const sql = 'SELECT * FROM experiences';
  db.all(sql, [], (err, rows) => {
    if (err) {
      res.status(500).send(err.message);
      return;
    }
    res.status(200).json(rows);
  });
});

// Endpoint to get a single experience
app.get('/experiences/:id', (req, res) => {
  const sql = 'SELECT * FROM experiences WHERE id = ?';
  db.get(sql, [req.params.id], (err, row) => {
    if (err) {
      res.status(500).send(err.message);
      return;
    }
    if (row) {
      res.status(200).json(row);
    } else {
      res.status(404).send('Experience not found');
    }
  });
});

// Endpoint to create a new experience
app.post('/experiences', (req, res) => {
  const { exp_name, exp_type, country, region, lon, lat, exp_description } = req.body;
  const sql = `INSERT INTO experiences (exp_name, exp_type, country, region, longitude, latitude, exp_description) VALUES (?, ?, ?, ?, ?, ?, ?)`;
  db.run(sql, [exp_name, exp_type, country, region, lon, lat, exp_description], function(err) {
    if (err) {
      res.status(500).send(err.message);
      return;
    }
    res.status(201).json({ id: this.lastID });
  });
});

// Endpoint to create a new booking
app.post('/bookings', (req, res) => {
  const { people, expID } = req.body;
  const sql = `INSERT INTO bookings (people, expID) VALUES (?, ?)`;
  db.run(sql, [people, expID], function(err) {
    if (err) {
      res.status(500).send(err.message);
      return;
    }
    res.status(201).json({ bookingId: this.lastID });
  });
});

// Endpoint to register a new user
app.post('/users', (req, res) => {
  const { email, username, password } = req.body;
  const sql = `INSERT INTO users (email, username, password) VALUES (?, ?, ?)`;
  db.run(sql, [email, username, password], function(err) {
    if (err) {
      res.status(500).send(err.message);
      return;
    }
    res.status(201).json({ userId: this.lastID });
  });
});

// Handle 404 - Keep this as a last route
app.use((req, res) => {
  res.status(404).send("Sorry, that route doesn't exist.");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Shut down the server
process.on('SIGINT', () => {
  db.close(() => {
    console.log('Database connection closed.');
    process.exit(0);
  });
});

module.exports = app;
