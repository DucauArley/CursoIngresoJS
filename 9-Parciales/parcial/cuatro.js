//Ingresar 2 numeros si son iguales los concatenamos si el primero es mayor que el segundo los multiplicamos y 
//si es menor los restamos


function Mostrar()
{
	var numeroUno;
	var numeroDos;
	var resultado;

	numeroUno = parseInt(prompt("Ingrese el numero uno"));
	numeroDos = parseInt(prompt("Ingrese el numero dos"));

	if (numeroUno == numeroDos) 
	{
		resultado = (numeroUno + "" + numeroDos);
	}
	else
	{
		if (numeroUno > numeroDos) 
		{
			resultado = numeroUno * numeroDos;

			if (resultado % 2 == 0 && numeroDos !=0) 
			{
				resultado = resultado + "<br> " + "Es par";
			}
		}
		else
		{
			resultado = numeroUno - numeroDos;
		}
	}

	document.write("El resultado es: " + resultado);
}
