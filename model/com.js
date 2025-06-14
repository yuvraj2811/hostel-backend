
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB);

const complaintSchema = mongoose.Schema({
    id:Number,
  hostelname:String,
  roomnumber:Number,
complaint:String
})

module.exports = mongoose.model("complaint",complaintSchema)