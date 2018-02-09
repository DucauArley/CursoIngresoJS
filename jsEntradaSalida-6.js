/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
Mostar el resulto por medio de "ALERT"*/
function sumar()
{
	var numero1;
	var numero2;
	var total;

	numero1 = parseInt(document.getElementById('numeroUno').value);
	numero2 = parseInt(document.getElementById('numeroDos').value);

	total = numero1 + numero2;

	alert("La suma de los dos numeros es: " + total);
}

