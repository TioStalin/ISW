const express = require('express');
const mysql = require('mysql');
const router = express.Router();

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '1234',
  database : 'mydb',
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

router.post('/encontrar_bc', function (req, res) {
   query  = 'select * from `bodeguero de obra` where usuario_id = ' + req.body.id ;
   console.log(query);
   connection.query(query, function (error, results, fields) {
         if (error) throw error;
         return res.send(JSON.stringify(results));
   });
});

router.get('/bc', function (req, res) {
   connection.query('select * from `bodeguero central`, usuario where id_usuario = usuario_id', function (error, results, fields) {
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

router.post('/agregar', function (req, res) {
  consulta = 'insert into Usuario (Nombre, Cargo, Contrasena, Apellido, Mail) values ("' + req.body.nombre + '" ,' + req.body.cargo + ' ,"' + req.body.password +'", "' + req.body.apellido +'", "' + req.body.email +'")';
  connection.query(consulta, function (error, results, fields) {
  if (error) throw error;
  return res.send("¡Usuario creado exitosamente!");
  });
});

router.post('/bodega/borrar', function (req, res) {
  consulta = 'DELETE from  Material where ID_MATERIAL=' + req.body.ID;
  connection.query(consulta, function (error, results, fields) {
  if (error) throw error;
  return res.send("¡Material eliminado exitosamente!");
  });
});


router.post('/crearobra', function (req, res) {
  consulta = 'insert into Obra (Nombre, Descripcion, Ubicacion) values (';
  consulta += '"' + req.body.nombre   +'" ,';
  consulta += '"' + req.body.descripcion   +'" ,';
  consulta += '"' + req.body.ubicacion    +'" )';
  connection.query(consulta, function (error, results, fields) {
  if (error) throw error;
  return res.send("¡Obra creada exitosamente!");
  });
});

router.get('/obra', function (req, res) {
   connection.query('select * from obra', function (error, results, fields) {
   if (error) throw error;
   res.send(JSON.stringify(results));
 });
});

router.get('/usuario/bodeguero_obra', function (req, res) {
   connection.query('select * from `bodeguero de obra`, usuario where id_usuario = usuario_id', function (error, results, fields) {
   if (error) throw error;
   res.send(JSON.stringify(results));
 });
});

router.post('/asignar_bodeguero', function(req, res) {
  query = "UPDATE obra SET `bodeguero de obra_id` = " + req.body.id_bodeguero + " WHERE id_obra = " + req.body.id_obra;
  console.log(query);
  connection.query(query, function (error, results, fields) {
  if (error) throw error;
  });

  query2 = "UPDATE `bodeguero de obra` SET `bc_id` = " + req.body.id_bodeguero_central + " WHERE id_bodeguero_obra = " + req.body.id_bodeguero;
  console.log(query2);
  connection.query(query2, function (error, results, fields) {
  if (error) throw error;
  });

  return res.send("¡Obra asignada!");
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
      if(req.body.cargo == 2) {
        query_bc = 'INSERT INTO `mydb`.`bodeguero central` (usuario_id) VALUES (';
        query_bc +=  results.insertId + ')';
        connection.query(query_bc, function (error, results, fields) {
          if (error) throw error;
          if (results) return res.send("¡Usuario creado satisfactoriamente!");
        });
      }

      if(req.body.cargo == 3) {
        query_bo = 'INSERT INTO `mydb`.`bodeguero de obra` (usuario_id) VALUES (';
        query_bo+=  results.insertId + ')';
        connection.query(query_bo, function (error, results, fields) {
          if (error) throw error;
          if (results) return res.send("¡Usuario creado satisfactoriamente!");
        });
      }

      if(req.body.cargo == 4) {
        query_ec = 'INSERT INTO `mydb`.`encargado de compra` (usuario_id) VALUES (';
        query_ec += results.insertId + ')';
        connection.query(query_ec, function (error, results, fields) {
          if (error) throw error;
          if (results) return res.send("¡Usuario creado satisfactoriamente!");
        });
      }
    }
  });
});

/*router.post('/solicitud_material', function(req, res) {
  query_1 = "INSERT INTO `mydb`.`solicitud de material` (`bodeguero de obra_id`, `bodeguero central_id`, fecha) VALUES (";
  connection.query(query, function (error, results, fields) {
  if (error) throw error;
  });
});*/

module.exports = router;
