const mongoose = require('mongoose')
const cardSchema = mongoose.Schema(
    {
        user:{
            type: mongoose.Schema.Types.ObjectId,
            required: [true],
            ref: 'User'
        },
        name: {
            type: String,
            required: true
          },
        title:
        {
            type: String,
        },
        email:
        {
            type: String,
            required: true
        },
        email2:
        {
            type: String,
        },
        address:
        {
            type: String,
        },
        phoneNumber:
        {
            type: String,
            required: true
        },
        phoneNumber2:
        {
            type: String,
        },
        faxNumber:
        {
            type: String,
        },
        companyName:
        {
            type: String,
        },
        cardImage:
        {
            type: String
        },
        cardImagePath:{
            type: String
        },
    },
    {
        timestamps: true,
    }
)

module.exports = mongoose.model('Card', cardSchema)