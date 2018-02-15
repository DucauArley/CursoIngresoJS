function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var nota;

	document.getElementById("FormIngreso").innerHTML = Math.floor(Math.random() * 10) + 1;
	nota = document.getElementById('FormIngreso').innerHTML;

	if (nota > 8) 
	{
		alert("EXCELENTE" + " " + nota);
	}
	else
	{
		if (nota > 3  && nota < 9) 
		{
			alert("APROBO" + " " + nota);
		}
		else
		{
			alert("Vamos, la proxima se puede" + " " + nota);
		}
	}
	

}//FIN DE LA FUNCIÓN