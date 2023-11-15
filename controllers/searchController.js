
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.resolve(__dirname, '../myexperiences.db');
const db = new sqlite3.Database(dbPath, sqlite3.OPEN_READWRITE);

const searchExperiences = (req, res) => {
  const sql = 'SELECT * FROM experiences WHERE region = ?';
  db.all(sql, [req.params.region], (err, rows) => {
    if (err) {
      res.status(500).send(err.message);
      return;
    }
    res.status(200).json(rows);
  });
};

module.exports = {
  searchExperiences,
};
