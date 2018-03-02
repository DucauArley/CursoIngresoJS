function Mostrar()
{
	var ventas;
	var contador = 0;
	var maximo;
	var minimo;


	while(contador < 24 && ventas != 0)
	{
		ventas = parseInt(prompt("Ingrese el importe de la venta"));
		contador ++;

		if (contador == 1) 
		{
			maximo = ventas;
			minimo = ventas;
		}
		else
		{
			if (maximo < ventas) 
			{
				maximo = ventas;
			}
			if(minimo > ventas)
			{
				minimo = ventas;
			}

		}

	}

	document.write("El numero maximo es: " + maximo + "<br> " + "El numero minimo es: " + minimo);




}
