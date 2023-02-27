const express = require('express');

// allows a dot env file with environment variables to be used
const dotenv = require('dotenv').config();
const { errorHandler } = require('./middleware/errorMiddleware');
const port = process.env.PORT || 4000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api/coffeeshops', require('./routes/coffeeShopRoutes'));

// override the default Express error handler
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
