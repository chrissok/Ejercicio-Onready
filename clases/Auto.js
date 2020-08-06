const Vehiculo = require("./Vehiculo");
const formatear = require("../utils/formatPrice");

module.exports = class Auto extends Vehiculo {
    constructor(marca,modelo,puertas,precio){
        super(marca,modelo,precio)
        this.puertas = puertas;
    }
    display() {
        return `Marca: ${this.marca} // Modelo: ${this.modelo} // Puertas: ${this.puertas} // Precio: $${formatear(this.precio)}`
    }
}