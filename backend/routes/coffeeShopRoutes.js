const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json({ message: 'Coffee Shops' });
});

router.post('/', (req, res) => {
  res.status(200).json({ message: 'Create Coffee Shop' });
});

router.put('/:id', (req, res) => {
  res.status(200).json({ message: `Update Coffee Shop - ${req.params.id}` });
});

router.delete('/:id', (req, res) => {
  res.status(200).json({ message: `Delete Coffee Shop - ${req.params.id}` });
});

module.exports = router;
