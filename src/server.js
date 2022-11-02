const express = require("express");
const mysql = require('mysql');
const cors = require('cors');

const app = express();


const moment = require('moment');


app.use(express.json());
app.use(cors());


const db =mysql.createConnection({
    user:"root",
    host: "mysql",
    password: "password",
    database: "iot",


});

db.query('CREATE TABLE IF NOT EXISTS data (iot_id varchar(255), consumption double(9,2), time datetime) DEFAULT CHARSET utf8mb4',
    err => {
        if (err) return (err);

        console.log(`Connected to mysql db at host ${HOST}`);
        acc();
    },
);

db.query('CREATE TABLE IF NOT EXISTS users (username varchar(255), password varchar(255)) DEFAULT CHARSET utf8mb4',
    err => {
        if (err) return (err);

        console.log(`Connected to mysql db at host ${HOST}`);
        acc();
    },
);


app.post("/register", (req, res) => {
    const username =req.body.username;
    const password = req.body.password;

    db.query("INSERT INTO users (username, password) VALUES (?,?)",
        [username, password],
        (err, result) => {
            console.log(err);
            console.log(result);
    });
});

app.post("/login", (req, res) => {
    const username =req.body.username;
    const password = req.body.password;


    db.query("SELECT * FROM users WHERE username = ? AND password =?",
        [username, password],
        (err, result) => {
            if(err){
                res.send({err: err});
            }

            if(result.length > 0){
                res.send(result);
            }else{
                res.send({ message: "Wrong username or password"});
            }
            
    });
});

app.post("/diagramm", (req, res) =>{
    const id = req.body.id;

    console.log(id);

    db.query("SELECT * FROM [] WHERE [] = ?",
        [id],
        (err, result) => {
            if(err){
                res.send({err: err});
            }

            if(result.length > 0){
                res.send(result);
            }else{
                res.send({ message: "No results"});
            }
            
    });
});

app.post("/iotdata", (req, res) =>{

    var mysqlTimestamp = moment(Date.now()).format('YYYY-MM-DD HH:mm:ss');

    db.query("INSERT INTO data (iot_id, consumption, time) VALUES (?,?,?)",
        [req.body.iot_id, req.body.consumption, mysqlTimestamp],
        (err, result) => {
            console.log(err)
            res.send(result);
    });

})

app.listen(3000, () =>{
    console.log("running server");
});