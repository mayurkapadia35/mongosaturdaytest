const mongoose =require("mongoose");
const express=require("express");
const cors=require("cors");
const bodyparser=require("body-parser");
var app=express();

var {Student}=require('../models/tblstudent');
var {Subject}=require('../models/tblsubject');
var {Marks}=require('../models/tblmarks');

app.use(cors());
app.use(bodyparser.urlencoded({
    extended: true
}));

app.use(bodyparser.json());
var connection=mongoose.createConnection("mongodb://localhost:27017/dbsaturdaytest");

app.post('/student',(req,res)=>{

    var student=new Student({
        sname: req.body.name,
        address: req.body.address,
        phone: req.body.phone
    });

    student.save().then((docs)=>{
       res.send(docs);
       console.log(docs);
    }).catch((err)=>{
        console.log("Error in insert student",err);
    });
});


app.listen(3002,()=>{
   console.log("Connected to the 3002");
});



