const feedbackModel = require("../models/feedbackModel");


//create Feedback
const createFeedback = async (req,res) => {
    const customerFeedback = new feedbackModel({
      customerName: req.body.customerName,
      phNo: req.body.phNo,
      businessName: req.body.businessName,
      serviceServed: req.body.serviceServed,
      serviceComplete: req.body.serviceComplete,
      satisfactionLevel: req.body.satisfactionLevel,
      feedbackDesigners_Editors: req.body.feedbackDesigners_Editors,
      ratingForCRM: req.body.ratingForCRM,
      reherts: req.body.reherts,
    });

    try {
        await customerFeedback.save();
        res.json({success:true, message:"Your Feedback Detail's added"})
    } catch (error) {
        console.log(error);
        res.json({success:false, message:"Error"})
    }

}

//getAll feedback
const getAllFeedback = async(req,res) => {
    try {
        const feedbackList = await feedbackModel.find({});
        res.json({success:true, data:feedbackList})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
    }
};

//get single feedback
const getSingleFeedback = async(req,res) => {
    try {
        const feedbackDetail = await feedbackModel.findById(req.params.id);
        res.json({success:true, data:feedbackDetail})
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" });
    }
};

module.exports = {createFeedback, getAllFeedback, getSingleFeedback}