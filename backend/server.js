const express = require('express')
const dotenv = require('dotenv').config()
const { errorHandler } = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const port = process.env.PORT

connectDB()
const app = express()

app.use(express.urlencoded({ extended: true}))

app.use('/api/cards', require('./routes/cardRoutes'))
app.use(express.json)
app.use(errorHandler)



app.listen(port, () => console.log(`Server started on port ${port}`))