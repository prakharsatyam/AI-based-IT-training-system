const mongoose = require("mongoose");
const connectMongo = async () => {
    try {
        const conn = await mongoose.connect('mongodb://localhost:27017');
        console.log(`The app has successfully connected to MongoDB.
Now the app is active..........`)
    } catch (err) {
        console.log(err);
    }
}

module.exports = connectMongo;