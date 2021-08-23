const express = require('express');
const path = require('path');
const app = express();
const port = 8000;
const hbs = require('hbs');

const staticPath = path.join(__dirname, "../views");
const partialsPath = path.join(__dirname, "../views/partials")

app.set("view engine", "hbs");
app.use(express.static(staticPath))

app.get("/", (req, res) => {
    res.render("index", {
        channelName : "vinod",
    });
});

app.listen(port, () => {
    console.log(`listening to port ${port}`);
});