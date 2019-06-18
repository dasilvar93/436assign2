

let initList = ["cookies and cream", "vanilla"];

const express = require('express');
const cors = require('cors');

const app = express();
// app.use(cors);

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', "POST, GET, OPTIONS, DELETE");
    res.header('Access-Control-Allow-Headers', "Content-Type");
    next();
});

app.use(express.json());

app.get('/', function(req, res){
    res.json(initList);
});

app.post('/', function(req, res){
    console.log(req.body);
    initList.push(req.body.text);
    res.json(initList);
});

app.delete('/', function(req, res){
    initList = [];
    res.send("List Cleared")
})

app.listen(4000);