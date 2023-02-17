const mongoose = require("mongoose")
const { Schema } = mongoose;

const TeamsSchema = new Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    team_name:{
        type: String,
        required: true
    },
    leader_name:{
        type: String,
        required: true
    },
    leader_mob:{
        type: String,
        required: true
    },
    leader_email:{
        type: String,
        required: true
    },
    leader_gender:{
        type: String,
        required: true
    },
    leader_github:{
        type: String,
        required: true
    },
    leader_linkedin:{
        type: String,
        required: true
    },
    leader_resume:{
        type: String,
        required: true,
    },
    member2_name:{
        type: String,
        required: true
    },
    member2_mob:{
        type: String,
        required: true
    },
    member2_email:{
        type: String,
        required: true
    },
    member2_gender:{
        type: String,
        required: true
    },
    member2_github:{
        type: String,
        required: true
    },
    member2_linkedin:{
        type: String,
        required: true
    },
    member2_resume:{
        type: String,
        required: true,
    },
    member3_name:{
        type: String,
    },
    member3_mob:{
        type: String,
    },
    member3_email:{
        type: String,
    },
    member3_gender:{
        type: String,
    },
    member3_github:{
        type: String,
    },
    member3_linkedin:{
        type: String,
    },
    member3_resume:{
        type: String,
    },
    member4_name:{
        type: String,
    },
    member4_mob:{
        type: String,
    },
    member4_email:{
        type: String,
    },
    member4_gender:{
        type: String,
    },
    member4_github:{
        type: String,
    },
    member4_linkedin:{
        type: String,
    },
    member4_resume:{
        type: String,
    }
    
});

module.exports = mongoose.model("teams", TeamsSchema);