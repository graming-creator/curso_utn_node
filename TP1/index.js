import express from "express"
import fs from "fs/promises";
import path from "path";

const app = express ()

//ruta del archivo
const __dirname = path.resolve();
const filePath = path.join(__dirname, "hola_mundo.txt");

//Ruta principal que muestra el contenido del archivo
app.get("/", async (req, res) => {
    try {
      const data = await fs.readFile(filePath);
      res.set("Content-Type", "text/plain");
      res.send(data);
    } catch (error) {
      res.status(500).send("Error al leer el archivo.");
    }
  });


app.listen(3000, () => {
    console.log("El servidor esta en escucha en el puerto http://localhost:3000");
})