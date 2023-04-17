const express = require("express");                               //installs express app
const app = express();                                            //makes an instance of express app
const mongoose = require("mongoose");                             //Database
const passport = require("passport");                             //Auth
const session = require("express-session");                       //cookies
const MongoStore = require("connect-mongo")(session);             //cookies
const methodOverride = require("method-override");                //PUT/DELETE http request middleware for form
const flash = require("express-flash");                           //flashes the message
const logger = require("morgan");                                 //debugging
const connectDB = require("./config/database");                   //DB connect
const mainRoutes = require("./routes/main");                      //MVC



//Use .env file in config folder
require("dotenv").config({ path: "./config/.env" });

// Passport config
require("./config/passport")(passport);



//Using EJS for views
app.set("view engine", "ejs");

//Static Folder
app.use(express.static("public"));

//Body Parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Logging
app.use(logger("dev"));

//Use forms for put / delete
app.use(methodOverride("_method"));

// Setup Sessions - stored in MongoDB
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
  })
);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

//Use flash messages for errors, info, ect...
app.use(flash());

//Setup Routes For Which The Server Is Listening
app.use("/", mainRoutes);


//Server Running
connectDB().then(() => {
  app.listen(process.env.PORT, () => {
    console.log("Server is running, you better catch it!");
  });
  
})
