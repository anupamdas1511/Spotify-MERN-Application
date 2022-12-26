const express = require('express')
const app = express()
require('dotenv').config()

const PORT = process.env.PORT || 5000

app.get('/', (req, res)=>{
    res.send('APP IS RUNNING...')
})

//Listening to port 5000
app.listen(PORT, ()=>{
    console.log(`Listening to port ${PORT}`)
})

//Connecting to mongoDB database