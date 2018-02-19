/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var numeroSecreto; 
var contadorIntentos;
var numeroganador;

function comenzar()
{
  numerosecreto=Math.floor(Math.random)()*(101-1)+1;
  numeroganador=document.getElementById("numero").value;
  alert(+numerosecreto);


	//Genero el número RANDOM entre 1 y 100
	 
		//alert(numeroSecreto );
	

}
{
function verificar()

document.getElementById("intentos").value = contadorintentos;
contadorIntentos = contadorIntentos +1;
if (numeroganador == numerosecreto)
{
  alert("usted es el ganador" + "y en solo" + " "+ contadorIntentos + " " + "intentos");
}
else if (numeroganador > numerosecreto)
{
  alert("se pasò...");
}
else
{
  alert("falta...");
}
if(contadorIntentos > 18)
{
  contadorIntentos= null
}
if (numeroSecreto == numeroganador)
{
}

	
	
}