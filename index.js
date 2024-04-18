require('dotenv').config()
const express = require('express')
const cors = require('cors')
const router = require('./Routes/router')
require('./DB/connection')


const testServer = express()
testServer.use(cors())
testServer.use(express.json())
testServer.use(router)

const PORT = 3000 || process.env.PORT

testServer.listen(PORT, () => {
    console.log(`testServer Started at PORT: ${PORT}`);
})

// http://localhost:3000/
testServer.get("/", (req, res) => {
    res.status(200).send(`<h1 style="color:red">testServer Started and awaiting for client request!!!</h1>`)
})