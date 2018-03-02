/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	var largo;
	var ancho;
	var perimetro;
	var alambre = 3;
	var alambrado;

	largo = parseInt(document.getElementById('Largo').value);
	ancho = parseInt(document.getElementById('Ancho').value);

	perimetro = 2 * (largo + ancho);

	alambrado = perimetro * alambre;

	alert("Se necesitan " + alambrado + " metros de alambre")

}
function Circulo () 
{
	var radio;
	var alambre = 3;
	var perimetro;
	var alambrado;
	var pi = 3.1415;

	radio = parseInt(document.getElementById('Radio').value);

	perimetro = 2 * pi  * radio;

	alambrado = perimetro * alambre;

	alert("Se necesitan " + alambrado + " metros de alambre");

}
function Materiales () 
{
	var largo;
	var ancho;
	var cemento;
	var cal;

	largo = parseInt(document.getElementById('Largo').value);
	ancho = parseInt(document.getElementById('Ancho').value);

	cemento = largo + ancho;
	cal = ((largo + ancho) * 3) / 2;

	alert("Se necesitan " + cemento + " bolsas de cemento y " + cal + " bolsas de cal");


}