function Mostrar()
{
var num;
for(;num!=9;)
{

  num= prompt("");
  num=parseint(num);


  while (isNaN(num))
  {
  num= prompt(",");
  num=parseint(num);
  }

}


}//FIN DE LA FUNCIÓN