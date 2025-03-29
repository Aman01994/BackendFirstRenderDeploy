const express = require('express');
const restaurant = express.Router();


restaurant.get('/activeorder',(req,res)=>{
    // mongodb data fetch 
    res.status(200).json({
        message: "All Active Orders",
        data: []
    })
})

restaurant.get('/profiledetails',(req,res)=>{
    // mongodb data fetch 
    res.status(200).json({
        message: "Profile Details",
        data: []
    })
})

restaurant.get('/historyorders',(req,res)=>{
    // mongodb data fetch 
    res.status(200).json({
        message: "History Orders",
        data: []
    })
})

module.exports = { restaurant }