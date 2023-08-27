const express = require("express");
const transactions = express.Router();
const transactionsArray = require("../models/transaction.js");

//INDEX
transactions.get("/", (req, res) => {
  res.json(transactionsArray);
});

//WITH ERROR HANDLING:
// SHOW
transactions.get("/:id", (req, res) => {
    if (transactionsArray[req.params.id]) {
      res.json(transactionsArray[req.params.id]);
    } else {
      res.status(404).json({ error: "Not Found" });
    }
  });

//CREATE
transactions.post('/', (req, res) => {
    transactionsArray.push(req.body);
    res.json(transactionsArray[transactionsArray.length - 1]);
});

// DELETE
transactions.delete("/:indexArray", (req, res) => {
    if (transactionsArray[req.params.indexArray]) {
      const deletedBookMark = transactionsArray.splice(req.params.indexArray, 1);
      res.status(200).json(deletedBookMark);
    } else {
      res.status(404).json({ error: "Not Found" });
    }
  });

 
// UPDATE
transactions.put("/:arrayIndex", (req, res) => {
    transactionsArray[req.params.arrayIndex] = req.body;
    res.status(200).json(transactionsArray[req.params.arrayIndex]);
  });

module.exports = transactions;