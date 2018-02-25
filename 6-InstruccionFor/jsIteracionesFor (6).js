function Mostrar()
{
	var numero;
	var pares = 1;
	var cantidadPares = 0;

	numero = parseInt(prompt("Ingrese un numero"));


	if (numero != 0) 
	{
		if (numero % 2 == 0) 
		{
			document.write(pares);

			for (var i = 0; i < numero; i++) 
			{
				pares ++;

				if (pares % 2 == 0) 
				{
					document.write("<br> " + pares);
					cantidadPares ++;
				}
			}
		}
		else
		{
			document.write(pares); 

			for (var i = 0; i < numero - 1; i++) 
			{
				pares ++;

				if (pares % 2 == 0) 
				{
					document.write("<br> " + pares);
					cantidadPares ++;
				}
			}
			document.write("<br> " + numero)
		}
	}

	document.write("<br> " + "La cantidad de pares es de: " + cantidadPares);



}//FIN DE LA FUNCIÓN