/*Debemos mostrar dos números Random  del 1 al 10 
y una de las cuatro operaciones básicas (suma, resta,
 división o multiplicación) para realizar entre estos
 dos números, estas operaciones también serán Random.
 En el cuadro de texto resultado el jugador debe ingresar
 el resultado de la operación y presionar el botón Aceptar.
se debe informar si el resultado es el correcto o no.
*/
var respuesta;
function comenzar()
{
	var numeroUno;
	var numeroDos;
	var operaciones;

	numeroUno = Math.floor(Math.random() * 10) + 1;
	numeroDos = Math.floor(Math.random() * 10) + 1;
	operaciones = Math.floor(Math.random() * 4) + 1;

	document.getElementById('PrimerNumero').value = numeroUno;
	document.getElementById('SegundoNumero').value = numeroDos;

	switch(operaciones)
	{
		case 1:
			document.getElementById('Operador').value = "+";
			respuesta = numeroUno + numeroDos;
			break;
		case 2:
			document.getElementById('Operador').value = "-";
			respuesta = numeroUno - numeroDos;
			break;
		case 3:
			document.getElementById('Operador').value = "/";
			respuesta = numeroUno / numeroDos;
			break;
		case 4:
			document.getElementById('Operador').value = "*";
			respuesta = numeroUno * numeroDos;
			break;
	}
	

}//FIN DE LA FUNCIÓN
function Responder()
{
	var numeroIngresado;

	numeroIngresado = parseInt(document.getElementById('Respuesta').value);

	if (numeroIngresado == respuesta) 
	{
		alert("El resultado es correcto");
	}
	else
	{
		alert("El resultado es incorrecto");
	}

}//FIN DE LA FUNCIÓN
