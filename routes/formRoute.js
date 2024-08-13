const express = require('express');
const { createCustomerForm, getAllCustomerDetail, getSingleCustomerDetail, updateCustomerDetail, deletCustomerDetail } = require('../controllers/formController');
const router = express.Router();

//routes
//method - create customer form
router.post("/add", createCustomerForm);

//method - get all customer details
router.get('/getAll', getAllCustomerDetail)

//method - get single customer details
router.get('/getCustomer/:id', getSingleCustomerDetail);


//method - update single customer details
router.put('/updateCustomer/:id', updateCustomerDetail);



//method - delete single customer details
router.delete('/deleteCustomer/:id', deletCustomerDetail);

module.exports = router
