function Mostrar()
{

	var numero = prompt("ingrese un número entre 0 y 10.");

	while(numero >= 9 || numero < 0)
	{
		alert("No es un numero del 0 al 10");
		numero = prompt("Ingrese un numero entre 0 y 10");
	}

	
	document.getElementById('Numero').value = numero;



}//FIN DE LA FUNCIÓN