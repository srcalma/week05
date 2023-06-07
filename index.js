const express = require("express");
const path = require("path")
const usersRouters = require("./routers/users")

const app = express();

const SERVER_PORT = process.env.PORT || 8080;

// call this function after the http server starts listening for requests
function onHttpStart() {
  console.log("Express http server listening on: " + SERVER_PORT);
}

app.use(express.static("./views"));
app.use(express.static("./views/html"))
app.use(usersRouters)

//Application Middleware
app.use((req, res, next) => {
    console.log("Middleware - 1" + req.url)
    next()
})

app.use("/College", (req, res, next) => {
    console.log("College Middleware - 1" + req.url)
    next()
})

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/college/name", (req, res) => {
    res.send("Seneca College");
  });

app.get("/student", (req, res) => {
    res.send("Student");
  });

app.get("/home.html", function (req, res) {
    res.sendFile(path.join(__dirname, "/views/home.html"));
});

app.listen(SERVER_PORT, onHttpStart);