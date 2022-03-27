const mongoose = require('mongoose')
const cardSchema = mongoose.Schema(
    {
/*        user:{
            type: mongoose.Schema.Types.ObjectId,
            required: [true],
            ref: 'User'
        },
    */
        name: {
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