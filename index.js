const express = require('express');
const app = express();
const port = 3001;
const products = [
  {
    id: 1,
    description: 'Product for e-commerce',
    price: '10',
  },
  {
    id: 2,
    description: 'Product for e-commerce',
    price: '15',
  },
  {
    id: 3,
    description: 'Product for e-commerce',
    price: '20',
  },
  {
    id: 4,
    description: 'Product for e-commerce',
    price: '25',
  },
];

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Obtener todos los productos (GET)
app.get('/productos', (req, res) => {
  res.json(products);
});

app.get('/categories/:id', (req, res) => {
  const categoryId = req.params.id;
  res.json([
    {
      id: categoryId,
      name: 'Santa',
      products: ['duendes', 'xd', 'regalos'],
    },
  ]);
});

// Obtener solo un producto (GET)
app.get('/productos/:id', (req, res) => {
  // Obtener el id de los parámetros
  const id = req.params.id;

  // Buscar el producto con el id correspondiente
  const producto = products.find((p) => p.id === id);
  if (!producto) {
    return res.status(404).json({ error: 'Producto no encontrado' });
  }

  res.json(producto);
});

// Actualización (PUT)
app.put('/productos/:id', (req, res) => {
  const id = req.params.id;
  const nuevoNombre = req.body.nombre;

  const producto = products.find((p) => p.id === id);

  if (!producto) {
    return res.status(404).json({ error: 'Producto no encontrado' });
  }

  producto.nombre = nuevoNombre;

  res.json(producto);
});

// Creación (POST)
app.post('/productos', (req, res) => {
  const result = req.body;

  res.json({
    message: 'Producto creado con éxito',
    data: {
      result,
    },
  });
  products.push(result);

  res.status(201).json(result);
});

// {
//   id: 1,
//   description: 'Product for e-commerce',
//   price: '10',
// },

// Eliminación (DELETE)
app.delete('/productos/:id', (req, res) => {
  const id = req.params.id;

  const index = products.findIndex((p) => p.id === id);

  if (index === -1) {
    return res.status(404).json({ error: 'Producto no encontrado' });
  }

  products.splice(index, 1);

  res.json({ message: 'Producto eliminado con éxito' });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
