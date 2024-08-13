const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
  customerName: { type: String, required: true },
  clientResponse: { type: String },
  shootTime: { type: String },
  reelClip:{type:String, required:true},
  customerAddress: { type: String, required: true },
  noOfVideo: { type: String, required: true },
  noOfPicture: { type: String, required: true },
  memoryOccupied: { type: String, required: true },
  reelsPlan: { type: String, required: true },
  videosCheck: { type: String, required: true },
  sufficientPlan: { type: String, required: true },
  reelsStraegy: { type: String },
  remarks: { type: String },  
  date:{type:String,required:true},
  createdAt: {
    type: Date,
    default: Date.now
  },
});

const formModel = mongoose.models.customerForm || mongoose.model('customerForm', formSchema)

module.exports = formModel
