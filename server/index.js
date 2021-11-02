require("dotenv").config() //we have instante our environment variable  
const express = require('express') //we intiate an express install
const app = express(); // make all express methods available for use
const volleyball = require('volleyball') // help communicate all api request in cli
const bodyParser = express.json(); // help send datas from client to server
const cors = require('cors')//allows sharing of resources
const {randomBytes} = require('crypto')
const port = process.env.PORT || 4000;

app.use(volleyball);
app.use(bodyParser);
app.use(express.urlencoded({ extended: true }));
app.use(cors());


const users = [
    {
      "name": "oye",
      "password": "1234",
      "age": 20,
      "location": 'Nigeria'
    },
    {
        "name": "Idris",
        "password": "1234",
        "age": 22,
        "location": 'London'
    },
]


const post = {}
//our first get request

//get, post, put, delete, patch

//req, request frontend object username, password req.body.username, and req.body.password
//res is used to send response back to the req
//next is a middleware, Act as a validator fo your api
app.get("/", (req, res, next) => {
    res.send(post);
});



app.post("/newpost", (req, res, next) =>{
    const id = randomBytes(4).toString('hex')
    const title = req.body.title
    const post = req.body.post

    post[id] = {
        title,
        post
    }
    res.status(201).send(post[id])
})




app.listen(port, () => console.log(`Listening on port ${port}!`));