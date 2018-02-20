function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';


	while (respuesta != null)
	{
	
	contador++
	respuesta=prompt("ingrese el numero");
	respuesta= parseInt(respuesta);
	if (respuesta = null)
	{
   continue

	}



respuesta = confirm("esta seguro?");
if(respuesta != true)
{
	break;
}
acumulador += respuesta;
	}

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN