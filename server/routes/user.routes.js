import express from 'express'
import productCtrl from '../controller/user.controller.js' 
 const router = express.Router()
 router.route('/api/products').get(productCtrl.getAllProductsOrSearch)
 router.post('/api/products', productCtrl.createProduct);
 router.get('/api/products/:productId', productCtrl.getProductByID);
router.put('/api/products/:productId', productCtrl.updateProductByID);
router.delete('/api/products', productCtrl.deleteAllProducts);
router.delete('/api/products/:productId', productCtrl.deleteProductByID);
 export default router
