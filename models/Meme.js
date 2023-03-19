const mongoose = require('mongoose')


const MemeSchema = new mongoose.Schema({
    memeUrl: {
        type: String,
        required: true,    
    },
    memeDesc: {
        type: String,
        required: true,  
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    }    
})

module.exports = mongoose.model('Meme', MemeSchema)