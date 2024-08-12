const formModel = require("../models/formModel")


//create
const createCustomerForm = async(req,res) => {
    const customerForm = new formModel({
      customerName: req.body.customerName,
      clientResponse: req.body.clientResponse,
      shootTime: req.body.shootTime,
      customerAddress: req.body.customerAddress,
      noOfVideo: req.body.noOfVideo,
      noOfPicture: req.body.noOfPicture,
      memoryOccupied: req.body.memoryOccupied,
      reelsPlan: req.body.reelsPlan,
      videosCheck: req.body.videosCheck,
      sufficientPlan: req.body.sufficientPlan,
      reelsStraegy: req.body.reelsStraegy,
      remarks: req.body.remarks,
      reelClip:req.body.reelClip,
      date:req.body.date
    });
    try {
        await customerForm.save();
        res.json({success:true, message:"Customer Detail's Added"})
    } catch (error) {
        console.log(error);
        res.json({sucess:false, message:"Error"})
    }

}

//get all
const getAllCustomerDetail = async(req,res) => {
    try {
        const customerList = await formModel.find({});
        res.json({success:true, data:customerList})
    } catch (error) {
        console.log(error);
        res.json({success:false, message:"Error"})
    }
}

//get single
const getSingleCustomerDetail = async(req,res) => {
    try {
            const customerDetail = await formModel.findById(req.params.id);
            res.json({success:true, data:customerDetail})
    } catch (error) {
        console.log(error)
        res.json({success:false, message:"Error"})
    }
}


//update customer detail
const updateCustomerDetail = async(req,res) => {
    try {
      const id = req.params.id;
      const updateDetail = await formModel.findById(id);
      if(!updateDetail) {
        return res.status(401).json({msg:"Detail's not found"})
      }  
      const updateData = await formModel.findByIdAndUpdate(id, req.body,{new:true});
      res.status(200).json({msg:"User Update Sccessfully"})
    } catch (error) {
        res.status(500).json({error:error})
    }
}



//delete customer detail
const deletCustomerDetail = async(req,res) => {
    try {
        const id = req.params.id;
        const userExist = await formModel.findById(id);
        if(!userExist) {
            return res.status(200).json({msg:"Detail's not found"})
        }
        await formModel.findByIdAndDelete(id);
        res.status(200).json({msg:"User deleted Successfully"})
    } catch (error) {
        res.status(500).json({error: error});
    }
}
module.exports = {createCustomerForm,getAllCustomerDetail, getSingleCustomerDetail, updateCustomerDetail, deletCustomerDetail}