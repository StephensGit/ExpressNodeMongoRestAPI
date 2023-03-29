const express = require('express');
const router = express.Router();

const { getCoffeeShops, getCoffeeShop, createCoffeeShop, updateCoffeeShop, deleteCoffeeShop } = require('../controllers/coffeeShopController');

const { protect } = require('../middleware/authMiddleware');

// Can you use this instead of the below?
router.route('/').get(getCoffeeShops).post(protect, createCoffeeShop);
router.route('/:id').get(getCoffeeShop).put(protect, updateCoffeeShop).delete(protect, deleteCoffeeShop);

// router.get('/', getCoffeeShops);

// router.get('/:id', getCoffeeShop);

// router.post('/', createCoffeeShop);

// router.put('/:id', updateCoffeeShop);

// router.delete('/:id', deleteCoffeeShop);

module.exports = router;
