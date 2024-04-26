const express = require('express');
const faker = require('faker');
const producService = require('./../services/product.service');
// const process = require('process');

const routes = express();
const service = new producService();
service.generate();

// Obtener todos los productos (GET)
routes.get('/', async (req, res) => {
  products = await service.find();
  res.json(products);
});

routes.get('/filter', async (req, res) => {
  const id = req.params.id;
  const product = await products.find((p) => p.id === id);
  if (!product) {
    return res.status(404).json({ error: 'Producto no encontrado' });
  }
  res.json(product);
});

// //  Obtener solo un producto (GET)
routes.get('/:id', async (req, res) => {
  const product = await service.findOne(req.params.id);

  res.json(product);
});

// Creación (POST)
routes.post('/', async (req, res) => {
  const body = req.body;
  const product = await service.create(body);
  res.status(201).json({ 'Todo bien compañerrito': body });

  res.json({
    message: 'created',
    data: product,
  });
});

// Actualización (PATCH)
routes.patch('/:id', async (req, res) => {
  const id = req.params.id;
  const body = req.body;
  const product = await service.update(id, body);
  res.json({
    message: 'updated',
    data: product,
  });
});

// Eliminación (DELETE)
routes.delete('/:id', async (req, res) => {
  const id = req.params.id;
  const deleteProduct = await service.delete(id);
  res.json(deleteProduct);
});

module.exports = routes;
