const mongoose = require("mongoose");

const feedbackSchema = new mongoose.Schema({
  customerName: { type: String, required: true },
  phNo: { type: Number, required: true },
  businessName: { type: String, required: true },
  serviceServed: { type: String },
  serviceComplete: { type: String },
  satisfactionLevel: { type: String, required: true },
  feedbackDesigners_Editors: { type: String, required: true },
  ratingForCRM: { type: String, required: true },
  reherts: { type: String },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const feedbackModel =
  mongoose.models.feedbackForm ||
  mongoose.model("feedbackForm", feedbackSchema);

module.exports = feedbackModel;
