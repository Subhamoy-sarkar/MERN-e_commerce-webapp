const express=require('express');
const colors=require('colors');
const dotenv=require('dotenv')

//Configure env : 
dotenv.config()
// dotenv.config({{path:''}})  --> if dotevn file not in root directory


//rest object
const app=express()

//rest api
app.get('/',(req,res)=>{
    res.send("<h1>Welcome to MERN E-commerce app</h1>")
})

//PORT
const PORT=process.env.PORT || 8080  // for node servers

//run listen
app.listen(PORT,()=>{
    console.log(`server running on ${process.env.DEV_MODE} mode on port : ${PORT}`.bgBlue.white)
})