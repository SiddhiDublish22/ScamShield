const express = require("express");
require("dotenv").config();

const connectDB = require("./config/db");

const app = express();


// Middleware
app.use(express.json());


// Database connection
connectDB();


// Routes
app.use("/api/auth", require("./routes/authRoutes"));

app.use("/api/user", require("./routes/userRoutes"));

const scamRoutes=require("./routes/scamRoutes");

app.use(
"/api/scam",
scamRoutes
);


// Server start
app.listen(5000, () => {

    console.log("Server running on port 5000");

});