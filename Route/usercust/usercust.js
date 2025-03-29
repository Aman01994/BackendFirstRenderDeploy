const express = require('express');
const usercust = express.Router();


usercust.get('/restlist',(req,res)=>{
    // manogogb data fetch 

    res.status(200).json({
        message : 'Restaurant List'
    })
})


usercust.get('/hisorder',(req,res)=>{
    // manogogb data fetch 

    res.status(200).json({
        message : 'history order List'
    })
})

usercust.get('/orderdetails',(req,res)=>{
    // manogogb data fetch 

    res.status(200).json({
        message : 'Order Details'
    })
})

usercust.get('/profiledetails',(req,res)=>{
    // manogogb data fetch 

    res.status(200).json({
        message : 'Profile Details'
    })
})

module.exports = { usercust }