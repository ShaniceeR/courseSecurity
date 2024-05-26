const mysql = require('mysql');
const connection = mysql.createConnection({
  host: ' coursesecurity ', // Use 'YOUR_INSTANCE_CONNECTION_NAME' for Cloud SQL
  user: 'root',
  password: 'Coursesecurity',
  database: 'course'
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the database.');
});

module.exports = connection;
