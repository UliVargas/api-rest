# Título del Proyecto

<p>Api Rest para Parco App como reto en el proceso de selección</p>

## Comenzando 🚀

<p>Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas.</p>

### Pre-requisitos 📋

_Que cosas necesitas para instalar el software_

```
minimo nodejs v14.16 y npm v6.14.11
```

### Instalación 🔧

```
Forkea el repositorio o descarga el zip, una vez abierta la carpeta de el proyecto, con npm hacer un npm install para instalar todas las dependencias necesarias.

La base de datos está hecha con postgreSQL en conjunto con SequelizeORM.

Agregar en la raiz del proyecto un archivo .env con las siguientes variables de entorno: DB_USER, DB_PASSWORD, DB_HOST, DB_NAME y SECRETWORD para la autenticacion con jwt

Una vez instalado y configurado todo, necesitas ejecutar en tu consola o terminal npm run dev
```

### Rutas del servidor

```
//Usuarios

Obtener la lista de todos los usuarios
Metodo: GET
http://localhost/api/usuarios

Obtener usuario por uid
Metodo: GET
http://localhost/api/usuarios/uid
Parametros: uid por params

Modificar usuario
Metodo: POST
http://localhost/api/editar-usuario:uid --- requiere autenticacion
Parametros: uid, correo, nombre, role(admin o user)
//Los parametros no son oobligatorios, con excepcion del uid, los demas parametros se puede modificar por separado.

Abonar saldo
Metodo: POST
http://localhost/api/agregar-saldo/:uid --- requiere autenticacion
Parametros: id de usuario, monto a abonar

Cambiar contraseña
Metodo: POST
http://localhost/api/editar-contrasena/:uid --- requiere autenticacion
Parametros: uid, contraseña


//Transacciones

Obtener transacciones
Metodo: GET
http://localhost/api/transacciones --- requiere autenticacion

Obtener trancacciones por usuario
Metodo: GET
http://localhost/api/transacciones/uid --- requiere autenticacion

Realziar una transaccion de pago
Metodo: POST
http://localhost/api/agregar-transaccion --- requiere autenticacion
Parámetros: id de usuario, monto a pagar, id de estacionamiento


//Ver informacion de transacciones por id de usuario y fecha de creacion
Metodo: POST
http://localhost/api/csv-transacciones --- requiere de autenticacion y tener el rol de admin en la base de datos
Parametros: fechaInicial y fechaFinal (2021-12-18 y 2021-12-19), el segundo parametro es opcional.


//Inicio de sesion
Metodo: POST
http://localhost/api/iniciar-sesion
Parametros: correo, contraseña

//Para autenticarse, solo necesitan iniciar sesion

Una vez autenticado, necesitaras el token que se genera y se lanza como respuesta.
El toquen se pasa por headers, puedes utilizar postman y usar la opcion de auth e ingresar el token generado en el login.

Ejemplo:
http://localhost/api/transacciones?accesstoken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
http://localhost/api/editar-usuario/9e81c9a0-9c41-4534-ad63-2b5eec71eabe
```


### Espero les pueda servir y estoy abierto a propuestas de cambio.
