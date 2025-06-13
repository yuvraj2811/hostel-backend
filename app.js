

const express = require('express');
const app = express();
require('dotenv').config();
app.use(express.json());


const userModel = require('./model/user')

app.get('/',(req,res)=>{
res.send('hello')
})

app.post('/create', async (req,res)=>{
    let {name,email,password}= req.body;

    const creatUser = await userModel.create({
        name,
        email,
        password
    })

    res.send(creatUser)
})

app.get('/getall' ,async (req,res)=>{

    const alluser =await userModel.find()
    res.send(alluser);
})



module.exports = app;