function Mostrar()
{

	var contador=0;
	var numero;
	var maximo;
	var minimo;
	var contador = 0;
	var respuesta='si';

	while(respuesta!='no')
	{
		contador ++;
		numero = parseInt(prompt("Ingrese un numero"));
		respuesta = prompt("Para salir, no");

		if(contador == 1)
		{
			maximo = numero;
			minimo = numero;
		}
		else
		{
			if (numero > maximo) 
			{
				maximo = numero;
			}

			if (numero < minimo) 
			{
				minimo = numero;
			}
		}
	}

	document.getElementById('maximo').value = maximo;
	document.getElementById('minimo').value = minimo;


}//FIN DE LA FUNCIÓN