const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const dotenv = require('dotenv').config()
const { errorHandler } = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const nodemailer = require("nodemailer")
const { options } = require('./routes/cardRoutes')
const port = process.env.PORT

connectDB()
const app = express()
app.use(cors({credentials: true, origin: 'localhost:3000'}))
app.use(express.urlencoded({ extended: true}))

app.use('/api/cards', require('./routes/cardRoutes'))
app.use('/api/users', require('./routes/userRoutes'))
app.use('/uploads', express.static('uploads'))
app.use('/contact', require('./routes/mailRoute'))

//app.use(cors({credentials: true, origin: 'localhost:3000'}))
app.use(cookieParser())
app.use(express.json)

app.use(errorHandler)



app.listen(port, () => console.log(`Server started on port ${port}`))