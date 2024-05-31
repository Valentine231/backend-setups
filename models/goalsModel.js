// Initiate mongoose
const mongoose = require('mongoose');

const goalSchema =  mongoose.Schema({
     text: {
         type: String,
         required: [true,  'input text']
     },
}, {
    timestamps:true
});



module.exports = mongoose.model( 'goal',  goalSchema)