//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var nota;
	var sexo;
	var contador = 0;
	var notaMinima;
	var sumaNotas = 0;
	var notaVarones = 0;
	var promedio

	while(contador < 6)
	{
		contador ++;
		nota = parseInt(prompt("Ingrese su nota"));
		sexo = prompt("Ingrese su sexo");

		while(isNaN(nota) || nota > 10 || nota < 0)
		{
			nota = parseInt(prompt("Ingrese su nota nuevamente"));
		}

		while(sexo != "f" && sexo != "m")
		{
			sexo = prompt("Ingrese su sexo nuevamente");
		}

		if (contador == 1) 
		{
			notaMinima = nota;
		}
		else
		{
			if (notaMinima > nota) 
			{
				notaMinima = nota;
			}
		}

		if (sexo == "m" && nota >= 6) 
		{
			notaVarones ++;
		}

		sumaNotas = nota + sumaNotas;
	}

	promedio = sumaNotas / contador;

	document.write("El promedio de las notas es: " + promedio + "<br> " + "La nota mas baja es: " + notaMinima + "<br> " + 
		"La cantidad de varones que su nota haya sido mayor o igual a 6 es: " + notaVarones);

}

