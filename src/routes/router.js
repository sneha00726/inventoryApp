let express=require("express");

let ctrl=require("../controllers/register_loginctrl.js");
let cat_ctrl=require("../controllers/Categoryctrl.js");
let pctrl=require("../controllers/productcontroller.js");
let sctrl=require("../controllers/supplierctrl.js");
let cust_ctrl=require("../controllers/customerctrl.js");
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
//product
router.post("/api/products/add",pctrl.addProduct);
router.get("/api/products/view",pctrl.viewProducts);
router.get("/api/products/:id",pctrl.getProdById);
router.put("/api/products/update/:id",pctrl.updateProdById);
router.delete("/api/products/delete/:id",pctrl.deleteProdById);
router.get("/api/products/search",pctrl.searchProdByName);
//supplier
router.post("/api/suppliers/add",sctrl.addSupplier);
router.get("/api/suppliers/view",sctrl.viewSuppliers);
router.get("/api/suppliers/:id",sctrl.getSupplierById);
router.put("/api/suppliers/update/:id",sctrl.updateSupplierById);
router.delete("/api/suppliers/delete/:id",sctrl.deleteSupplierById);
//customer
router.post("/api/customer/add",cust_ctrl.AddCustomer);
router.get("/api/customer/view",cust_ctrl.viewAllCustomer);
router.get("/api/customer/:id",cust_ctrl.customerGetById);
router.put("/api/customer/updateBy/:id",cust_ctrl.UpdateCustomer);
router.delete("/api/customer/delete/:id",cust_ctrl.CustomerDelete);
module.exports = router;

