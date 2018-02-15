function Mostrar()
{
//tomo la edad  
	var edad;

	edad = parseInt(document.getElementById('edad').value);

	if (edad < 18 && edad > 12) 
	{
		alert("Es adolecente");

	}
}//FIN DE LA FUNCIÓN