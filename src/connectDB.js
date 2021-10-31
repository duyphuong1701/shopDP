const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://dp1701:701000@dbnode.6fg4n.mongodb.net/dbNode", {
  // useNewUrlParser: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  // we're connected!
  console.log("Connected to MongoDB database");
});

module.exports = db;
