const mongoose = require("mongoose");

const FeedbackSchema = new mongoose.Schema(
  {
    reviews: {
      type: String,
      required: true,
      trim: true,
    },
    ratings: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Feedback", FeedbackSchema);
