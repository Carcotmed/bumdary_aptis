const mongoose = require("mongoose");

const { config } = require("../config");

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const DB_NAME = encodeURIComponent(config.dbName);

const MONGO_URI = `mongodb+srv://${USER}:${PASSWORD}@${config.dbHost}/${DB_NAME}?retryWrites=true&w=majority`;

mongoose.set("useFindAndModify", false);
mongoose.set("useUnifiedTopology", true);

mongoose.connect(MONGO_URI, { useNewUrlParser: true }, (err) => {
    if (!err) {
        console.log("Successfully Established Connection with MongoDB");
    } else {
        console.log(
            "Failed to Establish Connection with MongoDB with Error: " + err
        );
    }
});

module.exports = mongoose;
