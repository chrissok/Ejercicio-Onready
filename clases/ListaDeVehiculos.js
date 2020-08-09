const formatear = require("../utils/utils");

module.exports = class ListaDeVehiculos {
  vehiculos = [];

  agregar(vehiculo) {
    this.vehiculos.push(vehiculo);
  }

  ordenadaMayorAmenorPrecio() {
    let vehiculosOrdenados = [...this.vehiculos];
    vehiculosOrdenados.sort((a, b) => b.precio - a.precio);
    return vehiculosOrdenados;
  }

  masCaro() {
    return this.vehiculos.reduce((prev, current) => {
      return prev.precio > current.precio ? prev : current;
    });
  }

  masBarato() {
    return this.vehiculos.reduce((prev, current) => {
      return prev.precio < current.precio ? prev : current;
    });
  }
//Asumo que el vehiculo es solo 1 porque enunciado vehiculo en singular
  contieneLetraY() {
    return this.vehiculos.find( vehiculo => vehiculo.modelo.includes("Y")); 
  }

  toString() {
    const masCaro = this.masCaro();

    const masBarato = this.masBarato();

    const contieneLetraY = this.contieneLetraY();

    let stringVehiculos = "";

    this.vehiculos.forEach( vehiculo => {
      stringVehiculos += vehiculo.toString() + "\n";
    });

    let stringVehiculosOrdenados = "";

    this.ordenadaMayorAmenorPrecio().forEach( vehiculo => {
      stringVehiculosOrdenados += "\n" + vehiculo.marca + " " + vehiculo.modelo;
    });

    return (
      stringVehiculos +
      "=============================" +
      "\n" +
      `Vehículo más caro: ${masCaro.marca} ${masCaro.modelo}` +
      "\n" +
      `Vehículo más barato: ${masBarato.marca} ${masBarato.modelo}` +
      "\n" +
      `Vehículo que contiene en el modelo la letra ‘Y’: ${
        contieneLetraY.marca
      } ${contieneLetraY.modelo} $${formatear(contieneLetraY.precio)}` +
      "\n" +
      "=============================" +
      "\n" +
      "Vehículos ordenados por precio de mayor a menor: " +
      stringVehiculosOrdenados
    );
  }
};
