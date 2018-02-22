// const mongoose=require("mongoose");
// const autoincrement=require("mongoose-auto-increment");
// autoincrement.initialize(mongoose.connection);
//
// var marksSchema=new mongoose.Schema({
//     mid:{
//         type: Number
//     },
//     marks: {
//         type: Number,
//         required: true
//     },
//     subid: {
//         type: mongoose.Schema.Types.ObjectId,ref:'tblsubject'
//     },
//     sid: {
//         type: mongoose.Schema.Types.ObjectId,ref:'tblstudent',
//     }
// });
//
// var Marks=mongoose.model('tblmarks',marksSchema);
// marksSchema.plugin(autoincrement.plugin,{model: 'Marks',field: 'mid',startAt: 1,incrementBy:1});
// module.exports={Marks};
