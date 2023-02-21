const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
       username:{type:String, required:true},
       email:{type:String,required:true},
       subject:{type:String},
       message:{type:String}
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('User', userSchema);