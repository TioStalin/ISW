# GPI

## Como iniciar el proyecto

En la terminal se debe usar `ng build && node server` para construir el proyecto y unirlo a la base de datos, luego en el navegador abrir `localhost:3000` para poder visualizar el proyecto.

## Que lleva el proyecto

### 05/08

* Lleva un completo login para el usuario pero no existe un registro de usuarios, este ultimo deberia poder realizarlo el administrador posteriormente.
* Las vistas estan protegidas tanto para personas externas como para cargos distintos, por ejemplo, los bodegueros no pueden ver las compras (estan reservadas para administrador), entre otros detalles.
* Por el momento la sesion del usuario es guardada como localstorage, se espera cambiar esto en el futuro por poca seguridad que conlleva.

npm install -g json-server
json-server --watch db.json --port 3004
