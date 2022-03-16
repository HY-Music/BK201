const express = require("express");
const mongoose= require("mongoose");
const router = express.Router();
const jwt = require("jsonwebtoken");
const Admin = require("../models/admin");
const {find_a_user_by_id_and_update} = require ("../models/user")
const config = require("../config/database");
const { admin, pharmacy, feedback , user,artist} = require("../database-mongodb/schemas");
const passport = require("passport");

router.get('/usersList', async (req, res)=>{
  try{
    var artistsList = await artist.find({})
   res.send(artistsList)}
   catch(err){
     res.send(err)
   }
})

router.post("/ban/:id" , async (req,res)=>{
try{
  const artistToBan = req.params.id 
  const artistInfo  = await artist.findOne({_id : artistToBan })
  artistInfo.banned = true;
  const action = await artist.findOneAndUpdate({_id : artistToBan},artistInfo,{new: true})
  var artistsList = await artist.find({})
  res.send(artistsList)
}catch(error){
  res.send(error)
}

})

router.post("/activate/:id" , async (req,res)=>{
  try{
    const artistToBan = req.params.id 
    const artistInfo  = await artist.findOne({_id : artistToBan })
    artistInfo.banned = false;
    const action = await artist.findOneAndUpdate({_id : artistToBan},artistInfo,{new: true})
    var artistsList = await artist.find({})
    res.send(artistsList)
  }catch(error){
    res.send(error)
  }
  
  })

module.exports = router;
