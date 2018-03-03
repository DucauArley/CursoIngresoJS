/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.
*/
var eleccionMaquina;

function comenzar()
{
	eleccionMaquina = Math.floor(Math.random() * 3) + 1;
	console.log(eleccionMaquina);

}//FIN DE LA FUNCIÓN
function piedra()
{
	var piedra = 1;

	if (piedra == eleccionMaquina)
	{
		alert("Usted empató");
	}
	else
	{
		if (eleccionMaquina == 2) 
		{
			alert("Usted perdio");
		}
		else
		{
			alert("Usted gano");
		}
	}


}//FIN DE LA FUNCIÓN
function papel()
{
	var papel = 2;

	if (papel == eleccionMaquina)
	{
		alert("Usted empató");
	}
	else
	{
		if (eleccionMaquina == 3) 
		{
			alert("Usted perdio");
		}
		else
		{
			alert("Usted gano");
		}
	}




}//FIN DE LA FUNCIÓN
function tijera()
{
	var tijera = 3;

	if (tijera == eleccionMaquina)
	{
		alert("Usted empató");
	}
	else
	{
		if (eleccionMaquina == 1) 
		{
			alert("Usted perdio");
		}
		else
		{
			alert("Usted gano");
		}
	}






}//FIN DE LA FUNCIÓN