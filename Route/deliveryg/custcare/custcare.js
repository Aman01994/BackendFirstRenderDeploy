const express = require('express');
const custcare = express.Router();



custcare.get('/custdetails',(req,res)=>{
    // get details from mongodb 
    res.status(200).json({
        message : 'Customer Details'
    })  
})


custcare.get('/deliverygdetails',(req,res)=>{
    // get details from mongodb 
    res.status(200).json({
        message : 'Delivery Details'
    })  
})

custcare.get('/historyorders',(req,res)=>{
    // get details from mongodb 
    res.status(200).json({
        message : 'History Order Details'
    })  
})

custcare.get('/custcaredash',(req,res)=>{
    // get details from mongodb 
    res.status(200).json({
        message : 'Customer Dash'
    })  
})


module.exports = { custcare };