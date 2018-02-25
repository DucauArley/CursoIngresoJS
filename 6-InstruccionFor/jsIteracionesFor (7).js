function Mostrar()
{
	var numero;
	var cantidadDivisores = 0;

	numero = parseInt(prompt("Ingrese un numero"));



	for (var i = 0; i < numero; i++) 
		{
			if (numero % i == 0) 
			{
				document.write("<br> " + i);
				cantidadDivisores ++;
			}
		}

		document.write("<br> " + "La cantidad de divisores es: " + cantidadDivisores);





}//FIN DE LA FUNCIÓN