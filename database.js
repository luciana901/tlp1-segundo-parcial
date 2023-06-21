const express = require("express");
const Sequelize = require("sequelize");
const database = express();

const sequelize = new Sequelize("reserva.db", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

const reservaModel = sequelize.define("reservas", {
  id: { type: Sequelize.INTEGER, primaryKey: true },
  nombre_y_apellido: Sequelize.STRING,
  habitacion: Sequelize.STRING,
  fecha: Sequelize.DATE,
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Conexión a la base de datos exitosa");
  })
  .catch((error) => {
    console.log("Error de conexión " + error);
  });

usuarioModel
  .findAll({
    attributes: ["nombre_y_apellido", "hbitacion", "fecha"],
  })
  .then((reservas) => {
    const resultados = JSON.stringify(reservas);
    console.log(resultados);
  })
  .catch((error) => {
    console.log(error);
  });
