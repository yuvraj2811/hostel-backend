
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB);

const userSchema = mongoose.Schema({
  name:String,
  email:String,
  password:String
})

module.exports = mongoose.model("user",userSchema)