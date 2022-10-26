const express = require("express");
const app = express();
const mongoose=require("mongoose");
const cors = require('cors')
require("dotenv").config();

const utentiRouter = require("./routers/utenti_routers");
mongoose.connect("mongodb+srv://stefanomasnada:Stefanomasnada02@cluster0.gkgtz.mongodb.net/jac?retryWrites=true&w=majority",function(error){
console.log(error)
if(error)
    throw error;
app.use(express.urlencoded({extended: true}));
app.use(cors());

app.use("/", function(req, res,  next){
    console.log(req.method, req.url, req.query, req.body);
    next();
});

app.use("/utenti", utentiRouter);

app.get("/", function (req, res){
    res.send("hello world");
});

app.listen(process.env.PORT, process.env.HOST, function(){
    console.log("Server avviato sulla porta " + process.env.PORT);
});
});