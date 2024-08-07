const mongoose = require ('mongoose');

const marketingSchema = new mongoose.Schema({
  customerName: { type: String, required: true },
  mobNo: { type: Number, required: true },
  customerAddress: { type: String },
  businessName: { type: String, required: true },
  businesstype: { type: String, required: true },
  businessYear: { type: String, required: true },
  dgForYourBusiness:{type:String,required:true},
  dgUse: { type: String, required: true },
  meetingDate: { type: String, required: true },
  timeFrom: { type: String, required: true },
  timeTo: { type: String },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const marketingModel = mongoose.models.marketingForm || mongoose.model('marketingForm',marketingSchema)

module.exports = marketingModel