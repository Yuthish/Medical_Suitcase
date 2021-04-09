const mongoose = require("mongoose");

const recordsSchema = mongoose.Schema({
    doc: {
        name: String,
        place: String,
        ID: String
    },
    date: String,
    report: String,
    keywords: [String],
    medicine_list: [JSON],
    


})


var Record = mongoose.model("Record", recordsSchema)

module.exports = Record;