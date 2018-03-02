//2) aprarte de la base, pedir la altura de un triangulo equilatero e informar el perimetro y la superficie


function Mostrar()
{
	var base;
	var altura;
	var perimetro;
	var superficie;

	base = parseInt(document.getElementById('laBase').value);
	altura = parseInt(prompt("Ingrese la altura"));
	perimetro = base * 3;
	superficie = (base * altura) / 2

	document.write("El perimetro es: " + perimetro + "<br> " + "La superficie es: " + superficie);
}
