// import express from 'express'
const express = require("express")
const app = express();

if(process.env.NODE_ENV !== "PRODUCTON"){
    require("dotenv").config({
        path: "backend/config/.env"
    })
}

module.exports=app;