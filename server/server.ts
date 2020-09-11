const express = require('express')
const app = express()
const port = process.env.PORT || 3000;

app.get('/', (req, res, next):void => {
    res.send('Started running, True!');
})

app.listen(port, () => { console.log('listening to the port' + port) });