const asyncHandler = require('express-async-handler');

// This contains mongoose methods to interact with the database
const CoffeeShop = require('../models/coffeeshopmodel');
const User = require('../models/userModel');

// @desc:   Gets all coffee shops
// @route   GET /api/coffeeshops/
// @access  PRIVATE
const getCoffeeShops = asyncHandler(async (req, res) => {
  const coffeeShops = await CoffeeShop.find({ user: req.user._id });
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
    user: req.user._id,
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
  // logged in user
  const user = await User.findById(req.user._id);

  if (!user) {
    res.status(404);
    throw new Error('User not found');
  }

  // check if user logged in is the coffee shop owner
  if (coffeeShop.user.toString() !== user._id.toString()) {
    res.status(401);
    throw new Error('You are not authorized to update this coffee shop');
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
  // check if coffee shop exists
  if (!coffeeShop) {
    res.status(404);
    throw new Error('Coffee Shop not found');
  }

  // logged in user
  const user = await User.findById(req.user._id);

  if (!user) {
    res.status(404);
    throw new Error('User not found');
  }

  // check if user logged in is the coffee shop owner
  if (coffeeShop.user.toString() !== user._id.toString()) {
    res.status(401);
    throw new Error('You are not authorized to delete this coffee shop');
  }

  await coffeeShop.remove();
  res.status(200).json({ id: req.params.id });
});

module.exports = { getCoffeeShops, getCoffeeShop, createCoffeeShop, updateCoffeeShop, deleteCoffeeShop };
