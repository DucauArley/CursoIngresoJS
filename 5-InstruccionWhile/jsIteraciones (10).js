function Mostrar()
{

	var contador=0;
	var numero;
	var positivos = 0;
	var negativos = 0;
	var cantidadPositivos = 0;
	var cantidadNegativos = 0;
	var cantidadNumerosPares = 0;
	var promedioPositivos = 0;
	var promedioNegativos = 0;
	var diferenciaPositivosNegativos;
	var cantidadCeros = 0;
	
	var respuesta = "si";

	while(respuesta != "no")
	{
		numero = parseInt(prompt("Ingrese un numero"));
		respuesta = prompt("Para salir, no");

		if (numero > 0) 
		{
			positivos = numero + positivos;
			cantidadPositivos ++;
		}
		else
		{
			if (numero < 0) 
			{
				negativos = numero + negativos;
				cantidadNegativos ++;
			}
			else
			{
				cantidadCeros ++;
			}
		}

		if (numero % 2 == 0) 
		{
			cantidadNumerosPares ++;
		}	
	}

	promedioPositivos = positivos / cantidadPositivos;
	promedioNegativos = negativos / cantidadNegativos;

	diferenciaPositivosNegativos = positivos - negativos;


	document.write("1) Suma de los negativos: " + negativos + "<br> " + "2) Suma de los positivos: " + positivos + "<br> " + "3) Cantidad de positivos: "
					 + cantidadPositivos + "<br> " + "4) Cantidad de negativos: " + cantidadNegativos + "<br> " + "5) Cantidad de ceros: " + cantidadCeros +
					 "<br> " + "6) Cantidad de numeros pares: " + cantidadNumerosPares + "<br> " + "7) Promedio de positivos: " + promedioPositivos + "<br> "
					 + "8) Promedio de negativos: " + promedioNegativos + "<br> " + "9) Diferencia entre negativos y positivos: " + diferenciaPositivosNegativos);








}//FIN DE LA FUNCIÓN