function Mostrar()
{

	var positivo=0;
	var negativo=1;
	var numero;
	
	var respuesta='si';

	while(respuesta == "si")
	{
		numero = parseInt(prompt("Ingrese un numero"));
		
		while(isNaN(numero))
		{
			numero = parseInt(prompt("Ingrese un numero"));
		}

		respuesta = prompt("Para continuar, si");

		if(numero > 0)
		{
			positivo = numero + positivo;
		}
		else
		{
			if(numero != 0)
			{
				negativo = numero * negativo;
			}
		}
	}



	document.getElementById('suma').value = positivo;
	document.getElementById('producto').value = negativo;

}//FIN DE LA FUNCIÓN