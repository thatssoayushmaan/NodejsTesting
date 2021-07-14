const express = require('express')
require('dotenv').config()
const cors = require('cors')
const mongo = require('./shared/mongo')
const studentRoute = require('./routes/student')

const app = express()


async function loadApp(){
    try {
        await mongo.connect()
        //Middelware for routes

        app.use(cors())
        app.use('/students', studentRoute)
        //Parse your request body into json format
        app.use(express.json())


        const port = process.env.PORT || 3001
        app.listen(port, () => {
        console.log(`Server up and running at ${port}`)
})
    } catch (error) {
        console.log(error)
        process.exit()
    }
}

loadApp()