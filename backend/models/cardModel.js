const mongoose = require('mongoose')
const cardSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Please add a text value'],
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
        phoneNumber:
        {
            type: String,
 
        },
        companyName:
        {
            type: String,
        },
        logo:
        {

        },
        background:
        {

        }
    },
    {
        timestamps: true,
    }
)

module.exports = mongoose.model('Card', cardSchema)