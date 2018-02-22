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

var connection=mongoose.connect("mongodb://localhost:27017/dbsaturdaytest",()=> {
    console.log('connected to MongoDB database');
});

app.post('/student',(req,res)=>{

    var student=new Student({
        sname: req.body.sname,
        address: req.body.address,
        phone: req.body.phone,
        subject: req.body.subject,
        marks: req.body.marks
    });

    student.save({}).then((docs)=>{
       res.send(docs);
       console.log(docs);
    }).catch((err)=>{
        console.log("Error in insert student",err);
    });
});

app.post('/student',(req,res)=>{

    var student=new Student({
        sname: req.body.sname,
        address: req.body.address,
        phone: req.body.phone,
        subject: req.body.subject,
        marks: req.body.marks
    });

    student.save({}).then((docs)=>{
        res.send(docs);
        console.log(docs);
    }).catch((err)=>{
        console.log("Error in insert student",err);
    });
});

app.get("/student",(req,res)=>{

    Student.find().populate('subject').exec(function (err,data) {
        if(err)throw err;
            console.log(JSON.stringify(data));
            res.send(data)
    });
});

app.post('/subject',(req,res)=>{

    var subject=new Subject({
        subname: req.body.name,
    });

    subject.save({}).then((docs)=>{
        res.send(docs);
        console.log(docs);
    }).catch((err)=>{
        console.log("Error in insert subject",err);
    });
});

// app.post('/marks',(req,res)=>{
//
//     var marks=new Marks({
//         marks: req.body.marks,
//         subid: req.body.subid,
//         sid: req.body.sid
//     });
//
//     marks.save({}).then((docs)=>{
//         res.send(docs);
//         console.log(docs);
//     }).catch((err)=>{
//         console.log("Error in insert Marks table",err);
//     });
// });

// app.get('/marks',(req,res)=>{
//
//     Marks.find({})
//         .populate('subid sid').then((docs)=>{
//         res.send(docs);
//         console.log(docs);
//     }).catch((err)=>{
//         console.log("Error in insert Marks table",err);
//     });
// });


app.listen(3002,()=>{
   console.log("Connected to the 3002");
});



