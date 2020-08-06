const formatear = require("../utils/utils");

module.exports = class ListaDeVehiculos {

    vehiculos = [];
    vehiculosOrdenados = [];

        agregar(vehiculo){
            this.vehiculos.push(vehiculo);
        }

    ordenar(){
        this.vehiculosOrdenados = this.vehiculos;
        this.vehiculosOrdenados.sort((a, b) => b.precio - a.precio);
        return this.vehiculosOrdenados
    }

    masCaro(){
       return this.vehiculos.reduce((prev, current) => {
            return (prev.precio > current.precio) ? prev : current
        })
    }

    masBarato(){
        return this.vehiculos.reduce(function(prev, current) {
            return (prev.precio < current.precio) ? prev : current
        })}

    contieneLetraY(){
            return this.vehiculos.find(vehiculo => vehiculo.modelo.includes('Y'));
    }

    toString() {
            
        const masCaro = this.masCaro();

        const masBarato = this.masBarato();

        const contieneLetraY = this.contieneLetraY();

        let stringVehiculos;

        let stringVehiculosOrdenados;

        this.ordenar();

          return this.vehiculos.forEach( vehiculo => {
           return vehiculo.toString() + "\n";
        }) + 
          "=============================" + "\n" +
          `Vehículo más caro: ${masCaro.marca} ${masCaro.modelo}` + "\n" +
          `Vehículo más barato: ${masBarato.marca} ${masBarato.modelo}`+"\n" +
          `Vehículo que contiene en el modelo la letra ‘Y’: ${contieneLetraY.marca} ${contieneLetraY.modelo} $${formatear(contieneLetraY.precio)}` + "\n" +
          "=============================" +
          this.vehiculosOrdenados.forEach( vehiculo => {
            return vehiculo.marca + " " + vehiculo.modelo + "\n";
          });

}

}