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


// Data types allowed in schemas
/* 

- Eight types (SchemaTypes)
1. String
2. Number
3. Date
4. Boolean
5. Buffer
6. ObjectId
7. Mixed
8. Array

- String
This SchemaType stores a string value, UTF-8 encoded.

- Number
This SchemaType stores a number value (Mongoose does not  natively support long and double datatypes) // Mongoose can be extended using plugins to support these other  types

- Date
This SchemaType holds a date and time object, typically returned from MongoDB  as an ISODate object ( ISODate("2013-04-03T12:56:26.009Z") )

Buffer
This SchemaType is primarily used for storing binary 
(Example)
- images stored in MongoDB.

ObjectId
- for example, a foreign key for referencing
- Rather than just specifying the type of ObjectId you 
need to specify the fully qualified version Schema.Types.ObjectId. For example:
projectSchema.add({
 owner: mongoose.Schema.Types.ObjectId
});

Mixed
A mixed data object can contain any type of data. It can be declared either by 
setting an empty object, or by using the fully qualified Schema.Types.Mixed. 
These following two commands will do the same thing:

vardjSchema= new mongoose.Schema({
 mixedUp: {} 
});

vardjSchema= new mongoose.Schema({
 mixedUp: Schema.Types.Mixed
});

mixed type cannot be automatically detected by Mongoose, so it doesn't know that it 
needs to save them.

Tracking changes to Mixed type

dj.mixedUp = { valueone: "a new value" };
dj.markModified('mixedUp');
dj.save();

Array
var userSchema = new mongoose.Schema({
 name: String,
 emailAddresses: [String]
});

Second, the array datatype can be used to store a collection of subdocuments using 
nested schemas.

var userSchema = new mongoose.Schema({
 name: String,
 emailAddresses: [emailSchema]
});

Warning – array defined as mixed type
. If you declare an empty array it will be treated as mixed type, 
meaning that Mongoose will not be able to automatically detect any changes made to 
the data.
var emailSchema = new mongoose.Schema({
 addresses: []
});
var emailSchema = new mongoose.Schema({
 addresses: Array
});



*/
