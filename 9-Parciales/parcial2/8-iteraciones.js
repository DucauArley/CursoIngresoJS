//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var numero;
	var respuesta = "si";
	var numerosPares = 0;
	var sumaNumeros = 0;
	var contador = 0;
	var promedio;
	var numeroMaximo;
	var numeroMinimo;

	while(respuesta != "no")
	{
		contador ++;
		numero = parseInt(prompt("Ingrese un numero positivo"));

		while(isNaN(numero) || numero <= 0)
		{
			numero = parseInt(prompt("Ingrese el numero nuevamente"));
		}

		if (numero % 2 == 0 && numero != 0) 
		{
			numerosPares ++;
		}

		if (contador == 1) 
		{
			numeroMaximo = numero;
			numeroMinimo = numero;
		}
		else
		{
			if (numeroMaximo < numero) 
			{
				numeroMaximo = numero;
			}

			if (numeroMinimo > numero) 
			{
				numeroMinimo = numero;
			}
		}

		sumaNumeros = numero + sumaNumeros;

		respuesta = prompt("Para salir, no");

	}

	promedio = sumaNumeros / contador;

	document.write("La cantidad de numeros pares es: " + numerosPares + "<br> " + "El promedio es: " + promedio + "<br> " + 
			"La suma de todos los numeros es: " + sumaNumeros + "<br> " + "El numero maximo es: " + numeroMaximo + "<br> " + 
			"El numero minimo es: " + numeroMinimo);

}

