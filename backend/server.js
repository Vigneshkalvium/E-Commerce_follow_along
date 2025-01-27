// import app from './app.js';
const connectDatabase = require("./db/Database")
const app = require("./app")
process.on("uncaughtException",(err)=>{
    console.log(`Error: ${err.message}`)
    console.log(`Shuting downthe server for handling uncaught exception`)
})

if(process.env.NODE_ENV !== "PRODUCTON"){
    require("dotenv").config({
        path: "backend/config/.env"
    })
}
connectDatabase();
const server = app.listen(process.env.PORT,()=>{
    console.log(
        `Server is running on http://localhost:${process.env.PORT}`
    )
})

process.on("unhandledRejection",(err)=>{
    console.log(`unhandled Rejection: ${err.message}`)
    console.log(`hutting down the server due to unhandled rejection`)

    server.close(()=>{
        process.exit(1)
    })
})