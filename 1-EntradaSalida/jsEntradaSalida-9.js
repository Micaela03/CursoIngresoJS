/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
    var importe= document.getElementById("sueldo").value;
    
    importe= parseInt (importe);

     
     // 100 - importe
     // 10% - x

     importe= importe + ((importe * 10) / 100); // forma1
     
     document.getElementById("resultado").value= importe;

   
    





	
}
