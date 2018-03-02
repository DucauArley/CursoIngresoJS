/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
	

function Sumar () 
{
	var precioUno;
	var precioDos;	
	var precioTres;
	var resultado;

	precioUno = parseInt(document.getElementById('PrecioUno').value);
	precioDos = parseInt(document.getElementById('PrecioDos').value);
	precioTres = parseInt(document.getElementById('PrecioTres').value);

	resultado = precioUno + precioDos + precioTres;

	alert("La suma es: " + resultado);
}
function Promedio () 
{
	var precioUno;
	var precioDos;	
	var precioTres;
	var resultado;

	precioUno = parseInt(document.getElementById('PrecioUno').value);
	precioDos = parseInt(document.getElementById('PrecioDos').value);
	precioTres = parseInt(document.getElementById('PrecioTres').value);
	
	resultado = (precioUno + precioDos + precioTres) / 3;

	alert("El promedio es: " + resultado);

}
function PrecioFinal () 
{
	var precioUno;
	var precioDos;	
	var precioTres;
	var sumaPrecios;
	var resultado;
	var IVA = 0.21;

	precioUno = parseInt(document.getElementById('PrecioUno').value);
	precioDos = parseInt(document.getElementById('PrecioDos').value);
	precioTres = parseInt(document.getElementById('PrecioTres').value);

	sumaPrecios = (precioUno + precioDos + precioTres);

	resultado = (sumaPrecios * IVA) + sumaPrecios;


	alert("El resultado es: " + resultado);


}