const express = require('express');
const { createCustomerForm, getAllCustomerDetail, getSingleCustomerDetail } = require('../controllers/formController');
const router = express.Router();

//routes
//method - create customer form
router.post("/add", createCustomerForm);

//method - get all customer details
router.get('/getAll', getAllCustomerDetail)

//method - get single customer details
router.get('/getCustomer/:id', getSingleCustomerDetail);

module.exports = router