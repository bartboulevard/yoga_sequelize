const express = require("express");
const app = express();

// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content_type - application/x-www-form-urlencoded
app.use(express.urlencoded({extended: true}));

// connect to database
const Sequelize = require("sequelize")
const sequelize = new Sequelize('mysql://root:qwerty@localhost:3306/yoga_sequelize')

// testing connection
sequelize
    .authenticate()
    .then(() => {
        console.log("Connected to the database.");
    })
    .catch(err => {
        console.error("Unable to connect to database.", err);
    });

// simple route
app.get("/", (req, res) => {
    res.json({message: "Welcome to sequelize"});
});

// listen for requests
app.listen(3000, () => {
    console.log('http://localhost:3000')
});