const express = require("express");
const bodyParser = require("body-parser");

const dotenv = require("dotenv");

dotenv.config();

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization')

    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE')

    next();
})


app.post('/api/endpoint', (req, res) => {
    // console.log(req.body);
    res.send('Data received');
});

// APIs endpoint
app.use("/qrcodes", require("./routes/generate_qr"));
app.use("/qrcodes", require("./routes/qr_list"));

// Route not found
app.use((req, res, next) => {
    // console.log("QR -> URL not Found || Requested URL -  " + req.url);
    return res.status(404).send("404 not found");
});

const port = process.env.PORT || 5000;

// listen
app.listen(port, () => {
    // console.log("QR -> Server is listining on port " + port);
});