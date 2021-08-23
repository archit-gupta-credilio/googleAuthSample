const express = require('express');
const app = express();

app.get("/", (req, res) => {
    res.send("Hello from the other Side");
});

app.get("/about", (req, res) => {
    res.send("Hello from the About us page");
});

app.get("/contact", (req, res) => {
    res.send("welcome to my contacts page");
});

app.get("/temp", (req, res) => {
    res.send("Welcome to this temporary page");
});

app.listen(8000, () => {
    console.log("Listening the port at 8000");
})