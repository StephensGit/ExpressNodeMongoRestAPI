const express = require('express');
const router = express.Router();
const { getCoffeeShops, getCoffeeShop, createCoffeeShop, updateCoffeeShop, deleteCoffeeShop } = require('../controllers/coffeeShopController');

// Can you use this instead of the below?
router.route('/').get(getCoffeeShops).post(createCoffeeShop);
router.route('/:id').get(getCoffeeShop).put(updateCoffeeShop).delete(deleteCoffeeShop);

// router.get('/', getCoffeeShops);

// router.get('/:id', getCoffeeShop);

// router.post('/', createCoffeeShop);

// router.put('/:id', updateCoffeeShop);

// router.delete('/:id', deleteCoffeeShop);

module.exports = router;
