//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var importe;
	var importeFinal;
	var iva;

	importe =parseInt(prompt("Ingrese el importe", ""));
	iva = 0.21;

	importeFinal = importe + (importe * iva);

	document.getElementById('importe').value = importeFinal;
}
