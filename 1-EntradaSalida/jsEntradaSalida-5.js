/*Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
    var nombre;
    var edad;
    var mensaje;
    nombre= prompt("ingrese nombre")
     document.getElementById("elNombre").value= nombre;
    edad= prompt("ingrese su edad")
    document.getElementById("laEdad").value=edad;
    mensaje=" usteded se llama jose y tiene 66 años ";
    alert= (mensaje);
}

