function Mostrar()
{
//tomo la edad  
	var edad;

	edad = parseInt(document.getElementById('edad').value);

	if (edad < 18 && edad > 12) 
	{
		alert("Es adolecente");

	}
	if (edad >= 18) 
	{
		alert("Es mayor de edad");
	}
	if (edad < 13)
	{
		alert("Es un niño");
	}

}//FIN DE LA FUNCIÓN