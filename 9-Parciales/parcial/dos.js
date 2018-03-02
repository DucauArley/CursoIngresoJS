// 1) se ingresa un porcentaje de descuento y el importe mostrar cuanto se debe pagar
function Mostrar()
{
  	var importe;
  	var descuento;
    var importeConDescuento;

  	importe = parseInt(prompt("Ingrese el importe de un producto"));

  	descuento = parseInt(prompt("Ingrese el descuento"));

	importeConDescuento = importe -(importe * (descuento * 0.01 ));

 	document.getElementById('importeFinal').value = importeConDescuento;
}
