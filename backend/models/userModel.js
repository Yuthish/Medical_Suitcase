var mongoose = require("mongoose");

var userSchema = mongoose.Schema({
    email_addr: String,
    password: String,
    ID: String,
    details: {
        name: String,
        dob: String,
        gender: String,
        doc: {
            ID: String,
            qualification: String,
            workplace_list: String
        },
        profile_pic: String,
        blood_group: String,
        phone_num: String,
    },

    public_key: String,
    private_key: String,
    mymedicalrecords: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Record'
    }]

});


var User = mongoose.model("User", userSchema)

module.exports = User;