import express from "express"
import asyncHandler from "express-async-handler"
import Product from "../domain/models/products.model.js"

const router = express.Router()
//@desc Fetch all products 
//@route  GET /api/products
// @acess   Public 
router.get("/", asyncHandler( async (req,res) =>{
    const products = await Product.find({})
    res.json(products);
}))


//@desc Fetch single products by id 
//@route  GET /api/products
// @acess   Public 
router.get("/:id", asyncHandler( async(req,res) =>{
    const product = await Product.findById(req.params.id )
    if(product){
        res.json(product);

    }else{
        res.status(404)
        throw new Error(`Product of id ${req.params.id} not found`)
    }
}))

export default router;