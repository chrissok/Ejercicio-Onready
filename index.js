const Moto = require("./clases/Moto");
const Auto = require("./clases/Auto");
const ListaDeVehiculos = require("./clases/ListaDeVehiculos");

let listaDeVehiculos = new ListaDeVehiculos();

const auto1 = new Auto("Peugeot","206",4,200000.00);
const moto1 = new Moto("Honda","Titan","125c",60000.00);
const auto2 = new Auto("Peugeot","208",5,250000.00);
const moto2 = new Moto("Yamaha","YBR","160c",80500.50);


listaDeVehiculos.agregar(auto1);
listaDeVehiculos.agregar(moto1);
listaDeVehiculos.agregar(auto2);
listaDeVehiculos.agregar(moto2);

console.log(listaDeVehiculos.toString());