const express = require('express');
const app = express();
const db = require('../../db');
const getData = require('./routes/getData');
const addData = require('./routes/addData');
const deleteData = require('./routes/deleteData');
const getDataByIoTID = require('./routes/getDataByIoTID');

app.use(express.json());

app.get('/iotdata', getData);
app.get('/iotdata/:id', getDataByIoTID);
app.post('/iotdata', addData);
app.delete('/iotdata/:id', deleteData);

db.init().then(() => {
    app.listen(5000, () => console.log('Listening on port 5000'));
}).catch((err) => {
    console.error(err);
    process.exit(1);
});

const gracefulShutdown = () => {
    db.teardown()
        .catch(() => {})
        .then(() => process.exit());
};

process.on('SIGINT', gracefulShutdown);
process.on('SIGTERM', gracefulShutdown);
process.on('SIGUSR2', gracefulShutdown); // Sent by nodemon
