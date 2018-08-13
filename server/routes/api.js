const express = require('express');
const mysql = require('mysql');
const router = express.Router();

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '1234',
  database : 'mybd',
  port     : 3306
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

router.post('/bodega', function (req, res) {
  consulta = 'insert into Material (Nombre, Cantidad, Descripcion) values ("' + req.body.nombre + '" ,' + req.body.cantidad + ' ,"' + req.body.descripcion +'" )';
  connection.query(consulta, function (error, results, fields) {
  if (error) throw error;
  return res.send("¡Material creado exitosamente!");
  });
});

router.post('/bodega/borrar', function (req, res) {
  consulta = 'DELETE from  Material where ID_MATERIAL=' + req.body.ID;
  connection.query(consulta, function (error, results, fields) {
  if (error) throw error;
  return res.send("¡Material eliminado exitosamente!");
  });
});

module.exports = router;
