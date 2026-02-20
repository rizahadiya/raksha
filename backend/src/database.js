const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.join(__dirname, '../raksha.db');

const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Database connection error:', err);
  } else {
    console.log('✅ SQLite database connected');
  }
});

const initializeDatabase = () => {
  db.serialize(() => {
    // Emergency Contacts Table
    db.run(`
      CREATE TABLE IF NOT EXISTS emergency_contacts (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        phone TEXT NOT NULL,
        relationship TEXT,
        is_primary BOOLEAN DEFAULT 0,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // SOS Alerts Table
    db.run(`
      CREATE TABLE IF NOT EXISTS sos_alerts (
        id TEXT PRIMARY KEY,
        trigger_type TEXT NOT NULL,
        latitude REAL,
        longitude REAL,
        maps_link TEXT,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        status TEXT DEFAULT 'active'
      )
    `);

    // Alert Recipients Table
    db.run(`
      CREATE TABLE IF NOT EXISTS alert_recipients (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        alert_id TEXT,
        contact_id INTEGER,
        sent_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        delivery_status TEXT DEFAULT 'pending',
        FOREIGN KEY (alert_id) REFERENCES sos_alerts(id),
        FOREIGN KEY (contact_id) REFERENCES emergency_contacts(id)
      )
    `);

    console.log('🗄️ Database tables initialized');
  });
};

module.exports = {
  db,
  initializeDatabase,
  run: (sql, params = []) => {
    return new Promise((resolve, reject) => {
      db.run(sql, params, function(err) {
        if (err) reject(err);
        else resolve({ id: this.lastID, changes: this.changes });
      });
    });
  },
  get: (sql, params = []) => {
    return new Promise((resolve, reject) => {
      db.get(sql, params, (err, row) => {
        if (err) reject(err);
        else resolve(row);
      });
    });
  },
  all: (sql, params = []) => {
    return new Promise((resolve, reject) => {
      db.all(sql, params, (err, rows) => {
        if (err) reject(err);
        else resolve(rows);
      });
    });
  }
};
