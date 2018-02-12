//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var ancho;
	var largo;
	var perimetro;
	var alambre;
	var alambrado;
	
	ancho = parseInt(document.getElementById('ancho').value);
	largo = parseInt(document.getElementById('largo').value);

	alambre = 6;
	perimetro = ancho * largo;
	alambrado = perimetro * alambre;

	alert("La cantidad de alambre necesario para colocar el alambrado es: " + alambrado);
	
}

