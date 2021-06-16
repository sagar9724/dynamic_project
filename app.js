const express = require("express");
const pug = require("pug");
// const mongoose= require('mongoose');
const bodyparser = require("body-parser");
const path = require("path");
const { urlencoded } = require("body-parser");

const app = express();
const port = 80;
app.use(express.urlencoded({extended:true}))
app.use("./static", express.static("./static"));
app.set("view engine", "pug");

app.set("views", path.join(__dirname, "views"));


// Connecting MongoDB With APP
// mongoose.connect('mongodb://localhost/NodeJS', { useNewUrlParser: true, useUnifiedTopology: true });

// creating Schema For the Data
// const JsSchema = new mongoose.Schema({
//     name: String,
//     age:Number,
//     mobile:Number,
//     about:String,
//     check:String
//   });

//   creating Model for the Schema

// const NodeJS = mongoose.model('NodeJS', JsSchema);


app.get("/", (req, res) => {

    res.render("index.pug");
})

app.get("/contact", (req, res) => {

    res.render("contact.pug");
})

// app.post("/contact", (req, res) => {
//     const data = new NodeJS(req.body);
//     data.save().then(()=>{
//         res.send("Data Submitted successfully");
//     }).catch(()=>{
//         res.send("Data is not Saved!");
//     });
// })
app.listen(port, () => {
    console.log(`App Successfully Started on the port ${port}!`);
})