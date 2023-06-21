// TODO: Importar el modelo y controladores de reservas
const express = require("express");
const router = express.Router();
const reservaController = require("../controllers/reserva.controller");

// ==========================================
//         Rutas para renderizar vistas
// ==========================================

// Obtener todas las reservas
router.get("/", async (req, res) => {
  try {
    const reservas = await obtenerReserva();
    res.render("reservas", { reservas });
  } catch (error) {
    console.error(error);
    res.render("error", { error: "Error al obtener las reservas" });
  }
});

// Formulario para crear una reserva
router.get("/crear", (req, res) => {
  res.render("crear-reserva");
});

// Formulario para actualizar una reserva
router.get("/editar/:id", async (req, res) => {
  try {
    const reservaId = req.params.id;
    const reserva = await getReservaById(reservaId);
    if (!reserva) {
      res.render("error", { error: "Reserva no encontrada" });
    }
    res.render("editar-reserva", { reserva });
  } catch (error) {
    console.error(error);
    res.render("error", { error: "Error al obtener la reserva" });
  }
});

// ==========================================
//         Rutas para CRUD de reservas
// ==========================================

// Obtener todas las reservas
router.get("/api/app.js", obtenerReserva);

// Crear una reserva
router.post("/api/app.js", crearReserva);

// Actualizar una reserva
router.put("/api/:id", actualizarReserva);

// Eliminar una reserva de forma lógica
router.delete("/api/:id", borrarReserva);

module.exports = router;
