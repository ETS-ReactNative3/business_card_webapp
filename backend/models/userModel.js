const mongoose = require('mongoose')

const userSchema = mongoose.Schema ({
    name: {
        type: String,
        required: [true, 'Please add a name']
    },
    email:
    {
        type: String,
        required: [true, 'Please add a name'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Please add a password']
    }
},
    {
        timestamp:true
    }
)

module.export = mongoose.model('User', userSchema)