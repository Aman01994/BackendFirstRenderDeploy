const express = require('express');
// const { adminRoute } = require('./Route/admin/adminRoute');
const { usercust } = require('./Route/usercust/usercust');
const { restaurant } = require('./Route/restaurant/restaurant');
const { deliveryg } = require('./Route/deliveryg/deliverg');
const { custcare } = require('./Route/deliveryg/custcare/custcare');
const app = express();
require('dotenv').config();



app.use('/user',usercust)
app.use('/restaurant',restaurant)
app.use('/deliveryg',deliveryg)
app.use('/custcare',custcare)

Port = process.env.Port || 5000




app.listen(Port,()=>{
    console.log(`Server is running on port ${Port}`);
})
