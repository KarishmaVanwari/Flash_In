require('dotenv').config({path: "/.env"})
module.exports = {
    MongoURI : process.env.MONGODB_URI
}