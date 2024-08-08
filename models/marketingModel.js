const mongoose = require ('mongoose');

const marketingSchema = new mongoose.Schema({
  newCustomerName: { type: String, required: true },
  mobNo: { type: Number, required: true },
  newCustomerAddress: { type: String },
  businessName: { type: String, required: true },
  businesstype: { type: String, required: true },
  businessYear: { type: String, required: true },
  dgForYourBusiness:{type:String,required:true},
  dgUse: { type: String, required: true },
  
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const marketingModel = mongoose.models.marketingForm || mongoose.model('marketingForm',marketingSchema)

module.exports = marketingModel