const prettyjson = require('prettyjson');
const express = require('express');
const bodyParser = require('body-parser');

const options = {
    noColor: true
};

//Create an express app and configure it with body-parser
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

//create our webhook endpoint to receive webhooks from safaricom
app.post('/hooks/mpesa', (req,res) => {
    console.log('...........Received M-Pesa webhook...............');

    console.log(prettyjson.render(req.body, options));
    console.log('......................');

    let message = {
        "responseCode": "00000000",
        "responseDesc": "success"
    };
    res.json(message);
});

const server = app.listen(5000, () => {
    let host = server.address().address;
    let port = server.address().port;
    console.log('Server listening on port ${ port }')
})
