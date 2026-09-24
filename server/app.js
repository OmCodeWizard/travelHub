const express=require("express");
const mongoose =require("mongoose");

const cors = require("cors");

const app = express();

// middleware
app.use(cors());
app.use(express.json());

app.get("/api/health", (req,res)=>{
    res.status(200).json({
        success:true,
        message:"TravelHub API is  running"
    });
});

module.exports = app;