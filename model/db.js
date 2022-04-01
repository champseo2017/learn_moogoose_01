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


// Defining the Project schema
/*
Project schema.

• projectName: A string containing the name of the project.
• createdOn: The date when the document was first created and saved. This 
option is set to automatically save the current date and time..
• modifiedOn: The date and time when the document was last changed.
• createdBy: A string that will for now contain the unique ID of the user who 
created the project.
• tasks: A string to hold task information.

varprojectSchema = new mongoose.Schema({
 projectName: String,
 createdOn: Date,
 modifiedOn: { type: Date, default: Date.now },
 createdBy: String,
 tasks: String
});





*/
