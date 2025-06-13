
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB);

const userSchema = mongoose.Schema({
  name:String,
  email:String,
  password:String,
  hostel:String,
  duration:String,
  institution:String,
  course:String,
  id:Number
})

module.exports = mongoose.model("user",userSchema)