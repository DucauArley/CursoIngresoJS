var eleccionMaquina;
var ContadorDeEmpates=0;
var ContadorDeGanadas=0;
var ContadorDePerdidas=0;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 3
	eleccionMaquina = Math.floor(Math.random() * 3) + 1;


}//FIN DE LA FUNCIÓN
function piedra()
{
	var piedra = 1;

	if (piedra == eleccionMaquina)
	{
		alert("Usted empató");
		ContadorDeEmpates ++;
	}
	else
	{
		if (eleccionMaquina == 2) 
		{
			alert("Usted perdio");
			ContadorDePerdidas ++;
		}
		else
		{
			alert("Usted gano");
			ContadorDeGanadas ++;
		}
	}

	document.getElementById('empatadas').value = ContadorDeEmpates;
	document.getElementById('ganadas').value = ContadorDeGanadas;
	document.getElementById('perdidas').value = ContadorDePerdidas;


	eleccionMaquina = Math.floor(Math.random() * 3) + 1;


}//FIN DE LA FUNCIÓN
function papel()
{
	var papel = 2;

	if (papel == eleccionMaquina)
	{
		alert("Usted empató");
		ContadorDeEmpates ++;
	}
	else
	{
		if (eleccionMaquina == 3) 
		{
			alert("Usted perdio");
			ContadorDePerdidas ++;
		}
		else
		{
			alert("Usted gano");
			ContadorDeGanadas ++;
		}
	}

	document.getElementById('empatadas').value = ContadorDeEmpates;
	document.getElementById('ganadas').value = ContadorDeGanadas;
	document.getElementById('perdidas').value = ContadorDePerdidas;

	eleccionMaquina = Math.floor(Math.random() * 3) + 1;

}//FIN DE LA FUNCIÓN
function tijera()
{
	var tijera = 3;

	if (tijera == eleccionMaquina)
	{
		alert("Usted empató");
		ContadorDeEmpates ++;
	}
	else
	{
		if (eleccionMaquina == 1) 
		{
			alert("Usted perdio");
			ContadorDePerdidas ++;
		}
		else
		{
			alert("Usted gano");
			ContadorDeGanadas ++;
		}
	}

	document.getElementById('empatadas').value = ContadorDeEmpates;
	document.getElementById('ganadas').value = ContadorDeGanadas;
	document.getElementById('perdidas').value = ContadorDePerdidas;

	eleccionMaquina = Math.floor(Math.random() * 3) + 1;


}//FIN DE LA FUNCIÓN

function mostarResultado()
{

}