//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var ventas;
	var contador = 0;
	var importeMenor;
	var importeMayor;


	while(contador < 7)
	{
		contador ++;
		ventas = parseInt(prompt("Ingrese el importe de las ventas"));

		while(isNaN(ventas) || ventas <= 0)
		{
			ventas = parseInt(prompt("Ingrese el importe de las ventas nuevamente"));
		}

		if(contador == 1)
		{
			importeMayor = ventas;
			importeMenor = ventas;
		}
		else
		{
			if (importeMayor < ventas) 
			{
				importeMayor = ventas;
			}

			if (importeMenor > ventas) 
			{
				importeMenor = ventas;
			}
		}

	}

	document.write("El mayor importe fue: " + importeMayor + "<br> " + "El menor importe fue: " + importeMenor);




}

