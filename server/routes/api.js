const express = require('express');
const mysql = require('mysql');
const router = express.Router();

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'IntentoDeSoftware',
  port     : 8889
});

connection.connect(function(err) {
  if (err) throw err
  console.log('Estas conectado!')
})

router.get('/', (req, res) => {
  res.send('api works');
});

router.get('/bodega', function (req, res) {
   connection.query('select * from bodega', function (error, results, fields) {
   if (error) throw error;
   res.send(JSON.stringify(results));
 });
});

module.exports = router;
