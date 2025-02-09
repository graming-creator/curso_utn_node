import Product from "../models/productModel.js"

const getAllProducts = (req, res) => {
    const products = Product.getAllProducts()
    res.json(products)
}

export { getAllProducts }