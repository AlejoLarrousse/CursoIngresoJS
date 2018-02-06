/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{
    var numerouno;
    var numerodos;
    var suma;
    numerouno = document.getElementById("numeroUno").value;	
    numerodos = document.getElementById("numeroDos").value;
    numerouno = parseInt(numerouno);
    numerodos = parseInt(numerodos);
    suma = parseInt(suma);
    suma = numerouno + numerodos;
    alert(" La suma es " +suma);

    
	
}

function restar()
{
	var numerouno;
    var numerodos;
    var resta;
    numerouno = document.getElementById("numeroUno").value;	
    numerodos = document.getElementById("numeroDos").value;
    numerouno = parseInt(numerouno);
    numerodos = parseInt(numerodos);
    resta = parseInt(resta);
    resta = numerouno - numerodos;
    alert(" La resta es " +resta);
    
}

function multiplicar()
{ 
	var numerouno;
    var numerodos;
    var multiplicar;
    numerouno = document.getElementById("numeroUno").value;	
    numerodos = document.getElementById("numeroDos").value;
    numerouno = parseInt(numerouno);
    numerodos = parseInt(numerodos);
    multiplicar = parseInt(multiplicar);
    multiplicar = numerouno * numerodos;
    alert(" La multiplicacion es " +multiplicar);
}

function dividir()
{
	var numerouno;
    var numerodos;
    var dividir;
    numerouno = document.getElementById("numeroUno").value;	
    numerodos = document.getElementById("numeroDos").value;
    numerouno = parseInt(numerouno);
    numerodos = parseInt(numerodos);
    dividir = parseInt(dividir);
    dividir = numerouno / numerodos;
    alert(" La division es " +dividir);
}

