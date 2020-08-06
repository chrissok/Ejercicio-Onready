module.exports = function formatear(precio) {
  return precio
    .toFixed(2) // 2 decimales
    .replace(".", ",") // remplasa decimal . por ,
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
};
