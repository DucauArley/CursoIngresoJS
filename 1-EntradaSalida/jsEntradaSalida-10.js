/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function MostrarAumento()
{
	var importe;
	var resultado;
	var descuento;

	descuento = 0.25;

	importe = parseInt(document.getElementById('importe').value);

	resultado = importe - (importe * descuento);
	
	document.getElementById('resultado').value = resultado;
}
