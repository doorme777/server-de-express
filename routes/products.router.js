const express = require('express');
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

routes.get('/filter', async (req, res, next) => {
  res.json('Jejeje soy un filter que loco wuo');
});

// //  Obtener solo un producto (GET)
routes.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await service.findOne(id);
    res.json(product);
  } catch (error) {
    next(error);
  }
});

// Creación (POST)
routes.post('/', async (req, res) => {
  const body = req.body;
  const product = await service.create(body);
  res.status(201).json(product);
});

// Actualización (PATCH)
routes.patch('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const product = await service.update(id, body);
    res.json(product);
  } catch (error) {
    next(error);
  }
});

// Eliminación (DELETE)
routes.delete('/:id', async (req, res) => {
  const id = req.params.id;
  const deleteProduct = await service.delete(id);
  res.json(deleteProduct);
});

module.exports = routes;
