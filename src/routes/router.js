let express=require("express");

let ctrl=require("../controllers/register_loginctrl.js");
let cat_ctrl=require("../controllers/Categoryctrl.js");
let pctrl=require("../controllers/productcontroller.js");

let router=express.Router();

router.get("/",ctrl.HomeLoginPage);
router.post("/api/register",ctrl.RegisterApi);
router.post("/api/login",ctrl.LoginPage);

router.post("/api/categories/add",cat_ctrl.createCategory);
router.get("/api/categories/view",cat_ctrl.getAllCategory);
router.get("/api/categories/:id",cat_ctrl.getCategoryById);
router.put("/api/category/update/:id",cat_ctrl.UpdateCategory);
router.delete("/api/category/delete/:id",cat_ctrl.DeleteCategory);

router.post("/api/products/add",pctrl.addProduct);
router.get("/api/products/view",pctrl.viewProducts);
router.get("/api/products/:id",pctrl.getProdById);
router.put("/api/products/update/:id",pctrl.updateProdById);
router.delete("/api/products/delete/:id",pctrl.deleteProdById);
router.get("/api/products/search?name=",pctrl.searchProdByName);

module.exports=router;