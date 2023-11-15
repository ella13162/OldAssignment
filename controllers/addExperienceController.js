
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.resolve(__dirname, '../myexperiences.db');
const db = new sqlite3.Database(dbPath, sqlite3.OPEN_READWRITE);

const addExperience = (req, res) => {
  const { exp_name, exp_type, country, region, longitude, latitude, exp_description } = req.body;
  const sql = `INSERT INTO experiences (exp_name, exp_type, country, region, longitude, latitude, exp_description) VALUES (?, ?, ?, ?, ?, ?, ?)`;

  db.run(sql, [exp_name, exp_type, country, region, longitude, latitude, exp_description], function(err) {
    if (err) {
      res.status(500).send(err.message);
      return;
    }
    res.status(201).json({ id: this.lastID });
  });
};

module.exports = {
  addExperience,
};
