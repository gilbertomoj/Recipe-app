import express from "express";
import {router}  from "./routes";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.use("/",router);


app.listen(8080, ()=>{
    console.log("Server running")
})