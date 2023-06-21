// TODO: Crear modelo de datos de Reserva
const { DataTypes } = require("sequelize");
const sequelize = require("../database/connection");

const Reserva = sequelize.define(
  "Reserva",
  {
    nombre_y_apellido: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    habitacion: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    fecha: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    tableName: "reservas",
    timestamps: true,
  }
);

module.exports = Reserva;
