const Vehiculo = require("./Vehiculo");
const formatear = require("../utils/utils");

module.exports = class Auto extends Vehiculo {
  constructor(marca, modelo, puertas, precio) {
    super(marca, modelo, precio);
    this.puertas = puertas;
  }
  toString() {
    return `Marca: ${this.marca} // Modelo: ${this.modelo} // Puertas: ${
      this.puertas
    } // Precio: $${formatear(this.precio)}`;
  }
};