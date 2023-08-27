//DEPENDENCIES
const express = require('express');
const cors = require('cors');
const transactions = require('./controllers/transactionsController.js');

//CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(express.json()); // Parse incoming JSON
app.use(cors());

app.get('/', (req, res) => {
    res.send('hello');
})

const transactionsController = require("./controllers/transactionsController.js");
app.use("/transactions", transactionsController);

//EXPORT
module.exports = app;