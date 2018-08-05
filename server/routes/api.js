const express = require('express');
const mysql = require('mysql');
const router = express.Router();

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'mydb',
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
   connection.query('select * from Material', function (error, results, fields) {
   if (error) throw error;
   res.send(JSON.stringify(results));
 });
});

router.post('/usuario', function (req, res) {
  consulta = 'select * from usuario where Nombre = "' + req.body.nombre + '" and Contrasena = "' + req.body.contrasena + '"';
  connection.query(consulta, function (error, results, fields) {
  if (error) throw error;
  return res.send(JSON.stringify(results));
  });
});

// var query = 'insert into Material (Nombre, Cantidad, Descripcion) values ("' + req.body.nombre + '" ,' + req.body.cantidad + ' ,"' + req.body.descripcion +'" )';

module.exports = router;
