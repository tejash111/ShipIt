const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    title : {type:String,required:true},
    description:String,
    status:String,
    userId:String,
    priority:String,
    createdAt:   { type: Date, default: Date.now }

});
module.exports = mongoose.model("Task",TaskSchema)