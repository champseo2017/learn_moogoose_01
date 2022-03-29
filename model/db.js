const mongoose = require("mongoose");

// Build the connection string
const dbURI = "mongodb://127.0.0.1:27017/MongoosePM";

// Create the database connection
mongoose.connect(dbURI);

mongoose.connection.on("connected", () => {
  console.log("Mongoose connected to " + dbURI);
});

mongoose.connection.on("error", (err) => {
  console.log("Mongoose connection error: " + err);
});

mongoose.connection.on("disconnected", () => {
  console.log("Mongoose disconnected");
});

process.on("SIGINT", () => {
  mongoose.connection.close(() => {
    console.log("Mongoose disconnected through app termination");
    process.exit(0);
  });
});


// Where to write the schemas
/*

As your schemas sit on top of Mongoose, the only absolute is that they need to be 
defined after Mongoose is required.




*/
