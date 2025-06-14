

const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors');
app.use(express.json());
app.use(cors());

const userModel = require('./model/user')
const complaintModel = require('./model/com')

app.get('/',(req,res,next)=>{
res.send('hello')


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

app.post('/createcom', async (req,res)=>{
    let {id,hostelname,roomnumber,complaint}= req.body;

    const creatComplain = await complaintModel.create({
      
      id,
      hostelname,roomnumber,complaint

    })
    res.send(creatComplain);
  })

  app.get('/allcom',async (req,res)=>{
    const allcoms = await complaintModel.find()
    res.send(allcoms)
  })

 app.get('/getcom/:id',async (req,res)=>{
    const comsById = await complaintModel.find({id:parseInt(req.params.id)})
    res.send(comsById)
  })


app.listen(process.env.PORT)