const mongoose = require('mongoose')
const cardSchema = mongoose.Schema(
    {
        name:
        {
            type: String,
        },
        title:
        {
            type: String,
        },
        email:
        {
            type: String,
        },
        address:
        {
            type: String,

        },
        companyName:
        {
            type: String,

        },
        phoneNumber:
        {
            type: String,
        },
        image:
        {

        },
    },
    {
        timestamps: true,
    }
)

module.exports = mongoose.model('Card', cardSchema)