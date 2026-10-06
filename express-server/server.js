require('dotenv').config()
const express = require("express")
const cors = require('cors')
const app = express()
const authRoute = require('./router/auth.router')
const contactRoute = require('./router/contact-router')
const connectDb = require('./utlis/db')
const errorMiddleware = require('./middlewares/error-middleware')

// let's tackle cors
const REQ_URL = 'http://localhost:3000'
// const REQ_URL = 'https://022b-223-29-201-53.ngrok-free.app'
const corsOption = {
    origin: REQ_URL,
    methods: 'GET, POST, PUT, DELETE, PATCH, HEAD',
    credentials: true,
}
app.use(cors(corsOption))


app.use(express.json())


app.use("/api/auth", authRoute)
app.use("/api/form", contactRoute)

app.use(errorMiddleware)

const PORT = 8888
connectDb().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`)
    })
})