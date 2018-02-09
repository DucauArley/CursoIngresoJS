/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var numero1;
 	var numero2;
 	var suma;
 
 	numero1 = parseInt(document.getElementById('numeroUno').value);
 	numero2 = parseInt(document.getElementById('numeroDos').value);
 	
 	suma = numero1 + numero2;

 	alert("La suma de los dos numeros es: " + suma);
}

function restar()
{
	var numero1;
 	var numero2;
 	var resta;

 	numero1 = parseInt(document.getElementById('numeroUno').value);
 	numero2 = parseInt(document.getElementById('numeroDos').value);
 
 	resta = numero1 - numero2;

 	alert("La resta de los dos numeros es: " + resta);
}

function multiplicar()
{ 
	var numero1;
 	var numero2;
 	var multiplicacion;
 
 	numero1 = parseInt(document.getElementById('numeroUno').value);
 	numero2 = parseInt(document.getElementById('numeroDos').value);

 	multiplicacion = numero1 * numero2
 
 	alert("La multiplicacion de los dos numeros es: " + multiplicacion);
}

function dividir()
{
	var numero1;
 	var numero2;
 	var division;
 
 	numero1 = parseInt(document.getElementById('numeroUno').value);
 	numero2 = parseInt(document.getElementById('numeroDos').value);

 	division = numero1 / numero2
 
 	alert("La division entre los dos numeros es: " + division);
}

