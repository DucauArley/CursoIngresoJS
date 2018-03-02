function Mostrar()
{
	var numeroUno;
	var numeroDos;
	var numeroTres;
	var mayor;

	 numeroUno = parseInt(prompt("Ingrese un numero"));
	 numeroDos = parseInt(prompt("Ingrese un numero"));
	 numeroTres = parseInt(prompt("Ingrese un numero"));

	 if (numeroUno > numeroDos && numeroUno > numeroTres) 
	 {
	 	mayor = numeroUno;
	 }
	 else
	 {
	 	if (numeroDos > numeroUno && numeroDos > numeroTres ) 
	 	{
	 		mayor = numeroDos;
	 	}
	 	else
	 	{
	 		mayor = numeroTres;
	 	}
	 }

	 document.write("El numero mayor es: " + mayor);


}
