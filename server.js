const express = require('express');
const mongoose = require('mongoose');
const RegisterUser = require('./model');
const jwt = require('jsonwebtoken');
const middleware = require('./middleware');
const cors = require('cors');
const app = express();

mongoose.connect("mongodb+srv://dharmatejadussa:dharma@cluster0.s1afdar.mongodb.net/")
.then(()=>console.log("DB Connected"))

app.use(express.json());

app.use(cors({origin:"*"}))

app.post('/register' , async (req, res)=>{
    try{
        const {username,email,password,confirmpassword} = req.body;
        let exist = await RegisterUser.findOne({email:email})
        if(exist){
            return res.send('User Already Exist')
        }
        if(password !== confirmpassword){
            return res.send("Password Mismatch")
        }
        
        let newUser = new RegisterUser({
            username,
            email,
            password,
            confirmpassword
        })

        await newUser.save();
        res.send("User Registered Successfully")

    }
    catch(error){
        console.log(error);
        return res.send("Internal Server Error")
    }
})

app.post('/login', async (req,res)=>{
    try{
        const {email,password} = req.body;
        let exist = await RegisterUser.findOne({email});
        if(!exist){
            return res.status(400).send("User Not Found");
        }
        if(exist.password !== password){
            return res.status(400).send("Invalid Password");
            
        }
        if(exist.email !== email){
            return res.status(400).send("Invalid Email Address");
        }

        let payload ={
            user:{
                id : exist.id
            }
        }

        jwt.sign(payload,'jwtSecret',{expiresIn:3600000},
            (error,token)=>{
                if(error) throw error;
                return res.json({token})
            }
        )

    }
    catch(error){
        console.log(error);
        return res.status(500).send("Server Error");
    }
})

app.get('/home',middleware, async (req,res)=>{
    try{
        let exist = await RegisterUser.findById(req.user.id);
        if(!exist){
            // return res.status(400).send("User Not Found");
        }
        res.json(exist);
    }
    catch(error){
        console.log(error);
        return res.status(500).send("Server Error")
    }
})

app.listen(5000,()=>{
    console.log("Server Running....")
})