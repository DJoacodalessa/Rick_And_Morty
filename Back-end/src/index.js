const express = require('express');
const server = express();
const PORT = 3001;
const router = require('./routes/index'); // Importa tu router
const {conn} = require("./DB_connection")
// Middleware para permitir CORS
server.use((req, res, next) => {
   res.header('Access-Control-Allow-Origin', '*');
   res.header('Access-Control-Allow-Credentials', 'true');
   res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
   );
   res.header(
      'Access-Control-Allow-Methods',
      'GET, POST, OPTIONS, PUT, DELETE'
   );
   next();
});

// Middleware para procesar datos JSON
server.use(express.json());

// Middleware para agregar "/rickandmorty" antes de cada ruta
server.use('/rickandmorty', router);

server.listen(PORT, () => {
   console.log('Server raised in port: ' + PORT);
});

