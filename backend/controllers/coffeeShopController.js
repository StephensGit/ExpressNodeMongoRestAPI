const asyncHandler = require('express-async-handler');

// This contains mongoose methods to interact with the database
const CoffeeShop = require('../models/coffeeshopmodel');

// @desc:   Gets all coffee shops
// @route   GET /api/coffeeshops/
// @access  PRIVATE
const getCoffeeShops = asyncHandler(async (req, res) => {
  const coffeeShops = await CoffeeShop.find({});
  res.status(200).json(coffeeShops);
});

// @desc:   Get a single coffee shop
// @route   GET /api/coffeeshops/:id
// @access  PRIVATE
const getCoffeeShop = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Get Coffee Shop - ${req.params.id} ` });
});

// @desc:   Create a coffee shop
// @route   POST /api/coffeeshops
// @access  PRIVATE
const createCoffeeShop = asyncHandler(async (req, res) => {
  if (!req.body.name) {
    res.status(400);
    throw new Error('Coffee Shop content can not be empty');
  }

  const coffeeShop = await CoffeeShop.create({
    name: req.body.name,
  });
  res.status(200).json(coffeeShop);
});

// @desc:   Update a coffee shop
// @route   PUT /api/coffeeshops/:id
// @access  PRIVATE
const updateCoffeeShop = asyncHandler(async (req, res) => {
  const coffeeShop = await CoffeeShop.findById(req.params.id);
  if (!coffeeShop) {
    res.status(404);
    throw new Error('Coffee Shop not found');
  }
  const updatedCoffeeShop = await CoffeeShop.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json(updatedCoffeeShop);
});

// @desc:   Delete a coffee shop
// @route   DELETE /api/coffeeshops/:id
// @access  PRIVATE
const deleteCoffeeShop = asyncHandler(async (req, res) => {
  const coffeeShop = await CoffeeShop.findById(req.params.id);
  if (!coffeeShop) {
    res.status(404);
    throw new Error('Coffee Shop not found');
  }
  await coffeeShop.remove();
  res.status(200).json({ id: req.params.id });
});

module.exports = { getCoffeeShops, getCoffeeShop, createCoffeeShop, updateCoffeeShop, deleteCoffeeShop };
