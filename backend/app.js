// import express from 'express'
const express = require("express")
const app = express();
const ErrorHandler = require("./middleware/error")
const cookieParser = require("cookie-parser")
const bodyParser = require("body-parser")
const cors = require("cors")

app.use(express.json());
app.use(cookieParser());
const path = require('path');

app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
}))

app.use(bodyParser.urlencoded({extended: true, limit: "50mb"}))

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use('/products', express.static(path.join(__dirname, 'products')));

const user = require("./controller/user");
const product = require("./controller/product");

app.use("/api/v2/product",product);
app.use("/api/v2/user",user);
app.use(ErrorHandler);

module.exports=app;

