function Mostrar()
{
	var notas;
	var sexo;
	var contadorNotasVarones = 0;
	var contador = 0;
	var sumaNotas = 0;
	var promedioNotas;
	var notaMasBaja;

	while(contador < 100)
	{
		contador ++;
		notas = parseInt(prompt("Ingrese una nota"));
		sexo = prompt("Ingrese su sexo");

		while(isNaN(notas) || notas > 10 || notas < 0)
		{
			notas = parseInt(prompt("Ingrese nuevamente una nota"));
		}

		while(sexo != "f" && sexo != "m")
		{
			sexo = prompt("Ingrese su sexo nuevamente");
		}

		if (contador == 1) 
		{
			notaMasBaja = notas;
		}
		else
		{
			if (notaMasBaja > notas) 
			{
				notaMasBaja = notas;
			}
		}

		if (sexo == "m" && notas >= 6) 
		{
			contadorNotasVarones ++;
		}


		sumaNotas = notas + sumaNotas;

	}

	promedioNotas = sumaNotas / contador;

	alert("El promedio de notas es: " + promedioNotas + " La nota mas baja es: " + notaMasBaja + 
		" La cantidad de varones que su nota haya sido mayor o igual a 6 es: " + contadorNotasVarones);



}
