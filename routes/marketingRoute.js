const express = require('express');
const { createMarketingForm, getAllNewCustomer, getSingleNewCustomer } = require('../controllers/marketingFormController');
const router = express.Router()


//routes
//method - create customer form
router.post("/add", createMarketingForm);

//method - get all customer details
router.get('/getAll', getAllNewCustomer)

//method - get single customer details
router.get('/getCustomer/:id', getSingleNewCustomer);


module.exports = router