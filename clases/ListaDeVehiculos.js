const formatear = require("../utils/formatPrice");

module.exports = class ListaDeVehiculos {

    vehiculos = [];

        agregar(vehiculo){
            this.vehiculos.push(vehiculo);
        }

        displayVehiculos() {
            this.vehiculos.forEach( vehiculo => {
              console.log(vehiculo.display()) 
            })
            const masCaro = this.vehiculos.reduce(function(prev, current) {
                return (prev.precio > current.precio) ? prev : current
            })
            const masBarato = this.vehiculos.reduce(function(prev, current) {
                return (prev.precio < current.precio) ? prev : current
            })
            console.log("=============================");
            console.log(`Vehículo más caro: ${masCaro.marca} ${masCaro.modelo}`);
            console.log(`Vehículo más barato: ${masBarato.marca} ${masBarato.modelo}`);

            const contieneLetraY = this.vehiculos.find(vehiculo => vehiculo.modelo.includes('Y'));

            console.log(`Vehículo que contiene en el modelo la letra ‘Y’: ${contieneLetraY.marca} ${contieneLetraY.modelo} $${formatear(contieneLetraY.precio)}`)

            console.log("=============================");

            this.vehiculos.sort((a, b) => b.precio - a.precio);

            this.vehiculos.forEach( vehiculo => {
                console.log(vehiculo.marca + " " + vehiculo.modelo) 
              })
    }
}