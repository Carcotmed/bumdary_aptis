const express = require("express");
const cors = require("cors");

const app = express();

const {logErrors, errorHandler} = require("./utils/middleware/errorHandlers");

const corsOptions = { origin: "http://example.com" };

const { config } = require("./config/index");

const aptisApi = require("./routes/aptis.js");


app.use(cors(corsOptions));
var bodyParser = require("body-parser");
app.use(bodyParser.json());

aptisApi(app);

app.use(logErrors);
app.use(errorHandler);

app.listen(config.port, function () {
    console.log(`Listening http://localhost:${config.port}`);
});
