const mongoose = require("mongoose")

const EmpSchema = new mongoose.Schema({
    name: {
        type: String,
        required:true
    },
    age: {
        type: Number,
        required:true
    },
    phoneno: {
        type: Number,
        required:true
    }
})

const Emp = mongoose.model("Emp", EmpSchema)
module.exports=Emp