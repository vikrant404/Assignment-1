var mongoose = require("mongoose");

//Schema
var projectSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  priceRange: {
    type: String,
    required: true,
  },
  bsp: {
    type: String,
    required: true,
  },
  emi: {
    type: String,
    required: true,
  },
});

var Project = (module.exports = mongoose.model("Project", projectSchema));

// Get Projects
module.exports.getProjects = function (callback, limit) {
  Project.find(callback).limit(limit);
};

// Add project

module.exports.addProject = function (project, callback) {
  Project.create(project, callback);
};
