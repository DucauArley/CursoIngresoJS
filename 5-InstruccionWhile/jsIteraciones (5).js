function Mostrar()
{

	var sexo = prompt("ingrese f ó m .");

	while(sexo != "f" && sexo != "m")
	{
		sexo = prompt("Ingrese f o m.");
	}

	if(sexo == 'f')
	{
		sexo = "Femenino";
	}
	else
	{
		sexo = "Masculino";
	}

	document.getElementById('Sexo').value = "Su sexo es: " + sexo;

}//FIN DE LA FUNCIÓN