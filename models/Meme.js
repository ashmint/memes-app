const mongoose = require('mongoose')


const MemeSchema = new mongoose.Schema({
    memeUrl: {
        type: String,
        required: true,    
    },
    memeDesc: {
        type: String,
        required: true,  
    }    
})

module.exports = mongoose.model('Meme', MemeSchema)