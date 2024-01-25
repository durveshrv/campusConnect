const express=require('express');
const productController = require('../controller/productController');
const upload = require('../multer');
const router=express.Router();


router.post('/addProduct',upload.single('file'),productController.addProduct)

router.get('/getProduct',productController.getProducts)

router.get('/getCategory',productController.getCategory)

router.get('/viewProduct/:id',productController.viewProduct)

module.exports=router