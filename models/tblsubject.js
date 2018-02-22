const mongoose=require("mongoose");
const autoincrement=require("mongoose-auto-increment");

autoincrement.initialize(mongoose.connection);
// mongoose.plugin(autoincrement.mongoosePlugin,{field: 'subid',step: 1});

var subjectSchema=new mongoose.Schema({
    subid:{
        type: Number,
    },
    subname: {
        type: String,
        required: true
    }
});

var Subject=mongoose.model('tblsubject',subjectSchema);
subjectSchema.plugin(autoincrement.plugin,{model: 'Subject',field: 'subid',startAt: 1,incrementBy:1});
module.exports={Subject};
