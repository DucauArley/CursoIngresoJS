function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
	var numero;

	while(respuesta == 'si')
	{
		contador ++;
		numero = parseInt(prompt("Ingrese un numero"));
		respuesta = prompt("Desea ingresar otro numero?");
		acumulador = acumulador + numero;
	}

	document.getElementById('suma').value = acumulador;
	document.getElementById('promedio').value = acumulador / contador;

}//FIN DE LA FUNCIÓN