const mongoose=require("mongoose");
const autoincrement=require("mongodb-autoincrement");
mongoose.plugin(autoincrement.mongoosePlugin,{field: 'subid',step: 1});


var subjectSchema=new mongoose.Schema({
    subid:{
        type: Number,

    },
    subjectname: {
        type: String,
        required: true
    }
});

var Subject=mongoose.model('tblsubject',subjectSchema);
module.exports={Subject};
