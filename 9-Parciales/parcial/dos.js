function Mostrar()
{
  var importe;
  var iva;
  var importeConIva;

  importe = parseInt(prompt("Ingrese el importe de un producto"));

  iva = 0.21;
  importeConIva = (importe * iva) + importe;

  document.getElementById('importeFinal').value = importeConIva;
}
