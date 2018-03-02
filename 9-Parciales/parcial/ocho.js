/*pedir 3 datos hasta que el cliente quiera los datos son nombre del animal, peso del animal validar que sea mayor a 
cero y la temperatura del habitat del animal entre -40 y 40 grados. Informar el nombre del animal mas pesado, el nombre
del animal de la temperatura mas baja, la cantidad de temperaturas pares que se ingresaron, el promedio del peso de 
todos los animales, la temperatura maxima y la temperatura minima*/

function Mostrar()
{
	var contador = 0;
	var nombreAnimal;
	var peso;
	var temperaturaHabitat;
	var respuesta = "si";
	var pesoAnimalMasPesado = 0;
	var promedioPeso;
	var nombreAnimalMasPesado;
	var nombreAnimalMasFrio;
	var temperaturaHabitatMasFria;
	var temperaturaMaxima;
	var temperaturaMinima;
	var temperaturasPares = 0;
	var sumaPesos = 0;



	while(respuesta != "no")
	{
		contador ++;
		nombreAnimal = prompt("Ingrese el nombre del animal");
		peso = parseInt(prompt("Ingrese el peso del animal"));
		temperaturaHabitat = parseInt(prompt("Ingrese la temperatura del habitat del animal"));

		while(isNan(peso) ||peso < 0)
		{
			alert("Ingrese el peso nuevamente");
			peso = parseInt(prompt("Ingrese el peso del animal"));
		}

		while(isNan(temperaturaHabitat) || temperaturaHabitat < -40 || temperaturaHabitat > 40)
		{
			alert("Ingrese la temperatura nuevamente");
			temperaturaHabitat = parseInt(prompt("Ingrese la temperatura del habitat del animal"));
	    }


	    if (contador == 1) 
	    {
	    	nombreAnimalMasPesado = nombreAnimal;
	    	nombreAnimalMasFrio = nombreAnimal;
	    	temperaturaHabitatMasFria = temperaturaHabitat
	    	temperaturaMaxima = temperaturaHabitat;
	    	temperaturaMinima = temperaturaHabitat;
	    }
	    else
	    {
	    	if (pesoAnimalMasPesado < peso) 
	    	{
	    		nombreAnimalMasPesado = nombreAnimal;
		    }

		    if (temperaturaHabitatMasFria > temperaturaHabitat) 
		    {
	    		nombreAnimalMasFrio = nombreAnimal;
	 	    }

	 	    if (temperaturaMaxima < temperaturaHabitat) 
	 	    {
	 	    	temperaturaMaxima = temperaturaHabitat
	 	    }

	 	    if (temperaturaMinima > temperaturaHabitat) 
	 	    {
	 	    	temperaturaMinima = temperaturaHabitat
	 	    }
		}

		if (temperaturaHabitat % 2 == 0 && temperaturaHabitat != 0) 
		{
			temperaturasPares ++;
		}

		sumaPesos = peso + sumaPesos;

		respuesta = prompt("Para salir, escriba no")
	}
	promedioPeso = sumaPesos / contador;

	document.write("El nombre del animal mas pesado es: " + nombreAnimalMasPesado + "<br> " + 
		"El nombre del animal de la temperatura mas baja es: " + nombreAnimalMasFrio + "<br> " + 
		"La cantidad de temperaturas pares es: " + temperaturasPares + "<br> " + 
		"El promedio del peso de los animales es: " + promedioPeso + "<br> " + "La temperatura maxima es: " + temperaturaMaxima
		+ "<br> " + "La temperatura minima es: " + temperaturaMinima);



}
