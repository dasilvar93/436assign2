

let initList = ["cookies and cream", "vanilla"];

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = express.Router();

const mongoDB = 'mongodb://127.0.0.1:27017/message'

mongoose.connect(mongoDB, { useNewURLParser: true});

const db = mongoose.connection;


db.once('open', function() {
    console.log("Database connection established");
});

const Schema = mongoose.Schema;

const basicSchema = new Schema({
    text: String
});

const User = mongoose.model('User', basicSchema)

const app = express();
// app.use(cors);

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', "POST, GET, OPTIONS, DELETE");
    res.header('Access-Control-Allow-Headers', "Content-Type");
    next();
});

app.use('/message', routes);

routes.route('/').get(function(req,res) {
    User.find(function(err, messages) {
        if (err) {
            console.log(err);
        } else {
            res.json(messages)
        }
    })
});

routes.route('/add').post(function(req, res){
    console.log(req.body);
    let message = new basicSchema(req.body);

    message.save()
        .then(message => {
            res.status(200).json({'message': 'message added successfully'});
        })
        .catch(err => {
            res.status(400).send('add failed');
        })
})


routes.route('/').delete(function(req, res){
    User.deleteMany({}, function(err){
        if (err) {
            console.log(err);
        }
    })
})

// app.use(express.json());
//
// app.get('/', function(req, res){
//     res.json(initList);
// });
//
// app.post('/', function(req, res){
//     console.log(req.body);
//     initList.push(req.body.text);
//     res.json(initList);
// });
//
// app.delete('/', function(req, res){
//     initList = [];
//     res.send("List Cleared")
// })

app.listen(4000);