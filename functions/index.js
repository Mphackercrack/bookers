const functions = require('firebase-functions');
const express = require("express");

const app = express();
app.set("view engine","pug");
app.get('/mahesh',(req,res)=>{
    res.render("index");
})
exports.app = functions.https.onRequest(app);
