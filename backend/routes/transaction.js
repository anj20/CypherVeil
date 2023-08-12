const { addFeedback, getFeedbacks } = require("../controllers/feedback");
const router = require("express").Router();

router.post("/add-feedback", addFeedback).get("/get-feedbacks", getFeedbacks);

module.exports = router;
