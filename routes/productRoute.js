const express = require("express");
const {
  createProduct, 
  getaProduct,
  getAllProduct,
  updateProduct,
  deleteProduct,
 
  // deleteProduct,
} = require("../controller/productConroller");
const router = express.Router();
const {isAdmin, authMiddleware} = require("../middlewares/authMiddleware")

router.post("/",authMiddleware , isAdmin, createProduct);
router.get("/:id", getaProduct);
router.put("/:id",authMiddleware ,isAdmin,  updateProduct);
router.get("/", getAllProduct);
router.delete("/:id",authMiddleware ,isAdmin,  deleteProduct);

module.exports = router;
