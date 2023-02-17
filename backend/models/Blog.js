const mongoose = require("mongoose")
const { Schema } = mongoose;

const BlogsSchema = new Schema({
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    name: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true,
    },
    created_at: {
        type: Date,
        default: Date.now
    },
});

module.exports = mongoose.model("blogs", BlogsSchema);