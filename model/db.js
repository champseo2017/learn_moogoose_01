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


// Writing a schema
/*
declare a variable to hold the schema
for example, user or project and adding Schema to the end 
of it.
var userSchema = new mongoose.Schema({ });

Only allowing unique entries
For example, if we want to ensure that there is only ever one user per e-mail address, 
we can specify that the email field should be unique.

email: {type: String, unique:true}

MongoDB will check to see if 
the e-mail value already exists in another document. If it finds it, MongoDB (not 
Mongoose) will return an E11000 error.

*/
