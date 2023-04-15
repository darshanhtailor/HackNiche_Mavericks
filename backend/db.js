const mongoose = require("mongoose");
const url = "";


const connectToAtlas = () => {
    mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => {
        console.log("connected..!!");
    }).catch((err) => {
        console.log("error....!!!!",err);
    })
}

module.exports = connectToAtlas
