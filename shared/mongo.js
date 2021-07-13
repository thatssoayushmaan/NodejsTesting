const {MongoClient, connect} = require('mongodb')


const mongo = {
    db : null,
    async connect() {
        try {
            //Connecting to Mongo
            const client = await MongoClient.connect(process.env.URL,{
                useUnifiedTopology: true
            })
            //console.log("MongoDB connected")

            //Selecting a DB to access
            this.db = client.db(process.env.DBNAME)
            //console.log(`Selected DB : ${dbname}`)

        } catch (error) {
            console.log(`Error : ${error}`)
            console.log('Error connecting to MongoDB')
            
        }
    }
}


module.exports = mongo
