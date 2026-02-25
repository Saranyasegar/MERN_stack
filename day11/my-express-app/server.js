const express = require("express");
const showsData = require("./shows");

const app = express();

app.get("/", (req, res) => {
    res.send("Netflix API Running ");
});

app.get("/shows", (req, res) => {
    res.json(showsData);
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});