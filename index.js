const express = require('express');
const app = express();
const routerApi = require('./routes/index');
const port = 3002;

routerApi(app);

// app.get('/users', (req, res) => {
//   const { limit, offset } = req.query;

//   if (limit && offset) {
//     res.json({
//       limit,
//       offset,
//     });
//   }

//   res.send('No hay limit ni offset');
// });

// Actualización (PUT)
// app.put('/productos/:id', (req, res) => {
//   const id = req.params.id;
//   const nuevoNombre = req.body.nombre;

//   const producto = products.find((p) => p.id === id);

//   if (!producto) {
//     return res.status(404).json({ error: 'Producto no encontrado' });
//   }

//   producto.nombre = nuevoNombre;

//   res.json(producto);
// });

// Creación (POST)
// app.post('/productos', (req, res) => {
//   const result = req.body;

//   res.json({
//     message: 'Producto creado con éxito',
//     data: {
//       result,
//     },
//   });
//   products.push(result);

//   res.status(201).json(result);
// });

// Eliminación (DELETE)
// app.delete('/productos/:id', (req, res) => {
//   const id = req.params.id;

//   const index = products.findIndex((p) => p.id === id);

//   if (index === -1) {
//     return res.status(404).json({ error: 'Producto no encontrado' });
//   }

//   products.splice(index, 1);

//   res.json({ message: 'Producto eliminado con éxito' });
// });

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
