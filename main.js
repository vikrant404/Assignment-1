var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

app.use(bodyParser.json());

Project = require("./models/project");
Developer = require("./models/developer");
//connect to mongoose

mongoose.connect("mongodb://localhost/assignment");
var db = mongoose.connection;

//setup route
app.get("/", function (req, res) {
  res.send("Please use /api/developer or /api/project");
});

// get projects
app.get("/api/project", function (req, res) {
  Project.getProjects(function (err, project) {
    if (err) {
      throw err;
    } else {
      res.json(project);
    }
  });
});

//add project
app.post("/api/projects", function (req, res) {
  var project = req.body;
  Project.addProject(project, function (err, project) {
    if (err) {
      throw err;
    }
    res.json(project);
  });
});

//get developers

app.get("/api/developers", function (req, res) {
  Developer.getDevelopers(function (err, developer) {
    if (err) {
      throw err;
    } else {
      res.json(developer);
    }
  });
});

//get a developer

app.get("/api/developer/:_id", function (req, res) {
  Developer.getDevelopersById(req.params._id, function (err, developer) {
    if (err) {
      throw err;
    } else {
      res.json(developer);
    }
  });
});

app.listen(3000);
console.log("Running on port 3000");
