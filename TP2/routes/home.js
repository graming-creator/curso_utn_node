import { Router } from "express"
import { getAllProducts } from "../controllers/productsControllers.js"

const productosRouter = Router()

productosRouter.get("/", getAllProducts)

export { productosRouter }