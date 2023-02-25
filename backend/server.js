const express = require('express');

// allows a dot env file with environment variables to be used
const dotenv = require('dotenv').config;

const port = process.env.PORT || 4000;

const app = express();

app.use('/api/coffeeshops', require('./routes/coffeeShopRoutes'));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
