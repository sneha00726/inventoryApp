let express=require("express");

let ctrl=require("../controllers/register_loginctrl.js");
let cat_ctrl=require("../controllers/Categoryctrl.js");
let pctrl=require("../controllers/productcontroller.js");
let sctrl=require("../controllers/supplierctrl.js");
let purctrl=require("../controllers/purchasectrl.js");

let router = express.Router();

let { VerifyToken } = require("../middleware/authmiddleware.js");  // destructuring import
let authorizeRoles  = require("../middleware/authorized.js");

// user api (public)
router.get("/", ctrl.HomeLoginPage);
router.post("/api/register", ctrl.RegisterApi);
router.post("/api/login", ctrl.LoginPage);

// category api (protected)
router.post("/api/categories/add", VerifyToken,authorizeRoles("admin"), cat_ctrl.createCategory);
router.get("/api/categories/view", VerifyToken,authorizeRoles("admin", "user"), cat_ctrl.getAllCategory);
router.get("/api/categories/:id", VerifyToken,authorizeRoles("admin"), cat_ctrl.getCategoryById);
router.put("/api/category/update/:id", VerifyToken,authorizeRoles("admin"), cat_ctrl.UpdateCategory);
router.delete("/api/category/delete/:id", VerifyToken,authorizeRoles("admin"), cat_ctrl.DeleteCategory);

router.post("/api/products/add", VerifyToken,authorizeRoles("admin"), pctrl.addProduct);
router.get("/api/products/view",VerifyToken,authorizeRoles("admin", "user"), pctrl.viewProducts);
router.get("/api/products/:id",VerifyToken,authorizeRoles("admin", "user"), pctrl.getProdById);
router.put("/api/products/update/:id",VerifyToken,authorizeRoles("admin"), pctrl.updateProdById);
router.delete("/api/products/delete/:id",VerifyToken,authorizeRoles("admin"), pctrl.deleteProdById);
router.get("/api/products/search",VerifyToken,authorizeRoles("admin", "user"), pctrl.searchProdByName);

router.post("/api/suppliers/add",VerifyToken,authorizeRoles("admin"), sctrl.addSupplier);
router.get("/api/suppliers/view",VerifyToken,authorizeRoles("admin"), sctrl.viewSuppliers);
router.get("/api/suppliers/:id",VerifyToken,authorizeRoles("admin"), sctrl.getSupplierById);
router.put("/api/suppliers/update/:id",VerifyToken,authorizeRoles("admin"), sctrl.updateSupplierById);
router.delete("/api/suppliers/delete/:id",VerifyToken,authorizeRoles("admin"), sctrl.deleteSupplierById);

router.post("/api/purchases/add",purctrl.addPurchase);
router.get("/api/purchases/view",purctrl.viewPurchases);
router.get("/api/purchases/:id",purctrl.getPurchaseById);
router.put("/api/purchases/update/:id",purctrl.updatePurchaseById);
router.delete("/api/purchases/delete/:id",purctrl.deletePurchaseById);

module.exports = router;

