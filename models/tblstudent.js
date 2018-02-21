const mongoose=require("mongoose");
const autoincrement=require("mongoose-auto-increment");
autoincrement.initialize(mongoose.connection);
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
studentSchema.plugin(autoincrement.plugin,{model: 'Student',field: 'sid',startAt: 100,incrementBy:1});
module.exports={Student};
