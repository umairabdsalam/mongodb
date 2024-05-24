const { MongoClient } = require('mongodb')
let uri = 'mongodb+srv://yoshi:aliyah1@cluster0.hwjjpkt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
let dbConnection

module.exports = {
    connectToDb: (cb) => {
        MongoClient.connect(uri)
        .then((client) => {
            dbConnection = client.db()
            return cb()
        })
        .catch(err => {
            console.log(err)
            return cb(err)
        })
    },
    getDb: () => dbConnection
}