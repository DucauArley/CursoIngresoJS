function Mostrar()
{

	var mensaje = "Hola UTN FRA";
	var repeticiones = parseInt(prompt("ingrese el número de repeticiones"));

	for (var i = 0; i < repeticiones; i++) 
	{
		document.write("<br> " + mensaje); 
	}

}//FIN DE LA FUNCIÓN