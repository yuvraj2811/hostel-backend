

const express = require('express');
const app = express();
require('dotenv').config();
app.use(express.json());


const userModel = require('./model/user')

app.get('/',(req,res,next)=>{
res.send('hello')
next()

})

app.post('/create', async (req,res)=>{
    let {id,name,email,password,hostel, duration,institution,course,}= req.body;

    const creatUser = await userModel.create({
        id,
        name,
        email,
        password,
        hostel,
        duration,
        institution,
        course

    })

    res.send(creatUser)
})

app.get('/getall' ,async (req,res)=>{

    const alluser =await userModel.find()
    res.send(alluser);
})

app.get('/get/:id' ,async (req,res)=>{

    const user =await userModel.findOne({id:parseInt(req.params.id)})
    res.send(user);
})

app.put('/update/:id', async (req, res) => {
  const updatedUser = await userModel.findOneAndUpdate(
    { id: parseInt(req.params.id) },  // Find user by id
    {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      hostel: req.body.hostel,
      duration: req.body.duration,
      institution: req.body.institution,
      course: req.body.course,
    },
    { new: true }
  );
  res.send(updatedUser);
});


app.delete('/delete/:id', async (req, res) => {
  const deletedUser = await userModel.findOneAndDelete({ id: parseInt(req.params.id) });
  res.send(deletedUser);
});




app.listen(process.env.PORT)