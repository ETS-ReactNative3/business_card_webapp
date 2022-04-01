const express = require('express')
const dotenv = require('dotenv').config()
const { errorHandler } = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const { options } = require('./routes/cardRoutes')
const port = process.env.PORT
const cookieParser = require('cookie-parser')
const cors = require('cors')
const session = require('express-session')


connectDB()
const app = express()

app.use(express.urlencoded({ extended: true}))

app.use('/api/cards', require('./routes/cardRoutes'))
app.use('/api/users', require('./routes/userRoutes'))
app.use('./uploads', express.static('uploads'))



app.use(cors({credentials: true, origin: 'localhost:3000'}))

app.use(cookieParser())
app.use(session ({
    secret: "FILIPINO_STACK",
    cookie: {},
    resave: false,
    saveUninitialized: false
}))


app.use(express.json)

app.use(errorHandler)



app.listen(port, () => console.log(`Server started on port ${port}`))