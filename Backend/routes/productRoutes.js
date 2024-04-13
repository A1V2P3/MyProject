const productController= require('../controllers/productController.js')
 const categoryController=require('../controllers/categoryController.js')

const router = require('express').Router()


router.post('/addProduct',productController.addProduct)

router.get('/getAllProducts',productController.getAllProducts)



//  Catgory 
router.post('/addCategory',categoryController.addCategory)    

router.get('/getAllCategory',categoryController.getAllCategory)

router.get('/:id',categoryController.getOneCategory)

router.put('/:id',categoryController.updateCategory)

router.delete('/:id',categoryController.deleteCategory)


//get Product Category

router.get('/getData',categoryController.getResult)


//Produt Router

router.get('/:id',productController.getOneProduct)

router.put('/:id',productController.updateProduct)

router.delete('/:id',productController.deleteProduct)


module.exports=router;











// addCategory,
// getAllCategory,
// getOneCategory,
//  updateCategory,
// deleteCategory