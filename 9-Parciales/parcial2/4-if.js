//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var numeroUno;
	var numeroDos;
	var resultado;

	numeroUno = parseInt(prompt("Ingrese un numero"));
	numeroDos = parseInt(prompt("Ingrese un numero"));

	while(isNaN(numeroUno))
	{
		numeroUno = parseInt(prompt("Ingrese el numero nuevamente"));
	}

	while(isNaN(numeroDos))
	{
		numeroDos = parseInt(prompt("Ingrese el numero nuevamente"));
	}

	if (numeroUno == numeroDos) 
	{
		resultado = numeroUno * numeroDos;
	}
	else
	{
		if (numeroUno > numeroDos) 
		{
			resultado = numeroUno - numeroDos;
		}
		else
		{
			resultado = numeroUno + numeroDos;
		}
	}

	document.write("El resultado es: " + resultado);
	
}

