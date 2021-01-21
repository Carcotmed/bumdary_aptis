const express = require("express");

const app = express();

const { config } = require("./config/index")

app.get("/", function(req, res) {

    res.send("hello world");

});

const notesApi = require ("./routes/notes.js")
const aptisApi = require ("./routes/aptis.js")

var bodyParser = require('body-parser');
app.use(bodyParser.json());

notesApi(app);
aptisApi(app);

app.listen(config.port, function() {
    console.log(`Listening http://localhost:${config.port}`)
});