function Mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;
switch(mesDelAño)
{
   case "Enero":
    case "Marzo":
    case "Abril":
         alert("este mes tiene 31");
        break;
    case "Mayo":
    case "Junio":
    case "Julio":
    alert("este mes tiene 31");
        break;
    case "Agosto":
    case "Septiembre":
    case "Octubre":
    alert("este mes tiene 30");
        break;
    case "Noviembre":
    case "Diciembre":
     alert("este mes tiene mas de 30 dias");
     break
     case "Febrero":
     alert(" este mes tiene 28 dias");
}


//alert (mesDelAño);
	
	



}//FIN DE LA FUNCIÓN