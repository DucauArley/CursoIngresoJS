function Mostrar()
{
	var numeroUno;
	var numeroDos;
	var resultado;

	numeroUno = parseInt(prompt("Ingrese el numero uno"));
	numeroDos = parseInt(prompt("Ingrese el numero dos"));

	if (numeroUno == numeroDos) 
	{
		resultado = numeroUno * numeroDos;
		document.write("La multiplicacion es: " + resultado);
	}
	else
	{
		if (numeroUno > numeroDos) 
		{
			resultado = numeroUno - numeroDos;
			document.write("La resta es: " + resultado);
		}
		else
		{
			resultado = numeroUno + numeroDos;
			document.write("La suma es: " + resultado);		}
	}

}
