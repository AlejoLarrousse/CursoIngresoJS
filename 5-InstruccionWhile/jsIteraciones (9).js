function Mostrar()
{

	var contador=0;
	var max = 0;
	var min;
	var numero;
	var numero2;
    var primera = true;

	// declarar variables
	
	var respuesta='si';

	while(respuesta!='no')
	{
		contador ++;
		numero = prompt("");
		numero2 = prompt("ingrese el numero 2");
		if (numero2 == null)
		{
			break
		}
		if (numero == null)
		{
			break
		}
	    numero = parseInt(numero);
		numero2= parseInt(numero2);
		while(isNaN(numero))
		{
		    alert("ingrese un numero");
			return
		}
		if(primera = true)
      {
	
		primera = false 
		max = numero;
		min = numero;
	  }
	  else if(numero > numero2)
{ document.getElementById("maximo".value = numero);
  document.getElementById("minimo").value = numero2;

		   
	}
else
	{ document.getElementById("maximo").value = numero2;
	document.getElementById("minimo").value = numero;
	}

	}


}//FIN DE LA FUNCIÓN