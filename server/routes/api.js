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

router.post('/agregar_usuario', function(req, res) {
  query_user = 'INSERT INTO usuario (Nombre, Apellido, Contrasena, Cargo, Mail) VALUES (';
  query_user += '"' + req.body.nombre   +'" ,';
  query_user += '"' + req.body.apellido +'" ,';
  query_user += '"' + req.body.password +'" ,';
  query_user +=       req.body.cargo    +'  ,';
  query_user += '"' + req.body.email    +'" )';
  connection.query(query_user, function (error, results, fields) {
    if (error) throw error;
    if (results) {
      console.log(results.insertId);
      if(req.body.cargo == 2) {
        query_bc = 'INSERT INTO `mybd`.`bodeguero central` (Usuario_ID_Usuario) VALUES (';
        query_bc +=  results.insertId + ')';
        connection.query(query_bc, function (error, results, fields) {
          if (error) throw error;
          if (results) return res.send("¡Usuario creado satisfactoriamente!");
        });
      }

      if(req.body.cargo == 3) {
        query_bo = 'INSERT INTO `mybd`.`bodeguero de obra` (Usuario_ID_Usuario) VALUES (';
        query_bo+=  results.insertId + ')';
        connection.query(query_bo, function (error, results, fields) {
          if (error) throw error;
          if (results) return res.send("¡Usuario creado satisfactoriamente!");
        });
      }

      if(req.body.cargo == 4) {
        query_ec = 'INSERT INTO `mybd`.`encargado de compra` (Usuario_ID_Usuario) VALUES (';
        query_ec += results.insertId + ')';
        connection.query(query_ec, function (error, results, fields) {
          if (error) throw error;
          if (results) return res.send("¡Usuario creado satisfactoriamente!");
        });
      }
    }
  });
});
module.exports = router;
