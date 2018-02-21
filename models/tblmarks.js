const mongoose=require("mongoose");
const autoincrement=require("mongodb-autoincrement");
mongoose.plugin(autoincrement.mongoosePlugin,{field: 'mid',step: 1});

var marksSchema=new mongoose.Schema({
    mid:{
        type: Number,

    },
    marks: {
        type: Number,
        required: true
    },
    subid: {
        type: Number,
        required: true
    },
    sid: {
        type: Number,
        required: true
    }
});

var Marks=mongoose.model('tblmarks',marksSchema);
module.exports={Marks};
