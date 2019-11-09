const mongoose=require('mongoose');

const Schema= mongoose.Schema;

var studentSchema= new Schema({
    firstName:String,
    lastName:String,
    yearInSchool:String,
    uwId:String,
    gpa:Number
});


const Student=mongoose.model("Student", studentSchema);

module.exports=Student;