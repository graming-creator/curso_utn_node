import express from "express"
import { productosRouter } from "./routes/home.js"


const app = express()

app.use("/api/home", productosRouter)

app.listen(3000, () => {
    console.log("El servidor esta en escucha en el puerto http://localhost:3000")
}) 