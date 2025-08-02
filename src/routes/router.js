let express = require("express");
let ctrl = require("../controllers/register_loginctrl.js");
let cat_ctrl = require("../controllers/Categoryctrl.js");
let { VerifyToken } = require("../middleware/authmiddleware.js");  // destructuring import
let authorizeRoles  = require("../middleware/authorized.js");
let router = express.Router();

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

module.exports = router;
