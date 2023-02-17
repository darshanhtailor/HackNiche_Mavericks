const mongoose = require("mongoose")
const { Schema } = mongoose;

const JobsSchema = new Schema({
    role: String,
    company: String,
    location: String,
    salary: String,
    link: String,
});

module.exports = mongoose.model("jobs", JobsSchema);