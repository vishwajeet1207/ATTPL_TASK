const express=require("express")
const bodyparser=require("body-parser")
const userroutes= require("./api/v1/routes/user.routes")
const app=express();
const port =process.env.port || 3000
app.use(bodyparser.json());
// app.use(express.json());

app.use(userroutes)

app.listen(port,()=>{console.log("Server is runing");})