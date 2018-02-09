/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{
	var sueldo;
	var resultado;
	var aumento;
	
	aumento = 0.10;

	sueldo = parseInt(document.getElementById('sueldo').value);

	resultado = (sueldo * aumento) + sueldo;
	
	document.getElementById('resultado').value = resultado;
}

