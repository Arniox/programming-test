//Import all and set port
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

//Route to default web page
app.get('/', (req, res) => {
    res.status(200).send('<h1>Hello, This is a simple API router :)</h1>');
});

//Route for /data
app.get('/data', (req, res) => {
    //Send true status
    res.status(200).send({
        success: true,
        message: "Here is some data you requested",
        details: {
            firstname: 'Nikkolas',
            lastname: 'Diehl',
            middlename: 'James',
            age: 21,
            height: '6\'5\" (195cm)',
            weight: '97kg'
        }
    });
});

//Route for /data/abcd
app.get('/data/:abcd', (req, res) => {
    //Check if abcd is correct
    if (req.params.abcd == 'abcd')
        res.status(200).send({
            success: true,
            message: `${req.params.abcd}`
        });
    else
        res.status(500).send({
            success: false,
            message: 'unkown api endpoint'
        });
});

//Listen on port
app.listen(PORT, () => {
    console.log(`Server runing on port ${PORT}`);
});