// @desc:   Gets all coffee shops
// @route   GET /api/coffeeshops/
// @access  PRIVATE
const getCoffeeShops = (req, res) => {
  res.status(200).json({ message: 'Get Coffee Shops' });
};

// @desc:   Get a single coffee shop
// @route   GET /api/coffeeshops/:id
// @access  PRIVATE
const getCoffeeShop = (req, res) => {
  res.status(200).json({ message: `Get Coffee Shop - ${req.params.id} ` });
};

// @desc:   Create a coffee shop
// @route   POST /api/coffeeshops
// @access  PRIVATE
const createCoffeeShop = (req, res) => {
  res.status(200).json({ message: `Create Coffee Shop ` });
};

// @desc:   Update a coffee shop
// @route   PUT /api/coffeeshops/:id
// @access  PRIVATE
const updateCoffeeShop = (req, res) => {
  res.status(200).json({ message: `Update Coffee Shop - ${req.params.id}` });
};

// @desc:   Delete a coffee shop
// @route   DELETE /api/coffeeshops/:id
// @access  PRIVATE
const deleteCoffeeShop = (req, res) => {
  res.status(200).json({ message: `Delete Coffee Shop - ${req.params.id}` });
};

module.exports = { getCoffeeShops, getCoffeeShop, createCoffeeShop, updateCoffeeShop, deleteCoffeeShop };