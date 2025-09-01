const express = require('express');
const router = express.Router();
const {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
} = require('../controllers/productController');
const { protect } = require('../middleware/authMiddleware');

// Apply the 'protect' middleware to all product routes
router.use(protect);

router.route('/').post(createProduct).get(getAllProducts);
router.route('/:id').get(getProductById).put(updateProduct).delete(deleteProduct);

module.exports = router;