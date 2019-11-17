const express = require("express");
const hbs = require("hbs");
const app = express();
const port = process.env.PORT | 3000;
const fs = require("fs");

app.set("view engine", "hbs");

app.get("/", (req, res) => {
    fs.readFile("encrypto.txt", "utf-8", (error, data) => {
        if (error) console.log(error);
        res.render("index.hbs", {
            file: data
        });
    });
});

app.listen(port, () => {console.log("Good")});