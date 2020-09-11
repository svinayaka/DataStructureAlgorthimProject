//const express = require('express')
import * as express from 'express';
import * as bodyParser from 'body-parser';

const port = process.env.PORT || 3000;
const app = express();
app.use(bodyParser.json());

app.get('/', (req, res, next):void => {
    res.send('Started running, True!');
})

app.listen(port, () => { console.log('listening to the port' + port) });