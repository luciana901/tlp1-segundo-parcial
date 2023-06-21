// Imports
const cors = require("cors");
const express = require("express");
const path = require("path");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "public")));

// Routes
app.use("/api", require("./routes/reserva.routes"));

// Error 404: Ruta no encontrada
app.use((req, res, next) => {
  res.status(404).json({ error: "404 - Not Found" });
});

// Starting the server
const port = process.env.PORT || 3000; // Lee el puerto desde la variable de entorno o utiliza el puerto 3000 por defecto
app.listen(port, () =>
  console.log(`Servidor corriendo en http://localhost:${port}`)
);
