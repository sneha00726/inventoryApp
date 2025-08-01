let express=require("express");
let ctrl=require("../controllers/register_loginctrl.js");
let cat_ctrl=require("../controllers/Categoryctrl.js")
let router=express.Router();

router.get("/",ctrl.HomeLoginPage);
router.post("/api/register",ctrl.RegisterApi);
router.post("/api/login",ctrl.LoginPage);

router.post("/api/categories/add",cat_ctrl.createCategory);
router.get("/api/categories/view",cat_ctrl.getAllCategory);
router.get("/api/categories/:id",cat_ctrl.getCategoryById);

router.put("/api/category/update/:id",cat_ctrl.UpdateCategory);
router.delete("/api/category/delete/:id",cat_ctrl.DeleteCategory);
module.exports=router;