function Mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var acumulador=0;
	var respuesta;
	var numero;
	
	while (respuesta == "si")
	contador ++;
	numero = prompt("");
	numero=parseInt(numero);
	while (isNaN(numero))
	{
		if (numero > 0)
		{
			positivo == numero;

		}
		else
		{
			
		}

	}
document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN