'use strict';
const express = require ("express");

const PORT =8989;
const HOST = "127.0.0.1";
const OS = require ("os");
const ENV = "DEV";
const app = express();


app.get("/", (req,res) =>{
    res.statusCode= 200;
    const msg ="Hello";
    res.send(msg);
});

app.get("/test", (req,res) =>{
    res.statusCode= 200;
    const msg ="Hello from /testmode";
    res.send(msg);
});

app.listen(PORT,HOST);
console.log(`Running on http://${HOST}:${PORT}`);