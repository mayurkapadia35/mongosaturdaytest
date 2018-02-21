const mongoose=require("mongoose");
const autoincrement=require("mongoose-auto-increment");
mongoose.plugin(autoincrement.mongoosePlugin,{field: 'sid',step: 1});

var studentSchema=new mongoose.Schema({
    sid:{
        type: Number,

    },
    sname: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    }
});
var Student=mongoose.model('tblstudent',studentSchema);
module.exports={Student};
