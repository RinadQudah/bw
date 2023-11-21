//mongodb+srv://rinadqudah1:rreennaadd@cluster0.avcappk.mongodb.net/
const express = require('express')//frame work
require('dotenv').config()//templete
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workout')
const userRoutes=require('./routes/user')
const cors=require('cors')
const app =express()
app.use(cors())
//routes
app.use(express.json())//للتاكد انو الداتا من الuser جاي على شكل ملف جيسون

app.use('/api/workouts',workoutRoutes)//path name
app.use('/api/user',userRoutes)
app.get('/getuser',async(req,res)=>{//بس اسينك واويت بيزبط هون
    const myData=await user.find()
    res.json(myData)})
const connectDB= async()=>{
    try {
      await mongoose.connect(process.env.MONGO_URL)//اتصال مع -->database
      app.listen(process.env.PORT, () => {
        console.log('connected to moongoDB and listening')
       })
    } catch (error) {
      console.log(error.message)
    }
    }
    connectDB()

