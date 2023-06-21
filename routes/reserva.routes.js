// TODO: Importar el modelo y controladores de reservas, luego vincular rutas con controladores

const router = require("express").Router();
const reservaController = require("../controllers/reserva.controller");
const reserva = require("../models/reserva.model");

// ==========================================
//         Rutas para renderizar vistas
// ==========================================

// Obtener todas las reservas

// Formulario para crear una reserva

// Formulario para actualizar una reserva

// ==========================================
//         Rutas para CRUD de reservas
// ==========================================

// Obtener todas las reservas
router.get("../models/Reserva.js", reservaController.getAllReservas);

// Crear una reserva
router.post("../models/Reserva.js", reservaController.createReserva);

// Actualizar una reserva
router.put("../models/Reserva.js/:id", reservaController.updateReserva);

// Eliminar una reserva de forma lógica
router.delete("../models/Reserva.js/:id", reservaController.deleteReserva);

module.exports = router;
