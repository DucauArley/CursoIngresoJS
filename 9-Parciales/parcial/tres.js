function Mostrar()
{
	var largo;
	var ancho;
	var perimetro;
	var alambre;

	largo = parseInt(document.getElementById('alrgo').value);
	ancho = parseInt(document.getElementById('ancho').value);
	perimetro = largo * ancho;
	alambre = perimetro * 3;

	alert("La cantidad de alambre necesaria es: " + alambre);


}
