const express = require('express')
const mongo = require('./shared/mongo')


const app = express()
mongo.connect()

const port = 3001
app.listen(port, () => {
    console.log(`Server up and running at ${port}`)
})