const express = require('express');
const faker = require('faker');
// const process = require('process');

const routes = express();

// Obtener todos los productos (GET)
routes.get('/', (req, res) => {
  const products = [];
  const { size } = req.query;
  const limit = size || 10;
  for (let index = 0; index < limit; index++) {
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.imageUrl(),
    });
  }
  res.json(products);
});

routes.get('/filter', (req, res) => {
  const id = req.params.id;
  const product = products.find((p) => p.id === id);
  if (!product) {
    return res.status(404).json({ error: 'Producto no encontrado' });
  }
  res.json(product);
});

// //  Obtener solo un producto (GET)
routes.get('/:id', (req, res) => {
  // Obtener el id de los parámetros
  const id = req.params.id;

  // Buscar el producto con el id correspondiente
  // const producto = products.find((p) => p.id === id);
  if (id === '999') {
    return res.status(404).json({ error: 'Producto no encontrado' });
  }

  res.json({
    id,
    name: faker.commerce.productName(),
    price: parseInt(faker.commerce.price(), 10),
    image: faker.image.imageUrl(),
  });
});

// Creación (POST)
routes.post('/', (req, res) => {
  const body = req.body;
  res.status(201).json({ 'Todo bien compañerrito': body });

  res.json({
    message: 'created',
    data: body,
  });
});

// Actualización (PATCH)
routes.patch('/:id', (req, res) => {
  const id = req.params.id;
  const body = req.body;
  res.json({
    message: 'updated',
    data: body,
  });
});

// Eliminación (DELETE)
routes.delete('/:id', (req, res) => {
  const id = req.params.id;
  res.json({
    message: 'deleted',
    id,
  });
});

module.exports = routes;
