let express=require("express");
let ctrl=require("../controllers/controller.js");
let router=express.Router();

router.get("/",ctrl.HomeLoginPage);
router.post("/api/register",ctrl.RegisterApi);
router.post("/api/login",ctrl.LoginPage);
module.exports=router;