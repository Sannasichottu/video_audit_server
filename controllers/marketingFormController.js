const marketingModel = require("../models/marketingModel");


//create marketing form
const createMarketingForm = async(req,res) => {
    const marketingForm = new marketingModel({
      customerName: req.body.customerName,
      mobNo: req.body.mobNo,
      customerAddress: req.body.customerAddress,
      businessName: req.body.businessName,
      businesstype: req.body.businesstype,
      businessYear: req.body.businessYear,
      dgForYourBusiness:req.body.dgForYourBusiness,
      dgUse: req.body.dgUse,
      meetingDate: req.body.meetingDate,
      timeFrom: req.body.timeFrom,
      timeTo: req.body.timeTo
    });
    try{
        await marketingForm.save();
        res.json({success:true, message:"Your Detail's Added"})
    }catch(err) {
        console.log(error);
        res.json({success:false,message:"Error"})
    }
}

//get all customer
const getAllNewCustomer = async(req,res) => {
    try {
        const newCustomerList = await marketingModel.find({});
        res.json({success:true,data:newCustomerList})
    } catch (error) {
        console.log(error);
        res.json({success:false, message:"Error"})
    }
};

//get single customer detail

const getSingleNewCustomer =async (req,res) => {
    try {
        const newCustomerDetail = await marketingModel.findById(req.params.id);
        res.json({success:true, data:newCustomerDetail})
    } catch (error) {
        console.log(error)
        res.json({success:false,message:"Error"})
    }
};

module.exports = {createMarketingForm, getAllNewCustomer,getSingleNewCustomer}