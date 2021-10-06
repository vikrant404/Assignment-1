var mongoose = require("mongoose");

//Schema
var devSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

var Developer = (module.exports = mongoose.model("Developer", devSchema));

// Get developers
module.exports.getDevelopers = function (callback, limit) {
  Developer.find(callback).limit(limit);
};

//Get developer

module.exports.getDevelopersById = function (id, callback, limit) {
  Developer.findById(id, callback);
};
