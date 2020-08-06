const Vehiculo = require("./Vehiculo");
const formatear = require("../utils/utils");

module.exports = class Moto extends Vehiculo {
  constructor(marca, modelo, cilindrada, precio) {
    super(marca, modelo, precio);
    this.cilindrada = cilindrada;
  }
  toString() {
    return `Marca: ${this.marca} // Modelo: ${this.modelo} // Cilindrada: ${
      this.cilindrada
    } // Precio: $${formatear(this.precio)}`;
  }
};