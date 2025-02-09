import express from "express";
import { productsRouter } from "./routes/productsRoutes.js";
import { connectDB } from "./config/connectDB.js";
import cors from "cors"

process.loadEnvFile();

const PORT = process.env.PORT;
const app = express();
app.use(express.json())
app.use(cors())

app.use("/api/products", productsRouter)



app.listen(PORT, () => {
    console.log("El servidor esta en escucha en el puerto http://localhost:3000");
    connectDB();
})