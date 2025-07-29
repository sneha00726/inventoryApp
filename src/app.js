let express=require("express");
let bodyparser=require("body-parser");

let path=require("path");
let con=require("../db.js");
let app=express();
let router=require(".//routes/router.js");

app.use(express.static("public"));
app.use(bodyparser.urlencoded({extended:true}));
app.use(express.json());

app.set("view engine","ejs");
app.use("/",router);
module.exports=app;