function Mostrar()
{
	var numero;
	var contadorDivisores = 0;

	numero = parseInt(prompt("Ingrese un numero"));

	for (var i = 0; i <= numero; i++) 
	{
		if (numero % i == 0) 
		{
			contadorDivisores ++;
		}

		if (contadorDivisores > 2) 
		{
			break;
		}
	}

	if (contadorDivisores == 2) 
	{
		alert("El numero es primo");
	}
	else
	{
		alert("El numero no es primo");
	}




}//FIN DE LA FUNCIÓN