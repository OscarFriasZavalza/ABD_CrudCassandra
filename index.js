const express = require('express');

const rutas = require('./rutas/rutas');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});
app.use('/api', rutas);

app.listen(3000, () => {
  console.log('Servidor escuchando en el puerto 3000');
});
 
