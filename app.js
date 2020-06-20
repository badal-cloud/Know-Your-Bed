const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");




const app = express();

app.use(express.static("public")); // we r setting public folder as a static resource
app.set("view engine", "ejs"); //setting our view engine as ejs
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);


app.get("/", function (req, res) {
    res.render("homie");
  });








  app.listen(3000, function () {
    console.log("Server started on port 3000");
  });