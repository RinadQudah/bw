const express=require('express')//import
const Workout =require('../model/workoutmodel')
const mongoose = require('mongoose')
const {getWorkouts,getWorkout,createWorkout,deleteWorkout,updateWorkout}=require('../controllers/workoutController')
const router = express.Router()//لتوحيد الباث
//Get all workout
router.get('/',getWorkouts)
//Get a single workout
router.get('/:id',getWorkout)
//Post a new workout//(رح يبعت -->data)
router.post('/',createWorkout)
//Delet a workout
router.delete('/:id',deleteWorkout)
//Update workout
router.patch('/:id',updateWorkout)
module.exports=router