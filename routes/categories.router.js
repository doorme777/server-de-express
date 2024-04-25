const express = require('express');

const router = express.Router();

router.get('/:id', (req, res) => {
  const categoryId = req.params.id;
  res.json([
    {
      id: categoryId,
      name: 'Santa',
      products: ['duendes', 'xd', 'regalos'],
    },
  ]);
});

module.exports = router;
