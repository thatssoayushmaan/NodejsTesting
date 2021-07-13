const {MongoClient, connect} = require('mongodb')

const url = "mongodb+srv://ayushmaanverma:prashar123@task2.zxa7q.mongodb.net/Task2Database?retryWrites=true&w=majority"
const dbname = "Students"


const mongo = {
    db : null,
    async connect() {
        try {
            //Connecting to Mongo
            const client = await MongoClient.connect(url,{
                useUnifiedTopology: true
            })
            //console.log("MongoDB connected")

            //Selecting a DB to access
            this.db = client.db(dbname)
            //console.log(`Selected DB : ${dbname}`)

        } catch (error) {
            console.log(`Error : ${error}`)
            console.log('Error connecting to MongoDB')
        }
    }
}


module.exports = mongo